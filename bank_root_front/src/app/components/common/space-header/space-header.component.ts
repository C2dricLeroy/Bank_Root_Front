import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-space-header',
  templateUrl: './space-header.component.html',
  styleUrls: ['./space-header.component.css'],
  imports: [RouterLink],
})
export class SpaceHeaderComponent {}
