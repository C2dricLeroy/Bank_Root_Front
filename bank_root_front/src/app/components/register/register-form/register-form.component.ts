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
  constructor(private service: PostService) {
    this.error = false;
    this.confirmation = false;
  }
  user = {
    name: '',
    lastname: '',
    mail: '',
    password: '',
  };
  confirmPassword = '';
  confirmation: boolean;
  confirmationMessage = '';
  errorMessage = '';

  register() {
    return new Promise((resolve, reject) => {
      this.service.register(this.user).subscribe({
        next(data) {
          resolve(data);
        },
        error(err) {
          reject(err);
        },
      });
    });
  }

  async onSubmit() {
    if (this.user.password === this.confirmPassword) {
      const response: any = await this.register();
      if (response.statusCode === 200) {
        this.confirmation = true;
        this.confirmationMessage = 'The user has been successfully created!';
      } else if (response.statusCode === 409) {
        this.error = true;
        this.errorMessage = 'This user already exists';
      } else {
        console.log(response);
        this.error = true;
        this.errorMessage = 'Look on your console';
      }
    } else {
      this.error = true;
      this.errorMessage = 'Passwords must be the same!';
    }
  }

  closeError() {
    this.error = false;
  }
}
