import {Component, Inject, ElementRef} from '@angular/core';

declare var jQuery: any;

@Component({
    selector: 'ig-grid',
    template: '<table></table>',
    inputs: ['config:ig-options']
})
export class IgGrid {
    elementRef: ElementRef;
    private _config: any;
    public name: string = 'igGrid';

    set config(v: any) {
        this._config = v;
    }

    constructor( @Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    ngOnInit() {
        jQuery(this.elementRef.nativeElement).children(':first')[this.name](this._config);
    }
}