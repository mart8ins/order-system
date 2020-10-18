import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDatabaseComponent } from './model-database.component';

describe('ModelDatabaseComponent', () => {
  let component: ModelDatabaseComponent;
  let fixture: ComponentFixture<ModelDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
