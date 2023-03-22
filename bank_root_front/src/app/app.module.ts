import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminSpaceModule } from './pages/admin-space/admin-space.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { LoginModule } from './pages/login/login.module';
import { PersonalSpaceModule } from './pages/personal-space/personal-space.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { HttpClientModule } from '@angular/common/http';
import { BorderCardDirective } from './directives/admin/border-card.directive';
import { RequestPipe } from './pipes/request.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/authentication.service';
import { httpInterceptorProviders } from './interceptors/interceptor.module';

@NgModule({
  declarations: [AppComponent, BorderCardDirective, RequestPipe],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HomepageModule,
    LoginModule,
    PersonalSpaceModule,
    RegistrationModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService, httpInterceptorProviders],
  bootstrap: [AppComponent],
  exports: [BorderCardDirective, RequestPipe],
})
export class AppModule {}
