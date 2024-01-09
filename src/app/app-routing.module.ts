import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './auth/containers/login-page/login-page.component';

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
const routes: Routes = [{
  path: 'login',
  component: LoginPageComponent,
  loadChildren: () => import('./pages/authentication/login/login.module').then(m => m.LoginModule),
},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        pathMatch: 'full'
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledNonBlocking',
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    enableTracing: true
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
