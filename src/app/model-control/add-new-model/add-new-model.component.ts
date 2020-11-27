import { Component, OnInit } from '@angular/core';
// import { Validators } from '@angular/forms';
// import { InputValidators } from '../../validators/input.validators';
// helper data to render all needed values in select options
import { Brands } from "../../utilities/brands";
import { AppliancesType } from '../../utilities/appliances-type'
// service for storing new model
import { ModelService } from '../../services/model.service';
// interfaces
import { NewModel } from 'src/app/interfaces/new-model-create';
// animations
import { fade } from 'src/app/utilities/animations';



@Component({
  selector: 'app-add-new-model',
  templateUrl: './add-new-model.component.html',
  styleUrls: ['./add-new-model.component.css'],
  animations: [
    fade
  ]
})
export class AddNewModelComponent implements OnInit {

  constructor(private modelService: ModelService) { }

  allBrands;
  applianceTypes;
  latestAddedModel: string;
  addedModelAlreadyExists: boolean;

  ngOnInit(): void {
    this.allBrands = Brands;
    this.applianceTypes = AppliancesType;
  }

  submit(form) {
    console.log(form)
    if (form.controls.brand.value && form.controls.model.value && form.controls.type.value) {
      {
        let userid = this.modelService.modelCreatedByUserId();

        let newModel: NewModel = {
          createdByUserId: userid,
          brand: form.controls.brand.value,
          model: form.controls.model.value.toUpperCase(),
          type: form.controls.type.value,
          // description: form.controls.descriptionvalue
        }
        this.modelService.storeModelToLS(newModel);
        this.addedModelAlreadyExists = this.modelService.isModelAdded();
        if (!this.addedModelAlreadyExists) {
          this.latestAddedModel = `${newModel.brand} ${newModel.model} added to the data base.`;
          setTimeout(() => {
            this.latestAddedModel = '';
          }, 4000);
        } else {
          this.latestAddedModel = `Model ${newModel.model} already exists in database!`
        }

        // for info msg about added model to data base

      }
    }

    form.reset();

  }

}