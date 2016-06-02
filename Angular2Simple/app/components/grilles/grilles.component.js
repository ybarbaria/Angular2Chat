"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var app_service_message_1 = require('../../services/app.service.message');
var IgGrid = (function () {
    function IgGrid(elementRef) {
        this.name = 'igGrid';
        this.elementRef = elementRef;
    }
    Object.defineProperty(IgGrid.prototype, "config", {
        set: function (v) {
            this._config = v;
        },
        enumerable: true,
        configurable: true
    });
    IgGrid.prototype.ngOnInit = function () {
        jQuery(this.elementRef.nativeElement).children(':first')[this.name](this._config);
    };
    IgGrid = __decorate([
        core_1.Component({
            selector: 'ig-grid',
            template: '<table></table>',
            inputs: ['config:ig-options']
        }),
        __param(0, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], IgGrid);
    return IgGrid;
}());
exports.IgGrid = IgGrid;
var GrillesComponent = (function () {
    function GrillesComponent(messageSrv) {
        this.messageSrv = messageSrv;
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
    GrillesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.messageSrv.getList()
            .subscribe(function (res) {
            self._messages = res.json();
            _this.cols = [
                { field: 'Text', header: 'Text' },
                { field: 'Recipient', header: 'Recipient' },
                { field: 'Sender', header: 'Sender' },
                { field: 'Channel', header: 'Channel' }
            ];
        }, function (error) {
            if (error.status == 401 || error.status == 302) {
            }
            console.error('Error: ' + error);
        }, function () { return console.log(_this.messages); });
    };
    GrillesComponent = __decorate([
        core_1.Component({
            selector: 'grilles-cmp',
            templateUrl: './app/components/grilles/grilles.component.html',
            directives: [IgGrid],
            providers: [app_service_message_1.MessageService]
        }), 
        __metadata('design:paramtypes', [app_service_message_1.MessageService])
    ], GrillesComponent);
    return GrillesComponent;
}());
exports.GrillesComponent = GrillesComponent;
//# sourceMappingURL=grilles.component.js.map