import { Directive, TemplateRef, Input, ViewContainerRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCustomData]'
})
export class CustomDataDirective implements OnChanges {

  @Input() appCustomData: any
  constructor(private vcr: ViewContainerRef, private tempRef: TemplateRef<any>) {
  };
  ngOnChanges(changes: SimpleChanges): void {
    this.appCustomData ? this.vcr.clear() : this.vcr.createEmbeddedView(this.tempRef);
  };

};
