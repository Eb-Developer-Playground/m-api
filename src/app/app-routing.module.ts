import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ApiDetailsComponent } from './pages/api-list/api-details/api-details.component';
import { ConfigPanelComponent } from './layout/config-panel/config-panel.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserUpdateDetailsComponent } from './pages/user/user-profile/user-update-details/user-update-details.component';
import { ApiListComponent } from './pages/api-list/api-list.component';
import { authGuard } from './pages/authentication/+state/guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    data: { title: 'Login Page' },
    loadChildren: () =>
      import(
        './pages/authentication/+state/components/login/login.module'
      ).then((m) => m.LoginModule),
  },
  {
    path: 'register',
    data: { title: 'SignUp Page' },
    loadChildren: () =>
      import(
        './pages/authentication/+state/components/register/register.module'
      ).then((m) => m.RegisterModule),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
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
      {
        path: '**',
        component: PageNotFoundComponent,
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
