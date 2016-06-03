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
var app_service_users_1 = require('../../services/app.service.users');
var LogoutComponent = (function () {
    /**
     * Constructeur du composant de login
     * @param {Router} public _router
     * @param {UserService} public userService
     */
    function LogoutComponent(_router, userService) {
        this._router = _router;
        this.userService = userService;
        this.logout();
    }
    /**
     * Méthode de logout
     */
    LogoutComponent.prototype.logout = function () {
        this.userService.logout();
    };
    ;
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'logout-cmp',
            templateUrl: './app/components/logout/logout.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            bindings: [app_service_users_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_service_users_1.UserService])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map