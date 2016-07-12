import {Component } from '@angular/core';
import {AuthenticationService} from '../common/authentication.service';
import {Router} from '@angular/router';
import {SpinnerComponent} from '../common/spinner/spinner.component';

@Component({
    selector: 'signin',
    templateUrl : 'app/signin/signin.component.html',
    styleUrls: ['app/signin/signin.component.css'],
    directives: [SpinnerComponent]
})

export class SignInComponent {
    private isSignedIn: boolean = false;
    private isLoggingIn:boolean = false;

    constructor(private _authService: AuthenticationService,
                private _router: Router) {
    }

    onSubmit(form) {
        this.isLoggingIn = true;
        this._authService.authenticate(form.value.username,form.value.password)
            .subscribe( res => {
                //console.log(res);
                this.isSignedIn = true;
                this.isLoggingIn = false;
                this._router.navigate(['/users']);
            });

    }

    signOut() {
        this._authService.logout();
        this.isSignedIn = false;
        this._router.navigate(['/login']);
    }
}