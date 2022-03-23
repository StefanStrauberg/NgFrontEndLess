import { Component } from '@angular/core';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  constructor(public postsService: PostsService) {}

}