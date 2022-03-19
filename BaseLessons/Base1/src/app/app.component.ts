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
  obj = { a: 1, b:{c: 3} };
  img = 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/sign-delete-icon.png';
  inputValue = '';
  inputValue2 = '';
  inputValue3 = '';
  backGroundToggel: boolean = false;
  toggle: boolean = false;
  toggle2: any = false;
  array = [1,1,2,3,5,8,13];
  objects = [
    {title: 'Post 1', author: 'Author First', comments: 
    [
      {name: 'Name Dean' , text: 'lorem 1'},
      {name: 'Name Jack' , text: 'lorem 2'},
      {name: 'Name Lisa' , text: 'lorem 3'}
    ]},
    {title: 'Post 2', author: 'Author Second', comments: 
    [
      {name: 'Name Quake' , text: 'lorem 1'},
      {name: 'Name Doom' , text: 'lorem 2'},
      {name: 'Name Strike' , text: 'lorem 3'}
    ]}
  ]
  constructor() {
    setTimeout(()=>{
      //console.log('timeout is over');
      this.img = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/640px-Sign-check-icon.png";
    },5000)
  }
  onInput(event?: any){
    //console.log('Event', event);
    this.inputValue = event?.target.value;
  }
  onClick(){
    //console.log('Click!');
    this.inputValue = 'Fuck You!';
    this.inputValue2 = 'Kiss my ass!'
    this.inputValue3 = 'Mother fucker!'
  }
  onInput2(event?: any){
    //console.log('Event', event);
    this.inputValue2 = event?.target.value;
  }
  onInput3(event: any){
    //console.log('Event', event);
    this.inputValue3 = event.target.value;
  }
}
