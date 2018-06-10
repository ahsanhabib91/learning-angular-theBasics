import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
      if (!condition) {
        this.vcRef.createEmbeddedView(this.templateRef);
      } else {
          this.vcRef.clear();
      }
  }
  // template is the what and ViewContainer is where. Angular marks the place of directives in the document through ViewContainerRef
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
