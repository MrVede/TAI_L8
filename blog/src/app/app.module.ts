import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SummaryPipe } from './components/blog/components/summary.pipe';
import { PostComponent } from './components/blog/components/post/post.component';
import { GraphicsComponent } from './components/blog/components/graphics/graphics.component';
import { ItemComponent } from './components/blog/components/item/item.component';
import {HttpClientModule} from '@angular/common/http';
import {MyService} from "./services/MyService";
import { FilterPipe } from './pipes/filter.pipe';

const appRoutes: Routes = [
  {path: 'quiz', component: QuizComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'post/:id', component: PostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent,
    HomeComponent,
    BlogComponent,
    NavbarComponent,
    SummaryPipe,
    PostComponent,
    GraphicsComponent,
    ItemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
