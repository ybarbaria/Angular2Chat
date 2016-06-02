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
var app_domain_users_1 = require('../domain/app.domain.users');
var UserService = (function () {
    function UserService(accountService) {
        this.accountService = accountService;
        this._accountRegisterAPI = 'api/account/register';
        this._accountLoginAPI = 'api/account/login';
        this._accountLogoutAPI = 'api/account/logout';
    }
    /**
    *
    * @param newUser
    */
    UserService.prototype.register = function (newUser) {
        this.accountService.set(this._accountRegisterAPI);
        return this.accountService.post(JSON.stringify(newUser));
    };
    /**
    * Méthode d'authentification vers l'API
    * @param creds
    */
    UserService.prototype.login = function (creds) {
        this.accountService.set(this._accountLoginAPI);
        return this.accountService.post(JSON.stringify(creds));
    };
    /**
     *
     */
    UserService.prototype.logout = function () {
        this.accountService.set(this._accountLogoutAPI);
        return this.accountService.post(null, false);
    };
    /**
     *
     */
    UserService.prototype.isUserAuthenticated = function () {
        var _user = localStorage.getItem('user');
        if (_user != null)
            return true;
        else
            return false;
    };
    /**
     *
     */
    UserService.prototype.getLoggedInUser = function () {
        var _user;
        if (this.isUserAuthenticated()) {
            var _userData = JSON.parse(localStorage.getItem('user'));
            _user = new app_domain_users_1.User(_userData.Username, _userData.Password);
        }
        return _user;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [app_service_data_1.DataService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=app.service.users.js.map