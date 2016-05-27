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
var common_1 = require('@angular/common');
var app_service_todolist_1 = require('../../services/app.service.todolist');
var RegisterComponent = (function () {
    function RegisterComponent(fb, _serviceTodoList) {
        var _this = this;
        this._serviceTodoList = _serviceTodoList;
        this.passwordStrength = 0;
        this.username = fb.control('', common_1.Validators.required);
        this.password = fb.control('', common_1.Validators.required);
        this.userForm = fb.group({
            username: this.username,
            password: this.password
        });
        this.password.valueChanges.subscribe(function (newValue) {
            _this.passwordStrength = newValue.length;
        });
    }
    RegisterComponent.prototype.login = function (event, username, password) {
        event.preventDefault();
        var body = JSON.stringify({ username: username, password: password });
        //this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
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
    RegisterComponent.prototype.signup = function (event) {
        event.preventDefault();
        //this.router.parent.navigateByUrl('/signup');
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register-cmp',
            templateUrl: './app/components/register/register.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, app_service_todolist_1.AppServiceTodoList])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map