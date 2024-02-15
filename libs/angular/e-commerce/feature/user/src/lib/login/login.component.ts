import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../store/login.service';

// interface LoginInfo {
//   username: string;
//   password: string;
// }

@Component({
  selector: 'expnx-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  search = new FormControl('');

  loginForm = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16),
      ],
    }),
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  login() {
    this.loginService
      .login(
        this.loginForm.value.username as string,
        this.loginForm.value.password as string,
      )
      .subscribe((token) => {
        console.log(token);
        this.loginService.isLoggedIn = true;
        this.router.navigate(['/product']);
      });
  }
}
