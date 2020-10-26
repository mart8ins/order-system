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

  // get current users orders
  getLoggedUsersOrders = () => {
    // to store logged user orders
    let currentUsersOrders: any[] = [];

    // all orders from database
    let allOrders: any[] = this.getOrderFromLS();
    // logged users ID
    let loggedUser = this.orderUserID();

    allOrders.forEach((order) => {
      if (order.userId == loggedUser) {
        currentUsersOrders.push(order)
      }
    })
    return currentUsersOrders;
  }

  // add new order to localStorage
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

  // getting users ID whos logged in. Using it in place order component, to add user id to placed order. Also using it to show logged users info
  orderUserID = () => {
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

  // update order in localStorage with new status
  updateOrderToRecieved(recievedUserId, recievedUserOrderId) {
    let allOrders: any[] = this.getOrderFromLS();
    // looping trough all orders
    allOrders.forEach((item) => {
      // if recieved orders user id and order id matches
      if (item.userId == recievedUserId && item.orderId == recievedUserOrderId) {
        // get this item index
        let itemToUpdateIndex = allOrders.indexOf(item);
        // remove this order from all orders
        let itemToUpdateRemoved = allOrders.splice(itemToUpdateIndex, 1);
        // set this orders property recieved to true
        itemToUpdateRemoved[0].recieved = true;
        // placing this order back to all orders
        allOrders.unshift(itemToUpdateRemoved[0]);
      }
    })
    // updating localStorage
    localStorage.setItem("Orders", JSON.stringify(allOrders));
  }

}
