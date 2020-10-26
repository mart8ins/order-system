import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-database',
  templateUrl: './model-database.component.html',
  styleUrls: ['./model-database.component.css']
})
export class ModelDatabaseComponent implements OnInit {

  constructor() { }

  intro: boolean;

  ngOnInit(): void {
    this.intro = true;
  }

  toShowComponent() {
    this.intro = false;
  }
}
