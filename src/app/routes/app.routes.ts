import { Routes } from '@angular/router';
import { LoginComponent } from '../form/login/login.component';
import { RegisterComponent } from '../form/register/register.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    {
        path:'',
        title: 'Home',
        component:HomeComponent
    },
    {
        path:'login',
        title: 'Login',
        component:LoginComponent
    },
    {
        path:'register',
        title: 'Register',
        component:RegisterComponent
    }
];
