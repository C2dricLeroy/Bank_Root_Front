import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComposentModule } from '../../components/common/common.module';
import { RegistrationComponent } from './registration.component';
import { RegisterFormComponent } from '../../components/register/register-form/register-form.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistrationComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    CommonComposentModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RegistrationModule {}
