import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../../../../../../@equity-bank/shared/material-components.module';
import { AuthModule } from '../../index';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    LoginRoutingModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
