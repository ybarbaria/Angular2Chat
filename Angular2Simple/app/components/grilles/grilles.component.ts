﻿import {FormBuilder, Control, ControlGroup, Validators} from '@angular/common';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import {Component, Inject, ElementRef, OnInit} from '@angular/core';
import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from "ag-grid/main";

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
    directives: [IgGrid, AgGridNg2],
    providers: [MessageService]
})

export class GrillesComponent implements OnInit{
    private opts: any;
    private _messages: Message[];
    private cols: any[];

    columnDefs = [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        {
            headerName: "Price",
            field: "price",
            cellClass: 'rightJustify',
            cellRenderer: function (params: any) {
                return '$' + params.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    ];
    // put data directly onto the controller
    rowData = [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ];
    GridOptions: GridOptions = {
        columnDefs: this.columnDefs,
        rowData: this.rowData
    }

    constructor(private messageSrv : MessageService) {
        this.fisrtIgniteUi();
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
            () => console.log(self._messages));   
    }


    fisrtIgniteUi(): void{
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

    
}