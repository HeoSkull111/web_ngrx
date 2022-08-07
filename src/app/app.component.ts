import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Article, ArticlesState } from 'src/states/articles.state';
import * as ArticlesActions from 'src/actions/articles.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Postman_2';
  articles$: Observable<Article[]>;
  
  constructor(private store: Store<{articles: ArticlesState}>) {
    this.articles$= this.store.select((state) => state.articles.list);
  }
  loadArticles() {
    this.store.dispatch(ArticlesActions.getPaginate({
      page: 1, 
      perPage: 10 
    }));
  }
}
