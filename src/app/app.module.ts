import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { ComentComponent } from './components/coment/coment.component';
import {RouterModule} from '@angular/router';
import {listLazyRoutes} from '@angular/compiler/src/aot/lazy_routes';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { HelloComponent } from './components/hello/hello.component';
import {UserResolverService} from './services/resolvers/user-resolver.service';
import {PostsResolverService} from './services/resolvers/posts-resolver.service';
import {CommentResolverService} from './services/resolvers/comment-resolver.service';


const routes = [
  {path: '', component: HelloComponent},
  {path: 'users', component: AllUsersComponent, resolve: {list : UserResolverService}},
  {path: 'posts', component: AllPostsComponent, resolve: {list : PostsResolverService}},
  {path: 'comments', component: AllCommentsComponent, resolve: {list: CommentResolverService}}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    ComentComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
