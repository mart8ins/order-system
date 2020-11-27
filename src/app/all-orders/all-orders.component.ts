import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { fadeInAnimation } from '../utilities/animations';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        useAnimation(fadeInAnimation, { params: { duration: '500ms' } })
      ])
    ])
  ]
})
export class AllOrdersComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  loggedUserOrders: any[] = [];

  ngOnInit(): void {
    this.loggedUserOrders = this.orderService.getLoggedUsersOrders();
  }

}
