import { Component, ViewChild } from '@angular/core';
import { CustomerFormComponent, customerInterface } from '../customer-form/customer-form.component';
import { CustomerAddressComponent } from '../customer-form/customer-address/customer-address.component';


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
  customerDataCollection: customerInterface[] = [];
  selectedData!: customerInterface;
  customerNewData: customerInterface[] = [];
  selectedStatusData = 'All';
  sortingDirectionData!: boolean | any;
  nameSortingValue: string = 'empty';


  // customer Data store In array of Object
  addCustomer = (customerData: customerInterface) => {
    this.id = this.customerNewData.length + 1;
    let customeFormData = {
      id: this.id,
      name: customerData.name,
      email: customerData.email,
      address: customerData.address,
      status: customerData.status,
    };
    this.customerNewData.push(customeFormData);
    this.onStatusDataFilter();
  };


  // Selected Customer Data Set in Form 
  setEditCustomerData = (selected: customerInterface) => {
    this.customerForm.updateDataMode = true;
    this.customerForm.submitFormBtn.nativeElement.innerHTML = 'Update';
    this.customerForm.submitFormBtn.nativeElement.style.backgroundColor = 'var(--primary-platinum-color)';
    this.customerForm.formTitle = "Edit Customer";
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
    this.customerNewData.splice(selectedData.id - 1, 1, newCustomerData);
    this.customerDataCollection = this.customerNewData;
    this.onStatusDataFilter();
  };

  submitData = (customerData: customerInterface) => {
    this.customerForm.updateDataMode === true ? this.updateCustomerData(this.selectedData) : this.addCustomer(customerData);
    this.customerForm.updateDataMode = false;
  };

  resetCustomerForm = () => {
    this.customerForm.resetForm();
  };

  // Name Data Sorting

  // sorting Name 
  sortingDirection = (nameSort: boolean) => {
    this.nameSortingValue = 'notEmpty';
    this.sortingDirectionData = nameSort;
    this.sortNameData();
  };

  sortNameData = () => {
    this.sortingDirectionData == undefined ? '' : this.sortingDirectionData === true ? this.customerDataCollection.sort((current, next) => (current.name.toUpperCase() < next.name.toUpperCase() ? -1 : 1)) : this.customerDataCollection.sort((current, next) => (current.name.toUpperCase() < next.name.toUpperCase() ? 1 : -1));
  };


  // Status Data Filter 
  onStatusDataFilter = () => {
    let status = this.selectedStatusData;
    this.customerDataCollection = this.customerNewData;
    let filterData = this.customerDataCollection.filter((item) => {
      return status === 'All' ? this.customerDataCollection : item.status.toLowerCase() === status.toLowerCase();
    });
    this.customerDataCollection = filterData;

    this.sortNameData();
  };
};

