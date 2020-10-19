import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  // get all existing orders
  getOrderFromLS = () => {
    let allOrders = JSON.parse(localStorage.getItem('Orders'));
    return allOrders;
  }

  addOrderToLS = (newOrder) => {
    // existing orders
    let allOrders = this.getOrderFromLS();
    // array for existing orders + added new order
    let updateOrders = [];

    if (allOrders) {
      for (let i = 0; i < allOrders.length; i++) {
        updateOrders.push(allOrders[i]);
      };
      updateOrders.push(newOrder);
      localStorage.setItem("Orders", JSON.stringify(updateOrders));
    } else {
      localStorage.setItem("Orders", JSON.stringify([newOrder]))
    }
  }

  // getting users ID who placed the order
  orderUserID = () => {
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
