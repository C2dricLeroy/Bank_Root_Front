import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CommonComposentModule } from '../../components/common/common.module';
import { LoginFormComponent } from '../../components/login/login-form/login-form.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [CommonModule, CommonComposentModule],
  exports: [LoginComponent, LoginFormComponent],
  bootstrap: [LoginComponent],
})
export class LoginModule {}
