import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]], // TODO: Add pattern
      passConfirm: ['', [Validators.required, this.passwordConfirmation]],
    });
  }

  private passwordConfirmation(control: AbstractControl): { [key: string]: boolean } | null {
    if ((control.parent && control.parent.get('password') && control.parent.get('password').value) !== control.value) {
      return { passwordConfirmation: true };
    }
    return null;
  }

  public getError(error: string): ValidationErrors {
    if (this.form.get(error).errors) {
      return this.form.get(error).errors;
    }
  }

  public register(): void {
    if (this.form.valid) {
      this.router.navigateByUrl('login');
    }
    // this.form.markAsTouched();
    this.form.setErrors({});
    console.log(this.form);
  }

  public cancel(): void {
    this.router.navigateByUrl('login');
  }
}
