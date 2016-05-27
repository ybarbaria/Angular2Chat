import {Component} from '@angular/core';
import {FormBuilder, Control, ControlGroup, Validators} from '@angular/common';
import {AppServiceTodoList} from '../../services/app.service.todolist';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'login-cmp',
    templateUrl: './app/components/login/login.component.html',
    styleUrls: ['./app/components/login/login.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {

    userForm: ControlGroup;
    username: Control;
    password: Control;
    passwordStrength: number = 0;

    constructor(fb: FormBuilder, public _router: Router){
        this.username = fb.control('', Validators.required);
        this.password = fb.control('', Validators.required);
        this.userForm = fb.group({
            username: this.username,
            password: this.password
        });

        this.password.valueChanges.subscribe((newValue) => {
            this.passwordStrength = newValue.length;
        });
    }

    login(event, username, password) {
        event.preventDefault();
        let body = JSON.stringify({ username, password });
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
    }

    signup(event) {
        event.preventDefault();
        this._router.navigateByUrl('/signup');
    }
}