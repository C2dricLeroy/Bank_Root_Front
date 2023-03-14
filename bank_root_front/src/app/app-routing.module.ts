import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminSpaceComponent} from "./pages/admin-space/admin-space.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {PersonalSpaceComponent} from "./pages/personal-space/personal-space.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegistrationComponent} from "./pages/registration/registration.component";

const routes: Routes = [
  { path: 'admin-space', component: AdminSpaceComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'personal-space', component: PersonalSpaceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
