import {enableProdMode} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic'
import {AppServiceTodoList} from './services/app.service.todolist';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

import {MainComponent} from './components/main/main.component';

//enableProdMode();
bootstrap(MainComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, AppServiceTodoList
]); 