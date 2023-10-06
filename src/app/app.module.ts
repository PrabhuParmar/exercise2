import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from './customer/customer.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { CustomerAddressComponent } from './customer/customer-form/customer-address/customer-address.component';
import { CustomerDataDisplayComponent } from './customer/customer-data-display/customer-data-display.component';
import { FormControl, FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDataDirective } from './directive/custom-data.directive';
import { CustomeDataComponent } from './custome-data/custome-data.component';
import { ChangeTextColorComponent } from './change-text-color/change-text-color.component';
import { ChangeTextColorDirective } from './directive/change-text-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerFormComponent,
    CustomerAddressComponent,
    CustomerDataDisplayComponent,
    CustomDataDirective,
    CustomeDataComponent,
    ChangeTextColorComponent,
    ChangeTextColorDirective,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgbTooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
