import {FormBuilder, Control, ControlGroup, Validators} from '@angular/common';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import {Component, Inject, ElementRef, OnInit} from '@angular/core';
import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';

import {MessageService} from '../../services/app.service.message';
import {Message} from '../../domain/app.domain.message';

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



@Component({
    selector: 'grilles-cmp',
    templateUrl: './app/components/grilles/grilles.component.html',
    directives: [IgGrid],
    providers: [MessageService]
})

export class GrillesComponent implements OnInit{
    opts: any;
    _messages: Message[];
    cols: any[];

    constructor(private messageSrv : MessageService) {
        this.opts = {
            caption: "Angular2 InigniteUI Infragistics",
            primaryKey: "Id",
            dataSource: [
                { "Id": 1, "Name": "John Smith", "Age": 45 },
                { "Id": 2, "Name": "Mary Johnson", "Age": 32 },
                { "Id": 3, "Name": "Bob Ferguson", "Age": 27 }
            ],
            columns: [
                { headerText: "Id", key: "Id", dataType: "number", hidden: true },
                { headerText: "Name", key: "Name", dataType: "string" },
                { headerText: "Age", key: "Age", dataType: "number" }
            ]
        };
    }

    ngOnInit() {
        let self = this;

        this.messageSrv.getList()
            .subscribe(res => {
                self._messages = res.json();

                this.cols = [
                    { field: 'Text', header: 'Text' },
                    { field: 'Recipient', header: 'Recipient' },
                    { field: 'Sender', header: 'Sender' },
                    { field: 'Channel', header: 'Channel' }
                ];
            },
            error => {
                if (error.status == 401 || error.status == 302) {

                }
                console.error('Error: ' + error)
            },
            () => console.log(this.messages));

        
    }

}