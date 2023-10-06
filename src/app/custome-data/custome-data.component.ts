import { AfterContentChecked, Component } from '@angular/core';

@Component({
  selector: 'app-custome-data',
  templateUrl: './custome-data.component.html',
  styleUrls: ['./custome-data.component.css']
})
export class CustomeDataComponent implements AfterContentChecked {
  checkBoxData: boolean = false;


  ngAfterContentChecked(): void {

  }
}
