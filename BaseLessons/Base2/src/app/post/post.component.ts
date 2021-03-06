import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from '../_models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  // Decorator Input
  @Input() post!: Post;

  // Decorator ContentChild
  @ContentChild('info', {static: true}) infoRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.infoRef.nativeElement)
  }
}
