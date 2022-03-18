import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Dynamic title';
  number = 40;
  arr = [1, 2, 3];
  obj = {a: 1, b:{c: 3} };
  img = 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/sign-delete-icon.png';
}
