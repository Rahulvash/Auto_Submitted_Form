import {Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ContactusComponent} from './contactus/contactus.component';
import {HomeComponent} from './home/home.component';

export const myRoutes: Routes = [
  {
    path: 'hello',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'aboutus',
    component: AboutusComponent
  }, {
  path: 'contactus',
    component: ContactusComponent
  }, {
    path: 'Home',
    component: NotFoundComponent
  }, {
  path: '**',
    component: NotFoundComponent

  }
];
