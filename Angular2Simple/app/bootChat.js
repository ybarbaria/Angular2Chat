"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_service_todolist_1 = require('./services/app.service.todolist');
var app_service_data_1 = require('./services/app.service.data');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var LocalStorageEmitter_1 = require('angular2-localstorage/LocalStorageEmitter');
var main_component_1 = require('./components/main/main.component');
//enableProdMode();
var appPromise = platform_browser_dynamic_1.bootstrap(main_component_1.MainComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, app_service_data_1.DataService, app_service_todolist_1.AppServiceTodoList, LocalStorageEmitter_1.LocalStorageService]);
// register LocalStorage, permet de détécter les changement
LocalStorageEmitter_1.LocalStorageSubscriber(appPromise);
//# sourceMappingURL=bootChat.js.map