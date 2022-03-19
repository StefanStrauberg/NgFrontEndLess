import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";


@Directive({
    selector: '[appStyle]'
})

export class StyleDirective {
    @Input('appStyle') color: string = 'black';
    @Input('fontWeight') fontWeight: string = 'normal';
    @Input() dStyles!: {border?: string, fontWeight?: string, borderRadius?: string}

    constructor(private el: ElementRef, private r: Renderer2) {
        //this.r.setStyle(this.el.nativeElement, 'color', 'blue');
        // el.nativeElement.style.color = 'RoyalBlue';
    }

    @HostListener('click', ['$event.target']) onClick(event: Event){
        console.log(event);
    }

    @HostListener('mouseenter') onEnter(){
        this.r.setStyle(this.el.nativeElement, 'color', this.color);
        this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
        this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
        this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
    }

    @HostListener('mouseleave') onLeave(){
        this.r.setStyle(this.el.nativeElement, 'color', null);
        this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
        this.r.setStyle(this.el.nativeElement, 'border', null);
        this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
    }
}