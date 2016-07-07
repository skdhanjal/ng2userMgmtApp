import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.component.html',
    directives: [ROUTER_DIRECTIVES, LoginComponent]
})
export class NavBarComponent {
    constructor(private _router: Router){
    }
    
    isCurrentRoute(route){
        return false;
    }
 }