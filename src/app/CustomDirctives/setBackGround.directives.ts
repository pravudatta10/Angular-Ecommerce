import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setbackground]'
})

export class Setbackground {
    private element: ElementRef;
    private renderer: Renderer2;

    constructor(ele: ElementRef, renderer: Renderer2) {
        this.element = ele;
        this.renderer=renderer;
    }
  
    ngOnInit() {
       // this.element.nativeElement.style.backgroundColor = 'yellow';
  //using Renderer2
  this.renderer.setStyle(this.element.nativeElement,'backgroundColor','yellow')
    }
}