import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ModelService } from '../services/model.service';

// data to render in select option
import { Brands } from '../utilities/brands';
import { NewOrder } from '../interfaces/new-order-create';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor(private orderService: OrderService, private modelService: ModelService) {
  }


  allBrands: string[] = [];
  choosenBrandModels: string[] = [];
  orders: any[] = [];
  usedIds: number[] = [];

  ngOnInit(): void {
    // to show all brands in select/options for brand
    this.allBrands = Brands;
  }


  // generates random id for new order
  generateId = () => {
    let id = Math.floor(Math.random() * 1000);
    this.usedIds.push(id)
    this.usedIds.forEach(item => {
      if (id == item) {
        id = Math.floor(Math.random() * 1000);
      } else {
        return id;
      }
    })
    return id;
  }

  // form submit
  submit(fields) {
    if (fields.value.brand && fields.value.orderData.model && fields.value.orderData.quantity) {
      // getting users ID who is logged in, and ading this id to the order
      let userid = this.orderService.orderUserID();
      // creates new order object
      let order: NewOrder = {
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
    fields.reset();
  }

  // to show all added models for current choosen brand
  brandModels(inputBrand) {
    this.choosenBrandModels = this.modelService.get_Stored_Model_Data_Logged_User(inputBrand.value);
  }
}
