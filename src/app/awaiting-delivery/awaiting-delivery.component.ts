import { animate, animateChild, group, query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit, OnChanges } from '@angular/core';
import { OrderService } from '../services/order.service';
import { bounceOutLeftAnimation, fadeInAnimation, slide } from '../utilities/animations';

@Component({
  selector: 'app-awaiting-delivery',
  templateUrl: './awaiting-delivery.component.html',
  styleUrls: ['./awaiting-delivery.component.css'],
  animations: [

    trigger('awaitingAnimation', [
      transition(':enter', [
        group([
          query('.options-title', [
            style({ transform: 'translateX(-100%)' }),
            animate(200)
          ]),
          query('@slideAnim',
            stagger(50, animateChild()))
        ])
      ])
    ]),

    trigger('slideAnim', [
      transition(':enter', [
        useAnimation(fadeInAnimation, { params: { duration: '500ms' } })
      ]),
      transition(':leave', [
        style({ transform: 'scale(1.1)' }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
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
    // update local storage with new status
    let user = order.userId;
    let userOrder = order.orderId;
    this.orderService.updateOrderToRecieved(user, userOrder);

    // after recieved button is pushed element is removed from dom
    this.loggedUserOrders.forEach((order) => {
      let orderIndex = this.loggedUserOrders.indexOf(order)
      if (order.orderId == userOrder) {
        this.loggedUserOrders.splice(orderIndex, 1);
      }
    })
  }

  animationStarted(e) {
    console.log(e)
  }
  animationDone(e) {
    console.log(e)
  }

}
