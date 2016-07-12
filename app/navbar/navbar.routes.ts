import { provideRouter, RouterConfig } from '@angular/router';
import { UsersComponent }  from '../users/users.component';
import { PostsComponent }    from '../posts/posts.component';
import {HomeComponent} from '../home.component';

export const NavbarRoutes: RouterConfig = [
    { path: 'login', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'posts', component: PostsComponent },
    { path: '', redirectTo:'login', pathMatch:'full'},
];
