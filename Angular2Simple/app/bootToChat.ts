import {enableProdMode} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic'
import {AppServiceTodoList} from './services/app.service.todolist';
import {DataService} from './services/app.service.data'
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

import {MainComponent} from './components/main/main.component';

//enableProdMode();

//ag.grid.initialiseAgGridWithAngular2({ core: core });

var appPromise = bootstrap(MainComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, DataService, AppServiceTodoList]); 

// register LocalStorage, permet de détécter les changement
//LocalStorageSubscriber(appPromise);