import { Component } from '@angular/core';
import { AuthService } from '../../services/authentication.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-space',
  templateUrl: './admin-space.component.html',
  styleUrls: ['./admin-space.component.css'],
})
export class AdminSpaceComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
