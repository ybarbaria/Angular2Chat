import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {LoginComponent} from '../login/login.component';
import {TodoListComponent} from '../todolist/todolist.component';
import {SignupComponent} from '../signup/signup.component';
import {ChatComponent} from '../chat/chat.component';
import {ChannelComponent} from '../channel/channel.component';

@Component({
    selector: 'main-cmp',
    templateUrl: './app/components/main/main.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@Routes([
    { path: '/signup', component: SignupComponent },
    { path: '/todolist', component: TodoListComponent },
    { path: '/login', component: LoginComponent },
    { path: '/chat', component: ChatComponent },
    { path: '/channel', component: ChannelComponent }
])

export class MainComponent {
    title: string;
    constructor() {
        this.title = 'My Chat';
    }
}