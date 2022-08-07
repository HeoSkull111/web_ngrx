import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map,switchMap,of } from 'rxjs';
import { Article } from "src/states/articles.state";
import * as ArticlesActions from "../actions/articles.actions";

@Injectable()
export class ArticlesEffects {
    constructor(private action$: Actions, private http: HttpClient) { }
    getArticles = createEffect(() =>this.action$.pipe(
        ofType(ArticlesActions.getPaginate),
        switchMap((action) => {
            return this.http.get(
                `https://social.runwayclub.dev/api/articles/latest?page=${action.page}&per_page=${action.perPage}`);
        }),
        map((response) => {
            return ArticlesActions.getPaginateSuccess({ list: <Array<Article>>response });
        }),
        catchError((error) => {
            return of(ArticlesActions.getPaginateFail({ error: error.message }));
        }   
    )));
}