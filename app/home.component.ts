import {Component} from '@angular/core';
import {SignInComponent} from './tstComps/signin/signin.component';

@Component({
    selector: 'home',
    template: `
        <signin></signin>
    `,
    directives: [SignInComponent]
})

export class HomeComponent{
    
}