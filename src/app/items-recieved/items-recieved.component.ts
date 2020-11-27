import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service'
import { fadeInAnimation } from '../utilities/animations';

@Component({
  selector: 'app-items-recieved',
  templateUrl: './items-recieved.component.html',
  styleUrls: ['./items-recieved.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        useAnimation(fadeInAnimation, { params: { duration: '500ms' } })
      ])
    ])
  ]
})
export class ItemsRecievedComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  loggedUserOrders: any[] = [];
  allRecievedOrders: any[] = [];

  ngOnInit(): void {
    this.loggedUserOrders = this.orderService.getLoggedUsersOrders();
    this.loggedUserOrders.forEach((order) => {
      if (order.recieved) {
        this.allRecievedOrders.push(order);
      }
    })
  }
}
