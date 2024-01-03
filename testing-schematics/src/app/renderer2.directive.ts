import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myRenderer2]'
})
export class MyRenderer2Directive {
  constructor(private el: ElementRef, private renderer: Renderer2) { }
}
