import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from '../material.module';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HeaderComponent, LoginComponent],
  imports: [CommonModule, CoreRoutingModule, CustomMaterialModule, FormsModule, FormsModule],
  exports: [RouterModule, HeaderComponent],
})
export class CoreModule {}
