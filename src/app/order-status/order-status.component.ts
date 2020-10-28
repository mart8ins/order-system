import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  constructor() { }

  intro: boolean;

  ngOnInit(): void {
    this.intro = true;
  }

  forIntro() {
    this.intro = false;
  }
}
