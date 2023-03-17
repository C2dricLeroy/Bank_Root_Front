import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setColor('#080808');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor('#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor('#080808');
  }
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setColor(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
