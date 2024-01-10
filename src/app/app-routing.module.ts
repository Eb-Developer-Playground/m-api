import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './auth/containers/login-page/login-page.component';
import { ApiListComponent } from './api-list/api-list.component';
import { ApiDetailsComponent } from './api-list/api-details/api-details.component';
import { ConfigPanelComponent } from './layout/config-panel/config-panel.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserUpdateDetailsComponent } from './user/user-profile/user-update-details/user-update-details.component';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'dashboard',
//     pathMatch: 'full'
//   },
//   {
//     path: 'dashboard',
//     component: DashboardComponent,
//     canActivate: [authGuard],
//     data: {title: 'Dashboard'},
//
//   },
//   {
//     path: 'user',
//     component: UserProfileComponent
//   },
//   {
//     path: 'user/:id',
//     component: UserUpdateDetailsComponent
//   },
//   {
//     path: 'apis',
//     component: ApiListComponent,
//     data: {title: 'API list'},
//
//   },
//   {
//     path: 'apis/:id',
//     component: ApiDetailsComponent,
//     data: {title: 'API detail'},
//
//   },
//   {
//     path: '**',
//     component: PageNotFoundComponent,
//     data: {title: 'Page Not found'},
//
//   }
// ];
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
        pathMatch: 'full',
        data: { title: 'Dashboard' },
      },
      {
        path: 'login',
        component: LoginPageComponent,
        data: { title: 'Login Page' },

        loadChildren: () =>
          import('./pages/authentication/login/login.module').then(
            (m) => m.LoginModule,
          ),
      },
      {
        path: 'settings',
        component: ConfigPanelComponent,
        data: { title: 'Configuration' },
      },
      {
        path: 'user',
        component: UserProfileComponent,
      },
      {
        path: 'user/:id',
        component: UserUpdateDetailsComponent,
      },
      {
        path: 'apis',
        component: ApiListComponent,
        data: { title: 'API list' },
      },
      {
        path: 'apis/:id',
        component: ApiDetailsComponent,
        data: { title: 'API detail' },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledNonBlocking',
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
