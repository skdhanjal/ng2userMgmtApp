import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {APP_ROUTER_PROVIDERS} from './app.routes';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  ROUTER_PROVIDERS
])
.catch(err => console.error(err));