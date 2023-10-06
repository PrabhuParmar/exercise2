import { Component, AfterContentChecked, Input } from '@angular/core';

@Component({
  selector: 'app-change-text-color',
  templateUrl: './change-text-color.component.html',
  styleUrls: ['./change-text-color.component.css']
})
export class ChangeTextColorComponent {
  colorValue: string = '';
  onColorValue = (color: any) => {
    this.colorValue = color.target.value
  }
}
