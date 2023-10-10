import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent {
  address: string | any = '';

  @ViewChild('customeAddress') customeAddress!: ElementRef;

  @Output() addressData = new EventEmitter<string>();

  // customer Data Set in Form 
  customerAddressData = () => {
    this.address = this.customerFormData.value.address;
    this.addressData.emit(this.address);
  }

  // Customer Address Data 
  customerFormData = new FormGroup({
    address: new FormControl('', [Validators.required])
  })

  get addressValidation() {
    return this.customerFormData.get('address')
  }


}
