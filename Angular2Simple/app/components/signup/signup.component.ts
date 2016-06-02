import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';

import {DataService} from '../../services/app.service.data';
import {UserService} from '../../services/app.service.users';

import {Registration} from '../../domain/app.domain.registration';
import {Result} from '../../domain/app.domain.result';
import {User} from '../../domain/app.domain.users';


@Component({
    selector: 'signup-cmp',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: './app/components/signup/signup.component.html',
    styleUrls: ['./app/components/signup/signup.component.css'],
    bindings: [UserService]
})

export class SignupComponent {

    private _newUser: Registration;

    constructor(public _router: Router, public userService: UserService) {
        this._newUser = new Registration('', '', '');
    }

    signup(event, username, password) {
        // event.preventDefault();

        var _registrationResult: Result = new Result(false, '');
        this.userService.register(this._newUser)
            .subscribe(res => {
                _registrationResult.Succeeded = res.Succeeded;
                _registrationResult.Message = res.Message;

            },
            error => console.error('Error: ' + error),
            () => {
                if (_registrationResult.Succeeded) {
                    // this.notificationService.printSuccessMessage('Dear ' + this._newUser.Username + ', please login with your credentials');
                    this._router.navigate(['login']);
                }
                else {
                    // this.notificationService.printErrorMessage(_registrationResult.Message);
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
    }

    login(event) {
        event.preventDefault();
        this._router.navigateByUrl('/login');
    }
}