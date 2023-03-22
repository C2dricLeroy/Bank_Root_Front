import { Component, OnInit } from '@angular/core';
import { GetService } from '../../../services/get.service';
import { AuthService } from '../../../services/authentication.service';

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.css'],
})
export class AdminCardsComponent implements OnInit {
  requests: any;

  constructor(private service: GetService, private authService: AuthService) {}

  token = this.authService.getToken();

  ngOnInit() {
    this.service.getRequests().subscribe(response => {
      this.requests = response;
    });
  }
}
