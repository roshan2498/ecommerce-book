import { Dispatch } from "redux";
import {
  FETCH_ALL_BOOKS,
  FETCH_BOUGHT_BOOKS,
  FETCH_CART_BOOKS,
  CLEAR_CART,
  ERROR,
  FETCH_ADDRESS,
  CHANGE_ADDRESS,
  SET_SELECTED_BOOK,
} from "./index";

export const fetchAllBooks = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetch(`http://localhost:5000/books`);

      const data = await res.json();

      dispatch({
        type: FETCH_ALL_BOOKS,
        payload: data,
      });
    } catch (ex) {
      dispatch({
        type: ERROR,
      });
    }
  };
};

export const fetchBoughtBooks = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetch(`http://localhost:5000/myOrders`);

      const data = await res.json();

      dispatch({
        type: FETCH_BOUGHT_BOOKS,
        payload: data,
      });
    } catch (ex) {
      dispatch({
        type: ERROR,
      });
    }
  };
};

export const fetchBooksInCart = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetch(`http://localhost:5000/inCart`);

      const data = await res.json();

      dispatch({
        type: FETCH_CART_BOOKS,
        payload: data,
      });
    } catch (ex) {
      dispatch({
        type: ERROR,
      });
    }
  };
};

export const buyBook = (selectedBook: any) => {
  return async (dispatch: any) => {
    try {
      await fetch(`http://localhost:5000/myOrders`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(selectedBook),
      });
    } catch (ex) {
      dispatch({
        type: ERROR,
      });
    }
  };
};

export const addBookToCart = (selectedBook: any) => {
  return async (dispatch: any) => {
    try {
      await fetch(`http://localhost:5000/inCart`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(selectedBook),
      });
    } catch (ex) {
      dispatch({
        type: ERROR,
      });
    }
  };
};

export const deleteBook = (selectedBook: any) => {
  return async (dispatch: Dispatch) => {
    try {
      await fetch(`http://localhost:5000/inCart/${selectedBook.id}`, {
        method: "DELETE",
      });
    } catch (ex) {
      dispatch({
        type: ERROR,
      });
    }
  };
};

export const placeOrder = (selectedBook: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(buyBook(selectedBook));

      dispatch(deleteBook(selectedBook));
    } catch (ex) {
      dispatch({
        type: ERROR,
      });
    }
  };
};

export const clearCompleteCart = () => ({
  type: CLEAR_CART,
});

export const fetchAddress = () => {
  return async (dispatch: Dispatch) => {
    const res = await fetch(`http://localhost:5000/address/1`);
    const data = await res.json();
    dispatch({
      type: FETCH_ADDRESS,
      payload: data,
    });
  };
};

export const modifyAddress = (address: any) => {
  return async (dispatch: Dispatch) => {
    const res = await fetch(`http://localhost:5000/address/1`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(address),
    });

    const data = await res.json();
    dispatch({
      type: CHANGE_ADDRESS,
      payload: data,
    });
  };
};

export const setSelectedBook = (book: any) => ({
  type: SET_SELECTED_BOOK,
  payload: book,
});
