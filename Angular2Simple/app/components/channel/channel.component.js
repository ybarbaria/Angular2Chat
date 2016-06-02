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
var app_service_message_1 = require('../../services/app.service.message');
var app_domain_message_1 = require('../../domain/app.domain.message');
var app_service_users_1 = require('../../services/app.service.users');
var ChannelComponent = (function () {
    function ChannelComponent(messageService, userService) {
        this.messageService = messageService;
        this.userService = userService;
        this.username = userService.getLoggedInUser().Username;
        this.getMessages();
        this.message = new app_domain_message_1.Message("", true, "");
        this.message.Sender = this.username;
    }
    ChannelComponent.prototype.getMessages = function () {
        var _this = this;
        this.messageService.getList()
            .subscribe(function (res) {
            var data = res.json();
            _this.messages = data;
        }, function (error) {
            if (error.status == 401 || error.status == 302) {
            }
            console.error('Error: ' + error);
        }, function () { return console.log(_this.messages); });
    };
    ChannelComponent.prototype.send = function () {
        var _this = this;
        // Send message vers le serveur
        this.messageService.sendMessage(this.message)
            .subscribe(function (res) {
            _this.getMessages();
        }, function (error) { return console.error('Error: ' + error); }, function () {
        });
    };
    ChannelComponent = __decorate([
        core_1.Component({
            selector: 'channel-cmp',
            templateUrl: './app/components/channel/channel.component.html',
            styleUrls: ['./app/components/channel/channel.component.css'],
            providers: [app_service_message_1.MessageService, app_service_users_1.UserService]
        }), 
        __metadata('design:paramtypes', [app_service_message_1.MessageService, app_service_users_1.UserService])
    ], ChannelComponent);
    return ChannelComponent;
}());
exports.ChannelComponent = ChannelComponent;
//# sourceMappingURL=channel.component.js.map