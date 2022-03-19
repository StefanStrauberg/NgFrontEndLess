import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../_models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  // EventEmitter live in library core!!!
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput', {static: false}) inputRef!: ElementRef

  title: string = '';
  text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addPost(){
    if(this.text.trim() && this.title.trim()){
      const post: Post = {
        title: this.title,
        text: this.text
      }
      // send our new object outside
      this.onAdd.emit(post);
      //console.log('New post', post);
      this.title = this.text ='';
    }
  };
  focusTitle(){
    this.inputRef.nativeElement.focus();
    //console.log(this.titleRef);
  }

}