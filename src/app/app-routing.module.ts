import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { AddAccessoryComponent } from './form/add-accessory/add-accessory.component';
import { AddSupplierComponent } from './form/add-supplier/add-supplier.component';

import { EditAccessoryComponent } from './form/edit-accessory/edit-accessory.component';
import { EditOrdersComponent } from './form/edit-orders/edit-orders.component';
import { EditSupplierComponent } from './form/edit-supplier/edit-supplier.component';
import { EditUserComponent } from './form/edit-user/edit-user.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AccessoriesComponent } from './modules/accessories/accessories.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { OrdersComponent } from './modules/orders/orders.component';
import { QuestionsComponent } from './modules/questions/questions.component';
import { SuppliersComponent } from './modules/suppliers/suppliers.component';
import { UsersComponent } from './modules/users/users.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      { path: 'users', component: UsersComponent },
      { path: 'suppliers', component: SuppliersComponent },
      { path: 'accessories', component: AccessoriesComponent },
      {
        path: 'orders',
        component: OrdersComponent,
      },
      { path: 'questions', component: QuestionsComponent },
      {
        path: 'orders/edit/:id',
        component: EditOrdersComponent,
      },
      {
        path: 'suppliers/edit/:id',
        component: EditSupplierComponent,
      },
      {
        path: 'suppliers/add',
        component: AddSupplierComponent,
      },
      {
        path: 'accessories/edit/:id',
        component: EditAccessoryComponent,
      },
      {
        path: 'accessories/add',
        component: AddAccessoryComponent,
      },
      {
        path: 'users/edit/:id',
        component: EditUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
