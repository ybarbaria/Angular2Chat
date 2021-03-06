"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.set = function (baseUri, pageSize) {
        this._baseUri = baseUri;
        this._pageSize = pageSize;
    };
    //get(page: number) {
    //    var uri = this._baseUri + page.toString() + '/' + this._pageSize.toString();
    //    return this.http.get(uri)
    //        .map(response => (<Response>response));
    //}
    DataService.prototype.get = function () {
        return this.http.get(this._baseUri).map(function (response) { return (response); });
    };
    DataService.prototype.post = function (data, mapJson) {
        if (mapJson === void 0) { mapJson = true; }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (mapJson)
            return this.http.post(this._baseUri, data, options)
                .map(function (response) { return response.json(); });
        else
            return this.http.post(this._baseUri, data);
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this._baseUri + '/' + id.toString())
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.deleteResource = function (resource) {
        return this.http.delete(resource)
            .map(function (response) { return response.json(); });
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=app.service.data.js.map