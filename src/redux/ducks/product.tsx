import axios from "axios";

const GET_BOOKS = "getBooks";
const GET_BOOK_BY_ID = "getBookById";
const CLEAR_STATE = "clearState";

export const getBooks = () => async (dispatch: any) => {
  const response = await axios.get(`http://localhost:3000/books`);
  dispatch({ type: GET_BOOKS, payload: response.data });
};

export const clearState = () => ({
  type: CLEAR_STATE,
});

export const getBookById = (id: string) => async (dispatch: any) => {
  const response = await axios.get(`http://localhost:3000/books/${id}`);
  dispatch({ type: GET_BOOK_BY_ID, payload: response.data });
};

const initialState = {
  books: [],
  currentBooks: [],
  book: {},
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case GET_BOOK_BY_ID:
      return { ...state, book: action.payload };
    case CLEAR_STATE:
      return { ...initialState };
    default:
      return state;
  }
};

export default productReducer;
