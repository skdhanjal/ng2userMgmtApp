import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AuthenticationService {
    private _url = "http://localhost:2403/users/";
    private isLoggedIn: boolean = false;
    private _uid;
    private user = {};

    constructor(private _http: Http) { }

    authenticate(username, password) {
        return this._http.post(this._url+'login', {username, password})
            .map(res => {
                let uid = res.json().uid;
                this.isLoggedIn = true;
                this.getCurrentUser(uid).subscribe(user => {
                    this.user = user;
                });
                return res.json();
            });
    }

    logout() {
        return this._http.post(this._url+'logout',{})
            .map(res => {
                this.isLoggedIn = false;
                this.user = {};
                return res.json();
            });
    }

    getCurrentUser(uid) {
        return this._http.get(this._url + uid)
            .map(res => {
               return res.json();
            });
    }

    isAuthenticated() {
        return this.isLoggedIn;
    }

    getAuthenticatedUserName() {
        return this.user['name'];
    }


}