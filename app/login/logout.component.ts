import {Component , OnInit, Input} from '@angular/core';
import {AuthenticationService} from '../common/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'logout',
    template: `
        <div class="navbar-right">
            <span class="navbar-text"> Welcome, {{ getUserName()}}</span>
            <button type="button" class="btn btn-primary" (click)="logout()">Logout</button>
        </div>
    `,
    styles: [`
        button {
            position: relative;
            top: 7px;
        }
    `]
})
export class LogoutComponent {

    constructor(private _authService: AuthenticationService,
                private _router: Router){ }

    logout() {
        this._authService.logout()
            .subscribe(res => {
                console.log(res);
            })
        this._router.navigate(['/login']);
    }

    getUserName() {
        return this._authService.getAuthenticatedUserName();
    }

}