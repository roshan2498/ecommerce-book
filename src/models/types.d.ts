interface IArticle {
    id: number;
    title: string;
    body: string;
}

type ArticleState = {
    articles: IArticle[];
}

type ArticleAction = {
    type: string;
    article: IArticle;
}

type DispatchType = (args: ArticleAction) => ArticleAction;

// Books
interface IBook {
    id: number;
    title: string;
    isbn: number;
    pageCount: number;
    publishedDate: Date;
    thumbnailUrl: string;
    shortDescription: string;
    longDescription: string;
    price: number;
    authors: string[];
};

interface BookState {
    pending: boolean;
    books: IBook[];
    error: string | null;
}

interface FetchBooksSuccessPayload {
    books: IBook[];
}

interface FetchBooksFailurePayload {
    error: string;
}

interface FetchBooksRequest {
    type: typeof postTypes.FETCH_POST_REQUEST;
}

type FetchBooksSuccess = {
    type: typeof postTypes.FETCH_POST_SUCCESS;
    payload: FetchBooksSuccessPayload;
};

type FetchBooksFailure = {
    type: typeof postTypes.FETCH_POST_FAILURE;
    payload: FetchBooksFailurePayload;
};

type BookActions =
    | FetchBooksRequest
    | FetchBooksSuccess
    | FetchBooksFailure;

interface ResponseGenerator {
    config?: any;
    data?: any;
    headers?: any;
    request?: any;
    status?: number;
    statusText?: string;
}

type BookProp = {
    imageLink: string,
    title: string,
    author: string
}