import { provideRouter, RouterConfig } from '@angular/router';
import {NavBarComponent} from './navbar/navbar.component';
import {NavbarRoutes} from './navbar/navbar.routes';

export const routes: RouterConfig = [
  ...NavbarRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];