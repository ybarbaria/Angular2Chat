import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {LoginComponent} from '../login/login.component';
import {TodoListComponent} from '../todolist/todolist.component';
import {SignupComponent} from '../signup/signup.component';
import {ChatComponent} from '../chat/chat.component';
import {ChannelComponent} from '../channel/channel.component';
import {GrillesComponent} from '../grilles/grilles.component';
import {ChartsComponent} from '../charts/charts.component';
import {LogoutComponent} from '../logout/logout.component';


import { UserService } from '../../services/app.service.users';

@Component({
    selector: 'main-cmp',
    templateUrl: './app/components/main/main.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, UserService]
})

@Routes([
    { path: '/signup', component: SignupComponent},
    { path: '/todolist', component: TodoListComponent },
    { path: '/login', component: LoginComponent },
    { path: '/chat', component: ChatComponent },
    { path: '/channel', component: ChannelComponent },
    { path: '/grilles', component: GrillesComponent },
    { path: '/charts', component: ChartsComponent },
    { path: '/logout', component: LogoutComponent }
])

export class MainComponent {
    title: string;
    isLogged: boolean;
    constructor(private userService : UserService) {
        this.title = 'My Chat';

        this.isLogged = userService.isUserAuthenticated()

    }
}