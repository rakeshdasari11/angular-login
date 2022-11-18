import { Directive,ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective implements AfterViewInit{

  @Input() tcolor: string;  
  @Input() tsize: string;   
    constructor(private elRef: ElementRef) {  
    }  
    ngAfterViewInit(): void {  
      // this.tcolor = this.tcolor || 'white';  
       this.elRef.nativeElement.style.color = this.tcolor;  
       this.elRef.nativeElement.style.fontSize = this.tsize;  
    }     
}   
