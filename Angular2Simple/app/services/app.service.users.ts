import { Http, Response, Request } from '@angular/http';
import { Injectable } from '@angular/core';
import {HttpHelpers} from '../utils/HttpHelpers';
import {DataService} from './app.service.data';
import { Registration } from '../domain/app.domain.registration';
import { User } from '../domain/app.domain.users';

@Injectable()
export class UserService {

    private _accountRegisterAPI: string = 'api/account/register';
    private _accountLoginAPI: string = 'api/account/login';
    private _accountLogoutAPI: string = 'api/account/logout';

    constructor(public accountService: DataService) { }

    /**
    * 
    * @param newUser
    */
    register(newUser: Registration) {

        this.accountService.set(this._accountRegisterAPI);

        return this.accountService.post(JSON.stringify(newUser));
    }

    /**
    * Méthode d'authentification vers l'API
    * @param creds
    */
    login(creds: User) {
        this.accountService.set(this._accountLoginAPI);
        return this.accountService.post(JSON.stringify(creds));
    }

    /**
     * 
     */
    logout() : void{
        // this.accountService.set(this._accountLogoutAPI);
        localStorage.removeItem('user');

        // return this.accountService.post(null, false);
    }

    /**
     * 
     */
    isUserAuthenticated(): boolean {
        var _user: User = localStorage.getItem('user');
        if (_user != null)
            return true;
        else
            return false;
    }

    /**
     * 
     */
    getLoggedInUser(): User {
        var _user: User;

        if (this.isUserAuthenticated()) {
            var _userData = JSON.parse(localStorage.getItem('user'));
            _user = new User(_userData.Username, _userData.Password);
        }

        return _user;
    }
}