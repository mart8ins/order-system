import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-model-data',
  templateUrl: './model-data.component.html',
  styleUrls: ['./model-data.component.css']
})
export class ModelDataComponent implements OnInit {

  @Input('modelData') modelData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
