import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsRecievedComponent } from './items-recieved.component';

describe('ItemsRecievedComponent', () => {
  let component: ItemsRecievedComponent;
  let fixture: ComponentFixture<ItemsRecievedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsRecievedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsRecievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
