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
var router_1 = require('@angular/router');
var login_component_1 = require('../login/login.component');
var todolist_component_1 = require('../todolist/todolist.component');
var signup_component_1 = require('../signup/signup.component');
var chat_component_1 = require('../chat/chat.component');
var channel_component_1 = require('../channel/channel.component');
var MainComponent = (function () {
    function MainComponent() {
        this.title = 'My Chat';
    }
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main-cmp',
            templateUrl: './app/components/main/main.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/signup', component: signup_component_1.SignupComponent },
            { path: '/todolist', component: todolist_component_1.TodoListComponent },
            { path: '/login', component: login_component_1.LoginComponent },
            { path: '/chat', component: chat_component_1.ChatComponent },
            { path: '/channel', component: channel_component_1.ChannelComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map