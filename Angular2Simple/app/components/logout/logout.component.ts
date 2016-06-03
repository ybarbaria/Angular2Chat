import {Component} from '@angular/core';
import {FormBuilder, Control, ControlGroup, Validators} from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';

import { User } from '../../domain/app.domain.users';
import {Result} from '../../domain/app.domain.result';
import { UserService } from '../../services/app.service.users';

@Component({
    selector: 'logout-cmp',
    templateUrl: './app/components/logout/logout.component.html',
    directives: [ROUTER_DIRECTIVES],
    bindings: [UserService]
})

export class LogoutComponent {

    private _user: User;

    /**
     * Constructeur du composant de login
     * @param {Router} public _router
     * @param {UserService} public userService
     */
    constructor(public _router: Router, public userService: UserService) {
        this.logout();
    }

    /**
     * Méthode de logout
     */
    logout(): void {
        this.userService.logout();
    };
}