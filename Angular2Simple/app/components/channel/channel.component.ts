import {Component} from '@angular/core';
import {FormBuilder, Control, ControlGroup, Validators} from '@angular/common';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';

import {MessageService} from '../../services/app.service.message';
import {Message} from '../../domain/app.domain.message';

@Component({
    selector: 'channel-cmp',
    templateUrl: './app/components/channel/channel.component.html',
    styleUrls: ['./app/components/channel/channel.component.css'],
    bindings: [MessageService]
})

export class ChannelComponent {

    messages: Array<Message>;

    constructor(public messageService: MessageService) {
        let mess1 = new Message("ybar", true, "test1");
        let mess2 = new Message("ybar", true, "test1");
        let mess3 = new Message("ybar", true, "test1");

        this.getMessages();
   }

    getMessages(): void {
        this.messageService.getList()
            .subscribe(res => {

                var data: any = res.json();

                this.messages = data;
                //this._displayingTotal = this._photos.length;
                //this._page = data.Page;
                //this._pagesCount = data.TotalPages;
                //this._totalCount = data.TotalCount;
                //this._albumTitle = this._photos[0].AlbumTitle;
            },
            error => {

                if (error.status == 401 || error.status == 302) {
                    // this.utilityService.navigateToSignIn();
                }

                console.error('Error: ' + error)
            },
            () => console.log(this.messages));
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