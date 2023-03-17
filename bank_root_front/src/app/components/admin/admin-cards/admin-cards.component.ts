import { Component, OnInit } from '@angular/core';
import { GetService } from '../../../services/get.service';

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.css'],
})
export class AdminCardsComponent implements OnInit {
  requests: any;

  constructor(private service: GetService) {}

  ngOnInit() {
    this.service.getRequests().subscribe(response => {
      this.requests = response;
    });
  }
}
