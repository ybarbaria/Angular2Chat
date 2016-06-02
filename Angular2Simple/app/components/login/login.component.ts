import {Component} from '@angular/core';
import {FormBuilder, Control, ControlGroup, Validators} from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
//import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";

import { User } from '../../domain/app.domain.users';
import {Result} from '../../domain/app.domain.result';
import { UserService } from '../../services/app.service.users';

@Component({
    selector: 'login-cmp',
    templateUrl: './app/components/login/login.component.html',
    styleUrls: ['./app/components/login/login.component.css'],
    directives: [ROUTER_DIRECTIVES],
    bindings: [UserService]
})

export class LoginComponent {
   
    private _user: User;

    /**
     * Constructeur du composant de login
     * @param {Router} public _router
     * @param {UserService} public userService
     */
    constructor(public _router: Router, public userService: UserService) {
        this._user = new User('', '');
    }

    /**
     * Méthode de login appelé au clic sur le bouton
     * Consomme le service user pour la connexion à l'API
     */
    login(): void {
        var _authenticationResult: Result = new Result(false, '');

        this.userService.login(this._user)
            .subscribe(res => {
                _authenticationResult.Succeeded = res.Succeeded;
                _authenticationResult.Message = res.Message;
            },
            error => console.error('Error: ' + error),
            () => {
                if (_authenticationResult.Succeeded) {
                    localStorage.setItem('user', JSON.stringify(this._user));

                    this._router.navigate(['/chat']);
                    // Succes
                }
                else {
                    // error
                }
            });
    };

    signup(event) {
        event.preventDefault();
        this._router.navigateByUrl('/signup');
    }
}