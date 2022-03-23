import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Post, PostsService } from "./post.service";

@Injectable({providedIn: 'root'})
export class PostResolver implements Resolve<Post> {
    
    constructor(private postsService: PostsService){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post {
        return this.postsService.getById(+route.params['id']) as Post;
    }

}