import { Directive, HostListener, Input, ElementRef, ViewChild } from '@angular/core';
import { ChangeTextColorComponent } from '../change-text-color/change-text-color.component';

@Directive({
  selector: '[appChangeTextColor]'
})
export class ChangeTextColorDirective {

  textValue!: ElementRef | any;
  @ViewChild(ChangeTextColorComponent) changeTextColor!: ChangeTextColorComponent
  @Input() highlightColor: string = '';
  @Input() defaultColor: string = 'black;'

  constructor(element: ElementRef) {
    this.textValue = element.nativeElement.style
  }
  // MouseEnter on Text 
  @HostListener('mouseenter') onMouseEnter() {
    this.textValue.color = this.highlightColor;
  };
  // MouseLeave the Text 
  @HostListener('mouseleave') onMouseLeave() {
    this.textValue.color = this.defaultColor;
  };


}


