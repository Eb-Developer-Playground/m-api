import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {ApiListComponent} from './api-list/api-list.component';
import {UserUpdateDetailsComponent} from './user/user-profile/user-update-details/user-update-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ApiDetailsComponent} from './api-list/api-details/api-details.component';
import {MaterialModule} from "./material/material.module";
import {FormlyModule} from '@ngx-formly/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyMaterialModule} from '@ngx-formly/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    ApiListComponent,
    UserUpdateDetailsComponent,
    PageNotFoundComponent,
    ApiDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    FormlyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
