import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NavBarComponent} from './navbar/navbar.component';

@Component({
  selector: 'my-app',
  template: `
      <navbar></navbar>
      <div class="">
        <router-outlet></router-outlet>
      </div>
  `,
  directives: [NavBarComponent, ROUTER_DIRECTIVES]
})

export class AppComponent { }