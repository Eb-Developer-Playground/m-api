import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {ApiListComponent} from "./api-list/api-list.component";
import {UserUpdateDetailsComponent} from "./user/user-profile/user-update-details/user-update-details.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ApiDetailsComponent} from "./api-list/api-details/api-details.component";
import {authGuard} from "./auth/guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'users',
    component: UserProfileComponent
  },
  {
    path: 'user/:id',
    component: UserUpdateDetailsComponent
  },
  {
    path: 'apis',
    component: ApiListComponent
  },
  {
    path: 'apis/:id',
    component: ApiDetailsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
