import {Component} from '@angular/core';
import {FormBuilder, Control, ControlGroup, Validators} from '@angular/common';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'channel-cmp',
    templateUrl: './app/components/channel/channel.component.html',
    styleUrls: ['./app/components/channel/channel.component.css']
})

export class ChannelComponent {

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
}