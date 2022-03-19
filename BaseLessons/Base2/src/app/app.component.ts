import { Component, OnInit } from '@angular/core';
import { Post } from './_models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void{
    setTimeout(()=>{
      console.log('Timeout');
      this.posts[0] = {
        title:  'Changed!',
        text: 'Changed!',
        id: 5
      }
    },5000)
  }
  now = new Date();
  posts: Post[] = [
    {
      title: 'I want to learn angualr components',
      text: 'I learn components',
      id: 1
    },
    {
      title: 'I want to learn angualr components',
      text: 'I learn components',
      id: 2
    }
  ];

  updatePosts(post: Post){
    this.posts.unshift(post);
    //console.log('Post', post)
  }
}
