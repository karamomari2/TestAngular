import { Directive, ElementRef, HostListener, Input, input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighliteielement]'
})
export class Highliteielement implements OnChanges{
  @Input() externalcolor: string = 'black';
  @Input('appHighliteielement') defaultColor: string = 'red';

  constructor(private ele: ElementRef) {

  }

  // ngOnInit() {
  //   this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  // }

  ngOnChanges() {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
    
  }

  @HostListener('mouseover') onMouseOver() {
    this.ele.nativeElement.style.backgroundColor = this.externalcolor;
  }

  @HostListener('mouseout') onMouseOut() {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }
}
