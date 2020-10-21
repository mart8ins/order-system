import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ModelService } from '../services/model.service';

// data to render in select option
import { Brands } from '../utilities/brands';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor(private orderService: OrderService, private modelService: ModelService) {
  }

  allBrands;
  uniqueUsersCreatedModels;

  ngOnInit(): void {
    this.allBrands = Brands;
    this.uniqueUsersCreatedModels = this.modelService.get_Stored_Model_Data_Logged_User();
    console.log(this.uniqueUsersCreatedModels, 'komponentē')
  }

  orders: any[] = [];
  usedIds: number[] = [];


  // generates random id for new order
  generateId = () => {
    let id = Math.floor(Math.random() * 1000);
    this.usedIds.push(id)
    this.usedIds.forEach(item => {
      if (id == item) {
        id = Math.floor(Math.random() * 100);
      } else {
        return id;
      }
    })
    return id;
  }

  submit(fields) {
    // getting users ID who is logged in, and ading this id to the order
    let userid = this.orderService.orderUserID();

    // creates new order object
    let order = {
      userId: userid,
      orderId: this.generateId(),
      brand: fields.value.brand,
      model: fields.value.orderData.model,
      quantity: fields.value.orderData.quantity,
      created: new Date(),
      recieved: false
    }

    // all orders array will be used to display all curent added orders, but not all previosly stored - in this same component
    this.orders.unshift(order);
    // store to localStorage
    this.orderService.addOrderToLS(order);
  }

  validation(field) {
    console.log(field)
  }

}
