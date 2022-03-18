import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  number = 40;
  arr = [1, 2, 3];
  obj = {a: 1, b:{c: 3} };
  img = 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/sign-delete-icon.png';
  constructor() {
    setTimeout(()=>{
      console.log('timeout is over');
      this.img = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/640px-Sign-check-icon.png"
    },5000)
  }
}
