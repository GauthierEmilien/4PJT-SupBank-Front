import { Component, Input, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
})
export class FormErrorComponent implements OnChanges {
  @Input()
  error!: ValidationErrors;

  constructor() {}

  ngOnChanges(): void {
    // console.log(this.error);
  }
}
