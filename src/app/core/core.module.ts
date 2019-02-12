import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CustomMaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [HeaderComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent],
  imports: [CommonModule, CoreRoutingModule, CustomMaterialModule, FormsModule, ReactiveFormsModule, SharedModule, TranslateModule],
  exports: [RouterModule, HeaderComponent],
})
export class CoreModule {}
