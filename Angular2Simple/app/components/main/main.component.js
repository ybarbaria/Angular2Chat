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
var grilles_component_1 = require('../grilles/grilles.component');
var charts_component_1 = require('../charts/charts.component');
var logout_component_1 = require('../logout/logout.component');
var app_service_users_1 = require('../../services/app.service.users');
var MainComponent = (function () {
    function MainComponent(userService) {
        this.userService = userService;
        this.title = 'My Chat';
        this.isLogged = userService.isUserAuthenticated();
    }
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main-cmp',
            templateUrl: './app/components/main/main.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS, app_service_users_1.UserService]
        }),
        router_1.Routes([
            { path: '/signup', component: signup_component_1.SignupComponent },
            { path: '/todolist', component: todolist_component_1.TodoListComponent },
            { path: '/login', component: login_component_1.LoginComponent },
            { path: '/chat', component: chat_component_1.ChatComponent },
            { path: '/channel', component: channel_component_1.ChannelComponent },
            { path: '/grilles', component: grilles_component_1.GrillesComponent },
            { path: '/charts', component: charts_component_1.ChartsComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent }
        ]), 
        __metadata('design:paramtypes', [app_service_users_1.UserService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map