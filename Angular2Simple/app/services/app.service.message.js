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
var core_1 = require('@angular/core');
var app_service_data_1 = require('./app.service.data');
var MessageService = (function () {
    function MessageService(messageService) {
        this.messageService = messageService;
        this._getMessagesAPI = 'api/message/getlist';
        this._setMessageAPI = 'api/message/send';
    }
    /**
    *
    *
    */
    MessageService.prototype.getList = function () {
        this.messageService.set(this._getMessagesAPI);
        return this.messageService.get();
    };
    MessageService.prototype.sendMessage = function (mess) {
        this.messageService.set(this._setMessageAPI);
        return this.messageService.post(JSON.stringify(mess));
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [app_service_data_1.DataService])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=app.service.message.js.map