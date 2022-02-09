import {
  FETCH_ALL_BOOKS,
  FETCH_BOUGHT_BOOKS,
  FETCH_CART_BOOKS,
  CLEAR_CART,
  FETCH_ADDRESS,
  CHANGE_ADDRESS,
  SET_SELECTED_BOOK,
} from "../action-creators/index";

const initialState = {
  allBooks: [],
  boughtBooks: [],
  booksInCart: [],
  currentAddress: {},
  selectedBook: {},
};

function fetchDataReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case FETCH_ALL_BOOKS:
      return {
        ...state,
        allBooks: action.payload,
      };
    case FETCH_BOUGHT_BOOKS:
      return {
        ...state,
        boughtBooks: action.payload,
      };
    case FETCH_CART_BOOKS:
      return {
        ...state,
        booksInCart: action.payload,
      };
    case CLEAR_CART:
      return {
        ...state,
        booksInCart: [],
      };
    case FETCH_ADDRESS:
      return {
        ...state,
        currentAddress: action.payload,
      };
    case CHANGE_ADDRESS:
      return {
        ...state,
        currentAddress: action.payload,
      };
    case SET_SELECTED_BOOK:
      return {
        ...state,
        selectedBook: action.payload,
      };
    default:
      return state;
  }
}

export default fetchDataReducer;
