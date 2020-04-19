import { Injectable } from '@angular/core';
import {PostService} from '../post/post.service';
import {PostModel} from '../../Module/PostModel';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsResolverService  implements Resolve<PostModel[]>{

  constructor(private postsService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> | Promise<PostModel[]> | PostModel[]{
    return this.postsService.getPost();
  }
}
