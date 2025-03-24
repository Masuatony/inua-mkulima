import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CommonModule, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  isSubmitting = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    // Create login form with validators
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const payload = {
      "username": this.loginForm.value.username,
      "password": this.loginForm.value.password
    }
    this.authService.loginApi(payload).subscribe({
      next: (res) => {
        console.log(res)
        this.isSubmitting = false;

        if (res) {
          this.snackBar.open('Login successful', 'Close', { duration: 3000 });
          this.router.navigate(['/products']);
        } else {
          this.isSubmitting = false;
          this.snackBar.open(res.message, 'Close', { duration: 3000 });
        }
      },
      error: (error) => {
        this.router.navigate(['/products']);
        this.isSubmitting = false;
      },
      complete: () => {
        this.isSubmitting = false;
        this.router.navigate(['/products']);
      }
    },
      )
  }
  // Getter methods for easy access to form controls in the template
  get usernameControl() { return this.loginForm.get('username'); }
  get passwordControl() { return this.loginForm.get('password'); }

}
