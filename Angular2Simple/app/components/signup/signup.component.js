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
var common_1 = require('@angular/common');
var app_service_users_1 = require('../../services/app.service.users');
var app_domain_registration_1 = require('../../domain/app.domain.registration');
var app_domain_result_1 = require('../../domain/app.domain.result');
var SignupComponent = (function () {
    function SignupComponent(_router, userService) {
        this._router = _router;
        this.userService = userService;
        this._newUser = new app_domain_registration_1.Registration('', '', '');
    }
    SignupComponent.prototype.signup = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        var _registrationResult = new app_domain_result_1.Result(false, '');
        this.userService.register(this._newUser)
            .subscribe(function (res) {
            _registrationResult.Succeeded = res.Succeeded;
            _registrationResult.Message = res.Message;
        }, function (error) { return console.error('Error: ' + error); }, function () {
            if (_registrationResult.Succeeded) {
                // this.notificationService.printSuccessMessage('Dear ' + this._newUser.Username + ', please login with your credentials');
                _this._router.navigate(['login']);
            }
            else {
            }
        });
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
    SignupComponent.prototype.login = function (event) {
        event.preventDefault();
        this._router.navigateByUrl('/login');
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'signup-cmp',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            templateUrl: './app/components/signup/signup.component.html',
            styleUrls: ['./app/components/signup/signup.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_service_users_1.UserService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map