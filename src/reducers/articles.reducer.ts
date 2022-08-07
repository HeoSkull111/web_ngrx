import { createReducer, on } from "@ngrx/store";
import { ArticlesState } from "src/states/articles.state";
import * as ArticlesActions from "src/actions/articles.actions";


const initialState: ArticlesState = {
    list: [],
    error: '',
    isSuccess: true,
    isLoading: false
};
export const articlesReducer = createReducer(
    initialState,
    on(ArticlesActions.getPaginate, state => ({ ...state, isLoading: true })),
    on(ArticlesActions.getPaginateSuccess, (state, action) => ({
        ...state, 
        list: action.list, 
        isLoading: false, 
        error: '', 
        isSuccess: true })),
    on(ArticlesActions.getPaginateFail, (state, action) => ({ 
        ...state, 
        list: [],
        error: action.error, 
        isLoading: false, 
        isSuccess: false }))
)