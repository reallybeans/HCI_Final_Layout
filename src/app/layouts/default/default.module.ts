import { MaterialModule } from './../../shared/material/material.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashbroadService } from 'src/app/modules/dashbroad.service';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { SuppliersComponent } from 'src/app/modules/suppliers/suppliers.component';
import { AccessoriesComponent } from 'src/app/modules/accessories/accessories.component';
import { OrdersComponent } from 'src/app/modules/orders/orders.component';
import { QuestionsComponent } from 'src/app/modules/questions/questions.component';
import { EditOrdersComponent } from 'src/app/form/edit-orders/edit-orders.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSupplierComponent } from 'src/app/form/add-supplier/add-supplier.component';
import { EditSupplierComponent } from 'src/app/form/edit-supplier/edit-supplier.component';
import { EditAccessoryComponent } from 'src/app/form/edit-accessory/edit-accessory.component';
import { AddAccessoryComponent } from 'src/app/form/add-accessory/add-accessory.component';
import { EditUserComponent } from 'src/app/form/edit-user/edit-user.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    UsersComponent,
    SuppliersComponent,
    AccessoriesComponent,
    OrdersComponent,
    QuestionsComponent,
    EditOrdersComponent,
    AddSupplierComponent,
    EditSupplierComponent,
    AddAccessoryComponent,
    EditAccessoryComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [DashbroadService],
})
export class DefaultModule {}
