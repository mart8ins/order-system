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
      console.log(currentUserId)
    }
    return currentUserId;
  }
}
