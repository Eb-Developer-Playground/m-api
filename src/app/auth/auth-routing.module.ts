import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { UserProfilePageComponent } from './containers/user-profile-page/user-profile-page.component';
import { authGuard } from './guard/auth.guard';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent, data: {title: 'Login'}},
  {
    path: 'profile',
    component: UserProfilePageComponent,
    canActivate: [authGuard],
    data: {title: 'Profile'},
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
