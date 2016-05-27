import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';

@Component({
    selector: 'signup-cmp',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: './app/components/signup/signup.component.html',
    styleUrls: ['./app/components/signup/signup.component.css']
})

export class SignupComponent {

    constructor(public _router: Router, public http: Http) {
    }

    signup(event, username, password) {
        event.preventDefault();
        let user = JSON.stringify({ username, password });
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