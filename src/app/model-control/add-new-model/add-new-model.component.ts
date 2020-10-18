import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputValidators } from '../../validators/input.validators'


@Component({
  selector: 'app-add-new-model',
  templateUrl: './add-new-model.component.html',
  styleUrls: ['./add-new-model.component.css']
})
export class AddNewModelComponent implements OnInit {

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



  formSubmit = (brand, model, applianceType, description) => {
    console.log(applianceType)
  }

  constructor() { }

  ngOnInit(): void {
  }



}
