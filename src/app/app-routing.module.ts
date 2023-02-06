import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikesComponent } from './likes/likes.component';
import { ListingsComponent } from './listings/listings.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'listings', component: ListingsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path:'likes', component: LikesComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
