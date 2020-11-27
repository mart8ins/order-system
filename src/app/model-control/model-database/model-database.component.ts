import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInAnimation } from 'src/app/utilities/animations';

@Component({
  selector: 'app-model-database',
  templateUrl: './model-database.component.html',
  styleUrls: ['./model-database.component.css'],
  animations: [
    trigger('fadeInAnim', [
      transition(':enter', [
        useAnimation(fadeInAnimation, { params: { duration: '500ms' } })
      ])

    ])
  ]
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
