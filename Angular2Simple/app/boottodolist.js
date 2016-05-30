"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//import {AppServiceTodoList} from './services/app.service.todolist';
var app_service_data_1 = require('./services/app.service.data');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var main_component_1 = require('./components/main/main.component');
//enableProdMode();
platform_browser_dynamic_1.bootstrap(main_component_1.MainComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, app_service_data_1.DataService
]);
//# sourceMappingURL=boottodolist.js.map