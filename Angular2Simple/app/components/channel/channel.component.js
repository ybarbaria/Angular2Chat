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
var ChannelComponent = (function () {
    function ChannelComponent(messageService) {
        this.messageService = messageService;
        var mess1 = new app_domain_message_1.Message("ybar", true, "test1");
        var mess2 = new app_domain_message_1.Message("ybar", true, "test1");
        var mess3 = new app_domain_message_1.Message("ybar", true, "test1");
        this.getMessages();
    }
    ChannelComponent.prototype.getMessages = function () {
        var _this = this;
        this.messageService.getList()
            .subscribe(function (res) {
            var data = res.json();
            _this.messages = data;
            //this._displayingTotal = this._photos.length;
            //this._page = data.Page;
            //this._pagesCount = data.TotalPages;
            //this._totalCount = data.TotalCount;
            //this._albumTitle = this._photos[0].AlbumTitle;
        }, function (error) {
            if (error.status == 401 || error.status == 302) {
            }
            console.error('Error: ' + error);
        }, function () { return console.log(_this.messages); });
    };
    ChannelComponent.prototype.send = function () {
        // Send message vers le serveur
        //this.http.post('http://localhost:3001/users', user, { headers:  })
        //    .subscribe(
        //    response => {
        //        localStorage.setItem('jwt', response.json().id_token);
        //        this.router.parent.navigateByUrl('/home');
        //    },
        //    error => {
        //        alert(error.text());
        //        console.log(error.text());
        //    }
        //    );
    };
    ChannelComponent = __decorate([
        core_1.Component({
            selector: 'channel-cmp',
            templateUrl: './app/components/channel/channel.component.html',
            styleUrls: ['./app/components/channel/channel.component.css'],
            bindings: [app_service_message_1.MessageService]
        }), 
        __metadata('design:paramtypes', [app_service_message_1.MessageService])
    ], ChannelComponent);
    return ChannelComponent;
}());
exports.ChannelComponent = ChannelComponent;
//# sourceMappingURL=channel.component.js.map