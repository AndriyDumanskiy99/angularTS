import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../Module/UserModel';
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';
import {UserService} from '../../services/user/user.service';
import {PostService} from '../../services/post/post.service';
import {PostModel} from '../../Module/PostModel';
import {ComentModel} from '../../Module/ComentModel';
import {CommentService} from '../../services/coment/coment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

users: UserModel[];
posts: PostModel[];
  comment: ComentModel[];
  constructor(private userService: UserService, private postService: PostService, private commentService: CommentService){
this.userService.getUsers().subscribe(value => this.users = value);
this.postService.getPost().subscribe(value => this.posts = value);
this.commentService.getComent().subscribe(value => this.comment = value);
}

  }

