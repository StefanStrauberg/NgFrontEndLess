import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";


@Directive({
    selector: '[appStyle]'
})

export class StyleDirective {
    @Input('appStyle') color: any = 'black';
    @Input('fontWeight') fontWeight: string = 'normal';
    @Input() dStyles!: {border?: string, fontWeight?: string, borderRadius?: string};
    @HostBinding('style.color') elColor = null;

    constructor(private el: ElementRef, private r: Renderer2) {
        //this.r.setStyle(this.el.nativeElement, 'color', 'blue');
        // el.nativeElement.style.color = 'RoyalBlue';
    }

    @HostListener('click', ['$event.target']) onClick(event: Event){
        console.log(event);
    }

    @HostListener('mouseenter') onEnter(){
        this.elColor = this.color;
        //this.r.setStyle(this.el.nativeElement, 'color', this.color);
        if(this.fontWeight != null, this.dStyles != null){
            this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
            this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
            this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
        }
    }

    @HostListener('mouseleave') onLeave(){
        this.elColor = null;
        //this.r.setStyle(this.el.nativeElement, 'color', null);
        if(this.fontWeight != null, this.dStyles != null){
            this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
            this.r.setStyle(this.el.nativeElement, 'border', null);
            this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
        }
    }
}