import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

 @HostListener('mouseenter') OnMouseEnter(){
    this.renderer.addClass(this.element.nativeElement,'zoomIn');
  }
  @HostListener('mouseout') OnMouseOut(){
    this.renderer.removeClass(this.element.nativeElement,'zoomIn');
  }

 // @HostBinding('style.backgroundColor') backgroundColor:string='pink';

}
