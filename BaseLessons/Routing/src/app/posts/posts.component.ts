import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  showIds:boolean = false;

  constructor(public postsService: PostsService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params)=>{

      this.showIds = !!params['showIds']
      console.log('Params: ',params);
    })
  }

  showIdsProgram(){
    this.router.navigate(['/posts',{
      queryParmas:{
        showIds: true
      }
    }])
  }

}
