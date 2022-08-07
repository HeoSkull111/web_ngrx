export interface Article {
    id: number;
    title: string;
    description: string;
    cover_image: string;
    name: string;
    profile_image: string;
}
export interface ArticlesState {
    list: Article[];
    error: string;
    isSuccess: boolean;
    isLoading: boolean;
}