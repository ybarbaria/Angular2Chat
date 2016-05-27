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
var http_1 = require('@angular/http');
var Signup = (function () {
    function Signup(_router, http) {
        this._router = _router;
        this.http = http;
    }
    Signup.prototype.signup = function (event, username, password) {
        event.preventDefault();
        var user = JSON.stringify({ username: username, password: password });
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
    Signup.prototype.login = function (event) {
        event.preventDefault();
        this._router.navigateByUrl('/login');
    };
    Signup = __decorate([
        core_1.Component({
            selector: 'signup-cmp',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            templateUrl: './app/components/signup/signup.component.html',
            styleUrls: ['./app/components/signup/signup.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], Signup);
    return Signup;
}());
exports.Signup = Signup;
//# sourceMappingURL=signup.composant.js.map