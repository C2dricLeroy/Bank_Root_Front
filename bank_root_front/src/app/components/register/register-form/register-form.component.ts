import { Component, OnInit } from '@angular/core';
import { GetService } from '../../../services/get.service';
import { FormBuilder } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  error: boolean;
  constructor(
    private service: PostService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.error = false;
  }
  user = {
    name: '',
    lastname: '',
    mail: '',
    password: '',
  };
  confirmPassword = '';

  onSubmit() {
    if (this.user.password === this.confirmPassword) {
      const response = this.service
        .register(this.user)
        .subscribe(response => console.log(response));
    } else {
      this.error = true;
    }
  }

  closeError() {
    this.error = false;
  }
}
