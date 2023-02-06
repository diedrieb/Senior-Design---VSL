import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { RegistrationComponent } from "./registration/registration.component";



export const appRoutes: Routes = [
    {
      path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
      path: '', redirectTo: '/main', pathMatch: 'full'
    },
    {
      path: '', redirectTo: '/add-hobby', pathMatch: 'full'
    },
    {
      path: '', redirectTo: '/edit-hobby', pathMatch: 'full'
    },
    {
      path: '', redirectTo: '/dashboard', pathMatch: 'full'
    },
    {
      path: '', redirectTo: '/signup', pathMatch: 'full'
    },
    {
      path: '', redirectTo: '/external-links', pathMatch: 'full'
    },
    {
      path: '', redirectTo: '/calendar', pathMatch: 'full'
    },
    {
      path: '', redirectTo: '/motivation', pathMatch: 'full'
    },
    {
      path: '', redirectTo: '/checklist', pathMatch: 'full'
    }
  
  
  ]