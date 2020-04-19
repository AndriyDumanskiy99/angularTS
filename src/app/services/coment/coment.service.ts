import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ComentModel} from '../../Module/ComentModel';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getComent(): Observable<ComentModel[]> {

    return this.http.get<ComentModel[]>('https://jsonplaceholder.typicode.com/comments');

  }
}
