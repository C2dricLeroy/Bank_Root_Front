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

  ngOnInit(): void {
    if (this.authService.getToken()) {
      this.router.navigate(['/home']);
    }

    this.signing = new FormGroup({
      mail: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const { mail, password } = this.signing.value;
    console.log(this.signing);
    this.authService
      .login({ mail, password })
      .pipe(first())
      .subscribe((data: any) => {
        this.router.navigate(['/admin-space']);
      });
  }
}
