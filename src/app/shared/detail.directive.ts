import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDetail]',
  standalone: true
})
export class DetailDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.textAlign='center';
  }

}
