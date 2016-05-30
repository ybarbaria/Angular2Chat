import {Component} from '@angular/core';
import {FormBuilder, Control, ControlGroup, Validators} from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'chat-cmp',
    templateUrl: './app/components/chat/chat.component.html',
    styleUrls: ['./app/components/chat/chat.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class ChatComponent {

    constructor(public http: Http) {
    }

    send() {
        // Send message vers le serveur
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
}