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
  constructor(
    private service: PostService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  user = {
    mail: '',
    password: '',
    confirmPassword: '',
  };

  async onSubmit() {
    if (this.user.password === this.user.confirmPassword) {
      const response = await this.service
        .register(this.user)
        .subscribe(response => console.log(response));

      /*if (response) {
        await console.log(response);
        window.alert('Votre compte a bien été créé');
        await this.router.navigate(['/login']);
      }*/
    } else return window.alert('wrong informations');
  }
}
