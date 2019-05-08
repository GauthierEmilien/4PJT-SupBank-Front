import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BlockchainModule } from '../blockchain/blockchain.module';
import { CustomMaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    TranslateModule,
    BlockchainModule,
  ],
  declarations: [HeaderComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent],
  exports: [HeaderComponent],
})
export class CoreModule {}
