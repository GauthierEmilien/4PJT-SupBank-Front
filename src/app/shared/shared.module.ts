import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormErrorComponent } from './form-error/form-error.component';

@NgModule({
  declarations: [FormErrorComponent],
  imports: [CommonModule, TranslateModule],
  exports: [FormErrorComponent],
})
export class SharedModule {}
