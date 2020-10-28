import { Component, OnInit } from '@angular/core';
// import { Validators } from '@angular/forms';
// import { InputValidators } from '../../validators/input.validators';

// helper data to render all needed values in select options
import { Brands } from "../../utilities/brands";
import { AppliancesType } from '../../utilities/appliances-type'

// service for storing new model
import { ModelService } from '../../services/model.service'


@Component({
  selector: 'app-add-new-model',
  templateUrl: './add-new-model.component.html',
  styleUrls: ['./add-new-model.component.css']
})
export class AddNewModelComponent implements OnInit {

  constructor(private modelService: ModelService) { }

  allBrands;
  applianceTypes;
  latestAddedModel: string;

  ngOnInit(): void {
    this.allBrands = Brands;
    this.applianceTypes = AppliancesType;
  }

  submit(form) {
    console.log(form)
    if (form.controls.brand.value && form.controls.model.value && form.controls.type.value) {
      {
        let userid = this.modelService.modelCreatedByUserId();

        let addModel = {
          createdByUserId: userid,
          brand: form.controls.brand.value,
          model: form.controls.model.value.toUpperCase(),
          applianceType: form.controls.type.value,
          description: form.controls.descriptionvalue
        }
        this.modelService.storeModelToLS(addModel);
        // for info msg about added model to data base
        this.latestAddedModel = `${addModel.brand} ${addModel.model}`
      }
    }
    form.reset();
  }


}