import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from '../../Module/UserModel';
import {HttpClient} from '@angular/common/http';
import {PostModel} from '../../Module/PostModel';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private http:HttpClient){

}
  getPost(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
}
}

