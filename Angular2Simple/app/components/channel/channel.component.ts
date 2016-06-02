import {Component} from '@angular/core';
import {FormBuilder, Control, ControlGroup, Validators} from '@angular/common';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';

import {MessageService} from '../../services/app.service.message';
import {Message} from '../../domain/app.domain.message';
import {UserService} from '../../services/app.service.users';

@Component({
    selector: 'channel-cmp',
    templateUrl: './app/components/channel/channel.component.html',
    styleUrls: ['./app/components/channel/channel.component.css'],
    providers: [MessageService, UserService]
})

export class ChannelComponent {

    messages: Array<Message>;
    username: string;
    message: Message;

    constructor(public messageService: MessageService, private userService: UserService) {
        this.username = userService.getLoggedInUser().Username;
        this.getMessages();
        this.message = new Message("", true, "");
        this.message.Sender = this.username;
    }

    getMessages(): void {
        this.messageService.getList()
            .subscribe(res => {
                var data: any = res.json();
                this.messages = data;
            },
            error => {
                if (error.status == 401 || error.status == 302) {

                }
                console.error('Error: ' + error)
            },
            () => console.log(this.messages));
    }

    send(): void {
        // Send message vers le serveur
        this.messageService.sendMessage(this.message)
            .subscribe(res => {
                this.getMessages();
            },
            error => console.error('Error: ' + error),
            () => {
               
            });
    }
}