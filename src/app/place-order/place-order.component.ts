import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor() {
  }

  // orders: any[] = [];
  // usedIds: number[] = [];
  // order: any = {
  // }

  // generateId = () => {
  //   let id = Math.floor(Math.random() * 100);
  //   this.usedIds.push(id)
  //   this.usedIds.forEach(item => {
  //     if (id == item) {
  //       id = Math.floor(Math.random() * 100);
  //     } else {
  //       return id;
  //     }
  //   })
  //   return id;
  // }

  // orderSubmit = ($event, brend, item, quantity) => {
  //   $event.preventDefault();

  //   let order = {
  //     orderId: this.generateId(),
  //     brend: brend,
  //     item: item,
  //     quantity: quantity,
  //     dateCreated: new Date(),
  //     recieved: false
  //   }

  //   this.orders.push(order)

  //   localStorage.setItem(`Order Id-${order.orderId}`, JSON.stringify(this.order))
  //   console.log(this.orders)
  // }

  ngOnInit(): void {

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
    console.log(fields)
    // creates new order object
    let order = {
      orderId: this.generateId(),
      brand: fields.value.brand,
      model: fields.value.orderData.model,
      quantity: fields.value.orderData.quantity,
      created: new Date().getDate(),
      recieved: false
    }
    // pushes new order to order array and places the order in localStorage
    // all orders array will be used to display all curent added orders, but not all previosly stored - in this same component
    this.orders.unshift(order);
    localStorage.setItem(`OrderId-${order.orderId}`, JSON.stringify(order))
  }

  validation(field) {
    console.log(field)
  }

}
