import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-view-models',
  templateUrl: './view-models.component.html',
  styleUrls: ['./view-models.component.css']
})
export class ViewModelsComponent implements OnInit {

  userModels: any[];

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.userModels = this.modelService.get_all_model_data_logged_user();
  }

}
