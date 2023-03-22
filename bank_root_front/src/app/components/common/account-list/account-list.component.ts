import { Component, OnInit } from '@angular/core';
import { GetService } from '../../../services/get.service';
import { NgForOf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  imports: [NgForOf],
})
export class AccountListComponent implements OnInit {
  users: any;

  constructor(private service: GetService) {}

  ngOnInit() {
    this.service.getAccount().subscribe(response => {
      this.users = response;
    });
  }
}
