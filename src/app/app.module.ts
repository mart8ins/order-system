import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { AwaitingDeliveryComponent } from './awaiting-delivery/awaiting-delivery.component';
import { ItemsRecievedComponent } from './items-recieved/items-recieved.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { LoginComponent } from './login/login.component';
import { DataSharingService } from './services/data-sharing.service';
import { ViewModelsComponent } from './model-control/view-models/view-models.component';
import { AddNewModelComponent } from './model-control/add-new-model/add-new-model.component';
import { ModelDatabaseComponent } from './model-control/model-database/model-database.component';
import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlaceOrderComponent,
    OrderStatusComponent,
    AwaitingDeliveryComponent,
    ItemsRecievedComponent,
    AllOrdersComponent,
    LoginComponent,
    ViewModelsComponent,
    AddNewModelComponent,
    ModelDatabaseComponent,
    RegisterNewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
