import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminSpaceModule } from './pages/admin-space/admin-space.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { LoginModule } from './pages/login/login.module';
import { PersonalSpaceModule } from './pages/personal-space/personal-space.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminSpaceModule,
    HomepageModule,
    LoginModule,
    PersonalSpaceModule,
    RegistrationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
