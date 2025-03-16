import { Routes } from '@angular/router';
import { LoginComponent } from './components/Auth/login/login.component';
import { SignupComponent } from './components/Auth/signup/signup.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
    },
    {
        path:'admin', 
        component:AdminLayoutComponent,
        children:[
            {path:'dashboard',component:DashboardComponent}
        ]
    }
  ];