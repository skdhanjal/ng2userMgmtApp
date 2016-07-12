import {Component} from '@angular/core';
import {SignInComponent} from './signin/signin.component';
import {AuthenticationService} from './common/authentication.service';


@Component({
    selector: 'home',
    template: `
        <signin *ngIf="isAuthenticationRequired()"></signin>
    `,
    directives: [SignInComponent]
})

export class HomeComponent {

    constructor(private _authService: AuthenticationService){ }

    isAuthenticationRequired() {
        return !this._authService.isAuthenticated();
    }
}