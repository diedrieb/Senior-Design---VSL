import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikesComponent } from './likes/likes.component';
import { ListingsComponent } from './listings/listings.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: 'listings', component: ListingsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path:'likes', component: LikesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
