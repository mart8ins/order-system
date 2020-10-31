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


  // get all model names for choosen brand
  get_Stored_Model_Data_Logged_User(inputBrand) {
    // to store all models for current brand
    let ModelsOfBrand = [];

    // get logged user id and all modelData
    let userID = this.modelCreatedByUserId();
    let createdModels: any[] = JSON.parse(localStorage.getItem('modelData'));

    if (createdModels) {
      for (let i = 0; i < createdModels.length; i++) {
        if (createdModels[i].createdByUserId == userID && createdModels[i].brand == inputBrand) {
          ModelsOfBrand.push(createdModels[i].model)
        }
      }
    }
    return ModelsOfBrand
  }

  get_all_model_data_logged_user() {
    let userID = this.modelCreatedByUserId();
    let userModelData = [];
    let allCreatedModels: any[] = JSON.parse(localStorage.getItem('modelData'));

    if (allCreatedModels) {
      allCreatedModels.forEach((createdModel) => {
        if (userID == createdModel.createdByUserId) {
          userModelData.push(createdModel)
        }
      })
    }
    return userModelData ? userModelData : null;
  }


}
