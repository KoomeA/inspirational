import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }

  @HostListener("click") upVotes() {
    this.highlight("highlight")
  }
  @HostListener("dblclick") onDoubleClicks() {
    this.highlight("highlight")
  }
  private highlight(highlight: string){
    this.elem.nativeElement.style.backgroundColor = 'yellow';//style will be fill with yellow as bg color on click trigger
  }

}
