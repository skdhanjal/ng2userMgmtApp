import {Component} from '@angular/core';

@Component({
    selector: 'logout',
    template: `
        <div class="navbar-right">
            <span class="navbar-text"> Welcome, {{ user.name}}</span>
            <button type="button" class="btn btn-primary">Logout</button>
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
    user = {
        name: 'Shashi'
    }
}