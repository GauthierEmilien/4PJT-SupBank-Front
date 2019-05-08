import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../models/user';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    fb: FormBuilder,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
    private router: Router,
    private loginService: LoginService,
  ) {
    this.form = fb.group({
      username: [''],
      password: [''],
    });
  }

  login(): void {
    // console.log(this.form.value);

    // if (this.form.value.username === 'admin' && this.form.value.password === 'admin') {
    //   this.router.navigate(['user']);
    // } else {
    //   this.snackBar.open(this.translate.instant('login.wrong-credentials'), '', { duration: 2000 });
    // }
    // this.loginService.getUsers().subscribe(myUser => console.log(myUser));
    const user = new User(this.form.value.username, this.form.value.password);
    this.loginService.register(user).subscribe(response => console.log(response));
  }

  signup(): void {
    this.router.navigateByUrl('signup');
  }
}
