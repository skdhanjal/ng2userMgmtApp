import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NavBarComponent} from './navbar/navbar.component';
import {AuthenticationService} from './common/authentication.service';

@Component({
  selector: 'my-app',
  template: `
      <navbar></navbar>
      <div class="">
        <router-outlet></router-outlet>
      </div>
  `,
  directives: [NavBarComponent, ROUTER_DIRECTIVES],
  providers: [AuthenticationService]
})

export class AppComponent { }