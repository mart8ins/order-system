import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-database',
  templateUrl: './model-database.component.html',
  styleUrls: ['./model-database.component.css']
})
export class ModelDatabaseComponent implements OnInit {

  constructor() { }

  intro: boolean;

  statusInfo = {
    viewModels: false,
    newModel: false
  }

  ngOnInit(): void {
    this.intro = true;
  }

  forIntro() {
    this.intro = false;
  }
  showStatusInfo(statusFor) {
    switch (statusFor.textContent) {
      case 'View models...':
        this.statusInfo.viewModels ? this.statusInfo.viewModels = false : this.statusInfo.viewModels = true;
        break;
      case 'Add new model to database...':
        this.statusInfo.newModel ? this.statusInfo.newModel = false : this.statusInfo.newModel = true;
    };
    console.log(this.statusInfo.newModel)
  }
}
