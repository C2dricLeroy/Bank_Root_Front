import { Component } from '@angular/core';

@Component({
  selector: 'template',
  template: `
    <div>
      <h1>Mon Composant</h1>
      <p>Ceci est mon composant Angular.</p>
    </div>
  `,
  styles: [`
    h1 {
      color: blue;
    }
  `]
})
export class AppComponent {

}
