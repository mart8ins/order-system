import { Component, OnInit, OnChanges } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-awaiting-delivery',
  templateUrl: './awaiting-delivery.component.html',
  styleUrls: ['./awaiting-delivery.component.css']
})
export class AwaitingDeliveryComponent implements OnInit, OnChanges {

  constructor(private orderService: OrderService) { }

  loggedUserOrders: any[] = [];

  ngOnInit(): void {
    this.loggedUserOrders = this.orderService.getLoggedUsersOrders();
  }

  ngOnChanges(): void {

  }


  // to update orders property in database to - true
  recievedOrder(order) {
    let user = order.userId;
    let userOrder = order.orderId;
    this.orderService.updateOrderToRecieved(user, userOrder);
  }

}
