import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  constructor() { }

  intro: boolean;
  statusInfo = {
    awaiting: false,
    recieved: false,
    allorders: false
  }

  ngOnInit(): void {
    this.intro = true;
  }

  forIntro() {
    this.intro = false;
  }

  showStatusInfo(infostatus) {
    switch (infostatus.textContent) {
      case "Awaiting delivery...":
        this.statusInfo.awaiting ? this.statusInfo.awaiting = false : this.statusInfo.awaiting = true;
        break;
      case "Items recieved...":
        this.statusInfo.recieved ? this.statusInfo.recieved = false : this.statusInfo.recieved = true;
        break;
      case "All orders...":
        this.statusInfo.allorders ? this.statusInfo.allorders = false : this.statusInfo.allorders = true;
        break;

    }



    // this.statusInfo ? this.statusInfo = false : this.statusInfo = true;
  }
}
