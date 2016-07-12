import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../login/logout.component';
import {AuthenticationService} from '../common/authentication.service'

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.component.html',
    directives: [ROUTER_DIRECTIVES, LoginComponent, LogoutComponent],
    styles: [`
        .navbar-form {
            margin-bottom: -2px;
        }
        .navbar{
            margin-bottom:0px;
        }
    `]
})
export class NavBarComponent {
    private isLoggedIn:boolean;
    constructor(private _router: Router,
                private _authService: AuthenticationService) {
    }
    
    isCurrentRoute(routeUrl) {
        return this._router.url == routeUrl;
    }

    isUserAuthenticated() {
       return this._authService.isAuthenticated();
    }
 }