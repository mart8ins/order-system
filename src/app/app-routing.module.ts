import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { AwaitingDeliveryComponent } from './awaiting-delivery/awaiting-delivery.component';
import { ItemsRecievedComponent } from './items-recieved/items-recieved.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { LoginComponent } from './login/login.component';

import { OrdersGuard } from './guard/orders.guard'; // imports no guard clases
import { ViewModelsComponent } from './model-control/view-models/view-models.component';
import { AddNewModelComponent } from './model-control/add-new-model/add-new-model.component';
import { ModelDatabaseComponent } from './model-control/model-database/model-database.component';
import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';



const routes: Routes = [
  { path: 'place-order', canActivate: [OrdersGuard], component: PlaceOrderComponent }, // canActivate pieņem guard klasi, kas atgrie'true vai false
  {
    path: 'order-status', canActivate: [OrdersGuard], component: OrderStatusComponent,
    children: [
      { path: 'awaiting-delivery', component: AwaitingDeliveryComponent },
      { path: 'items-recieved', component: ItemsRecievedComponent },
      { path: 'all-orders', component: AllOrdersComponent }
    ]
  },
  {
    path: 'model-database', component: ModelDatabaseComponent,
    children: [
      { path: 'view-models', component: ViewModelsComponent },
      { path: 'add-new-model', component: AddNewModelComponent }
    ]
  },
  { path: 'new-user', component: RegisterNewUserComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/place-order', pathMatch: 'full' },
  { path: "**", redirectTo: '/place-order' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
Izmantojam izveidoto guard komponenti, lai kontrolētu vai lietotājs drīkst redzēt citas komponentes izņemot Login komponenti.
Ja guard atgriež true, tad canActivate ir pieņēmis true vērtību un palaiž lietotāju tālāk par login komponenti
*/