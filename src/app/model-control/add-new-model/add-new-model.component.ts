import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputValidators } from '../../validators/input.validators';

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


  form = new FormGroup(
    {
      brand: new FormControl('',
        [
          Validators.required,
          InputValidators.cannotContainSpace,
          InputValidators.cannotContainNumber
        ]
      ),
      model: new FormControl('',
        [
          Validators.required,
          InputValidators.cannotContainSpace
        ]
      ),
      applianceType: new FormControl('', Validators.required),
      description: new FormControl('')
    }
  )

  get brand() {
    return this.form.get('brand')
  }
  get model() {
    return this.form.get('model')
  }
  get applianceType() {
    return this.form.get('applianceType')
  }
  get description() {
    return this.form.get('description')
  }



  formSubmit = (form) => {
    console.log(form.value)
    if (form.value.brand && form.value.model && form.value.applianceType) {
      let userid = this.modelService.modelCreatedByUserId();

      let addModel = {
        createdByUserId: userid,
        brand: form.value.brand,
        model: form.value.model.toUpperCase(),
        applianceType: form.value.applianceType,
        description: form.value.description
      }

      this.modelService.storeModelToLS(addModel);

      // for info msg about added model to data base
      this.latestAddedModel = `${addModel.brand} ${addModel.model}`

      // clears the form after submit, and also removes validation errors
      this.form.controls.brand.setValue('');
      this.form.controls.brand.markAsUntouched();
      this.form.controls.model.setValue('');
      this.form.controls.model.markAsUntouched();
      this.form.controls.applianceType.setValue('');
      this.form.controls.applianceType.markAsUntouched();
      this.form.controls.description.setValue('');
      this.form.controls.description.markAsUntouched();
    }
  }
}
