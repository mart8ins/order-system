import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  orders = [
    {
      date: 2020,
      brand: "AEG",
      model: 'ECCCXXX3',
      quantity: 2,
      recieved: true
    },
    {
      date: 1020,
      brand: "Bosch",
      model: 'XXXXDDD',
      quantity: 12,
      recieved: false
    }
  ]

}
