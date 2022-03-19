import { Component } from '@angular/core';
import { Post } from './_models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  now = new Date();
  posts: Post[] = [
    {
      title: 'I want to learn angualr components',
      text: 'I learn components',
      id: 1
    },
    {
      title: 'The Next blog',
      text: 'The next blog will be about derectives and components',
      id: 2
    }
  ];

  updatePosts(post: Post){
    this.posts.unshift(post);
    //console.log('Post', post)
  }
}
