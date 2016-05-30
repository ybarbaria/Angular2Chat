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
var app_domain_users_1 = require('../../domain/app.domain.users');
var app_domain_result_1 = require('../../domain/app.domain.result');
var app_service_users_1 = require('../../services/app.service.users');
var LoginComponent = (function () {
    /**
     * Constructeur du composant de login
     * @param {Router} public _router
     * @param {UserService} public userService
     */
    function LoginComponent(_router, userService) {
        this._router = _router;
        this.userService = userService;
        this._user = new app_domain_users_1.User('', '');
    }
    /**
     * Méthode de login appelé au clic sur le bouton
     * Consomme le service user pour la connexion à l'API
     */
    LoginComponent.prototype.login = function () {
        var _this = this;
        var _authenticationResult = new app_domain_result_1.Result(false, '');
        this.userService.login(this._user)
            .subscribe(function (res) {
            _authenticationResult.Succeeded = res.Succeeded;
            _authenticationResult.Message = res.Message;
        }, function (error) { return console.error('Error: ' + error); }, function () {
            if (_authenticationResult.Succeeded) {
                localStorage.setItem('user', JSON.stringify(_this._user));
                _this._router.navigate(['chat']);
            }
            else {
            }
        });
    };
    ;
    LoginComponent.prototype.signup = function (event) {
        event.preventDefault();
        this._router.navigateByUrl('/signup');
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-cmp',
            templateUrl: './app/components/login/login.component.html',
            styleUrls: ['./app/components/login/login.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            bindings: [app_service_users_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_service_users_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map