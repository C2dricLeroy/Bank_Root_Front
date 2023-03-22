import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @Input() signing!: FormGroup;
  error: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.error = false;
  }

  errorMessage = '';

  ngOnInit(): void {
    if (this.authService.getToken()) {
      this.router.navigate(['/admin-space']);
    }

    this.signing = new FormGroup({
      mail: new FormControl(),
      password: new FormControl(),
    });
  }

  register() {
    return new Promise((resolve, reject) => {
      const { mail, password } = this.signing.value;
      this.authService
        .login({ mail, password })
        .pipe(first())
        .subscribe({
          next(data) {
            resolve(data);
          },
          error(err) {
            reject(err);
          },
        });
    });
  }
  async onSubmit(event: Event) {
    event.preventDefault();
    const response: any = await this.register();
    if (response.statusCode === 200) {
      console.log('réussi');
    }
  }

  closeError() {
    this.error = false;
  }
}
