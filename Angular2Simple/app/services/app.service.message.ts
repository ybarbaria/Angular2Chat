﻿import { Http, Response, Request } from '@angular/http';
import { Injectable } from '@angular/core';
import {HttpHelpers} from '../utils/HttpHelpers';
import {DataService} from './app.service.data';
import { Message } from '../domain/app.domain.message';


@Injectable()
export class MessageService {

    private _getMessagesAPI: string = 'api/message/getlist';

    constructor(public messageService: DataService) { }

    /**
    * 
    * 
    */
    getList() {

        this.messageService.set(this._getMessagesAPI);
        return this.messageService.get();
    }
}