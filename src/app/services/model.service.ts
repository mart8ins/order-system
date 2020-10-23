import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }

  // to get existing models in database
  getModelDataFromLS = () => {
    let modelDataAll = JSON.parse(localStorage.getItem("modelData"));
    return modelDataAll;
  }

  // update model database
  storeModelToLS = (newModel) => {
    let dataFromLS = this.getModelDataFromLS();
    let dataUpdateToLS = [];

    if (dataFromLS) {
      for (let i = 0; i < dataFromLS.length; i++) {
        dataUpdateToLS.push(dataFromLS[i]);
      }
      dataUpdateToLS.push(newModel);
      localStorage.setItem('modelData', JSON.stringify(dataUpdateToLS))
    } else {
      localStorage.setItem('modelData', JSON.stringify([newModel]))
    }

  }
  // getting users ID who placed the order
  modelCreatedByUserId = () => {
    let userSession = sessionStorage.getItem("username");
    let allUsers = JSON.parse(localStorage.getItem("Users"));
    let currentUserId;
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].username == userSession) {
        currentUserId = allUsers[i].id;
      }
    }
    return currentUserId;
  }

  get_Stored_Model_Data_Logged_User() {
    let userID = this.modelCreatedByUserId();
    let createdModels: any[] = JSON.parse(localStorage.getItem('modelData'));

    // for all registred inputs for brand
    let brands = [];
    let allModelOfBrand = [];

    if (createdModels) {
      createdModels.forEach((modelData) => {
        if (modelData.createdByUserId == userID) {
          brands.push(modelData.brand)
        }
      })

      // getting only unique models
      let uniqueBrands = [...new Set(brands)];
      // storing brand -> all specific brands models


      uniqueBrands.forEach((unique) => {
        let brand = unique;
        let models = [];

        createdModels.forEach((modelData) => {
          if (brand == modelData.brand) {
            models.push(modelData.model)
          }
        })
        allModelOfBrand.push({
          brand,
          models
        })
      })
    }
    return allModelOfBrand
  }


}
