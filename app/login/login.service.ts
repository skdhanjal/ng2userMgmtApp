import {Injectable} from '@angular/core';
import {User} from './model.user';
import {Http} from '@angular/http';

@Injectable()
export class LoginService {

    constructor(private _http: Http) {

    }

    login(user:User) {
        if(user.username == 'skdhanjal' && user.password == 'dhanjal'){
            return true;
        }
        return false;
    }
}