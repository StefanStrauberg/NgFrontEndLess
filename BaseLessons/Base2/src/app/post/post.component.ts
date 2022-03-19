import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../_models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  // Decorator Input
  @Input() post!: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
