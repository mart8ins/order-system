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

  allBrands: string[] = [];
  uniqueUsersCreatedModels: any[] = [];
  choosenBrandModels: string[] = [];

  ngOnInit(): void {
    this.allBrands = Brands;
    this.uniqueUsersCreatedModels = this.modelService.get_Stored_Model_Data_Logged_User();
  }

  orders: any[] = [];
  usedIds: number[] = [];


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

  submit(fields) {

    if (fields.value.brand && fields.value.orderData.model && fields.value.orderData.quantity) {
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

    // to clear value in ngForm controls, but in html input field value is cleared with (click)="modelValue.value = ''; quantityValue.value = ''; brandValue.value = ''; "
    fields.value.brand = '';
    fields.value.orderData.model = '';
    fields.value.orderData.quantity = '';

  }

  // with input for brands i get choosen brand and depending of that i use it to get related models to this brand
  // and result array i use to show these models in select/options
  brandModels(inputBrand, fields) {
    this.choosenBrandModels = []; // to clear data array, if user changes mind of choosen brand, models dont mix
    this.uniqueUsersCreatedModels.forEach((brandModels) => {
      if (inputBrand.value == brandModels.brand) {
        let onlyModels: any[] = brandModels.models;
        onlyModels.forEach((item) => {
          this.choosenBrandModels.push(item)
        })
      }

    })
  }
}
