import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ComentModel} from '../../Module/ComentModel';
import {Observable} from 'rxjs';
import {CommentService} from '../coment/coment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<ComentModel[]>{

  constructor( private commentService: CommentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ComentModel[]> | Promise<ComentModel[]> | ComentModel[] {
    return this.commentService.getComent();
  }
}
