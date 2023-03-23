import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetService } from '../../../services/get.service';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  standalone: true,
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  imports: [NgForOf, FormsModule, AgGridModule, NgIf],
})
export class AccountListComponent implements OnInit {
  users: any = [];

  searchQuery = '';
  filteredUsers: any[] = null ?? [];

  constructor(private service: GetService) {}

  ngOnInit() {
    this.service.getAccount().subscribe(response => {
      this.users = response;
    });
  }

  search() {
    if (!this.searchQuery) {
      this.filteredUsers = [];
      return;
    }
    this.filteredUsers = this.users.filter(
      (user: { name: string; lastname: string; mail: string }) => {
        return (
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.lastname
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          user.mail.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    );
  }
}
