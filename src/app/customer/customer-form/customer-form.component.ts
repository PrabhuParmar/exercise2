import {
  Component, ViewChild, Output, EventEmitter, ElementRef,
} from '@angular/core';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  @ViewChild(CustomerAddressComponent) customerAddress!: CustomerAddressComponent
  @Output() customerDataCreated = new EventEmitter<customerInterface>()
  @ViewChild('submitBtn') submitFormBtn!: ElementRef;

  userName: string | any = '';
  emailAddress: string | any = '';
  status: string | any;
  address: string = '';
  addressStatus: string | undefined = 'INVALID';
  updateDataMode: any = false;
  formTitle: string = 'Add Customer';

  // error set 
  userNameError!: string;
  emailaddressError!: string;


  // New Way To Show Validation 
  customerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,80}$')]),
    status: new FormControl('Active', [Validators.required]),
  });

  get setNameValidation() {
    return this.customerForm.get('name');
  };

  get setEmailValidation() {
    return this.customerForm.get('email');
  };

  // cllick form Form Resret 
  resetForm = () => {
    this.customerForm.reset();
    this.customerAddress.customerFormData.reset();
    this.address = '';
    this.updateDataMode = false;
    this.submitFormBtn.nativeElement.innerHTML = 'Submit';
    this.submitFormBtn.nativeElement.style.backgroundColor = 'var(--primary-platinum-color)';
    this.formTitle = 'Add Customer';
  };

  // Address Data Add in Form 
  addressDataAdded = (addressData: string) => {
    this.address = addressData;
    this.addressStatus = this.customerAddress.addressValidation?.status;
  };

  // Submit Form Data 
  submitCustomerData = () => {
    this.userName = this.customerForm.value.name;
    this.emailAddress = this.customerForm.value.email;
    this.address = this.address;
    this.status = this.customerForm.value.status

    this.customerDataCreated.emit({
      name: this.userName,
      email: this.emailAddress,
      address: this.address,
      status: this.status
    });
    this.resetForm();
  };
};

// Customer Data InterFace 
export interface customerInterface {
  id?: number;
  name: string;
  email: string;
  status: string;
  address: string;
};
