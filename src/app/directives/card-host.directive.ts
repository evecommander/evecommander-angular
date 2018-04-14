import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCardHost]'
})
export class CardHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
