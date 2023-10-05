import { Component, ViewChild } from '@angular/core';
import { CustomerFormComponent, customerInterface } from '../customer-form/customer-form.component';
import { CustomerAddressComponent } from '../customer-form/customer-address/customer-address.component';
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-customer-data-display',
  templateUrl: './customer-data-display.component.html',
  styleUrls: ['./customer-data-display.component.css'],

})
export class CustomerDataDisplayComponent {
  constructor() { }
  @ViewChild(CustomerFormComponent) customerForm!: CustomerFormComponent;
  @ViewChild(CustomerAddressComponent) customerAddress!: CustomerAddressComponent;

  id: number = 0;
  selectedStatus: String = '';
  customerDataCollection: customerInterface[] = [];
  selectedData!: customerInterface;
  customerNewData: customerInterface[] = [];
  statusData!: any;
  filterData: customerInterface[] = [];
  selectedStatusData = 'All';
  sortDirection: string = '';


  customerDataAdded = (customerData: customerInterface) => {
    this.id = this.customerNewData.length + 1;
    let customeFormData = {
      id: this.id,
      name: customerData.name,
      email: customerData.email,
      address: customerData.address,
      status: customerData.status,
    };
    this.customerNewData.push(customeFormData);
    this.customerDataCollection = this.customerNewData
    this.onStatusDataFilter();
  };


  // Selected Customer Data Set in Form 
  editCustomerData = (selected: any) => {
    this.customerForm.updateDataMode = true
    console.log(this.customerForm.updateDataMode)
    this.customerForm.submitFormBtn.nativeElement.innerHTML = 'Update';
    this.customerForm.submitFormBtn.nativeElement.style.backgroundColor = '#008CBA';
    this.customerForm.customerForm.setValue({
      name: selected.name,
      email: selected.email,
      status: selected.status,
    })
    this.customerForm.customerAddress.customerFormData.setValue({
      address: selected.address
    });
    this.selectedData = selected;
  };

  // Update data Btn Function 
  updateCustomerData = (selectedData: customerInterface | any) => {
    let newCustomerData = {
      id: selectedData.id,
      name: this.customerForm.userName,
      email: this.customerForm.emailAddress,
      address: this.customerForm.customerAddress.address,
      status: this.customerForm.status,
    };

    this.customerDataCollection.splice(selectedData.id - 1, 1, newCustomerData);
    this.customerForm.submitFormBtn.nativeElement.innerHTML = 'Submit';
    this.customerForm.submitFormBtn.nativeElement.style.backgroundColor = ' #198754'
  };

  submitData = (customerData: customerInterface) => {
    this.customerForm.updateDataMode === true ? this.updateCustomerData(this.selectedData) : this.customerDataAdded(customerData);
    this.customerForm.updateDataMode = false;
  };

  addCustomerForm = () => {
    this.customerForm.resetForm();
  }

  // Name Data Sorting 
  sortNameData(sort: Sort) {
    const data = this.customerDataCollection.slice();
    this.sortDirection = sort.direction;
    this.customerDataCollection = data.sort((current, next) => {
      const sortingDataTo = sort.direction === "asc";
      return sort.active === 'name' ? compare(current.name.toUpperCase(), next.name.toUpperCase(), sortingDataTo) : 0;
    });
  };

  // Status Data Filter 
  onStatusDataFilter = () => {
    let status = this.selectedStatusData;
    this.customerDataCollection = this.customerNewData;
    this.filterData = this.customerDataCollection.filter((item) => {
      return status === 'All' ? this.customerDataCollection : item.status.toLowerCase() === status.toLowerCase()
    });
    this.customerDataCollection = this.filterData;
  };
};

const compare = (current: number | string, next: number | string, sortingDataTo: boolean) => {
  return (current < next ? -1 : 1) * (sortingDataTo ? 1 : -1);
};

