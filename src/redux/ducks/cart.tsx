import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import axios from "axios";

const ADD_ITEM_TO_CART = "addItemToCart";
const REMOVE_ITEM_FROM_CART = "removeItemFromCart";
const CLEAR_CART = "clearCart";

export const addToCart =
  (data: any): ThunkAction<void, {}, {}, AnyAction> =>
  (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: any): void => {
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: data,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const placeOrder =
  () =>
  (dispatch: any, getState: Function): void => {
    const cartItems = getState().cart.cartItems;
    cartItems.forEach(async (item: any) => {
      dispatch(buyProduct(item));
    });

    dispatch({
      type: CLEAR_CART,
    });
  };

export const buyProduct = (book: any) => async () => {
  const payload = {
    book: {
      id: book.id,
      title: book.title,
      authors: book.authors,
      thumbnailUrl: book.thumbnailUrl,
      price: book.price,
    },
    orderPlacedAt: new Date().toDateString(),
    status: "Delivered",
  };

  await axios.post("http://localhost:3000/orders", payload);
};

export const removeItemFromCart =
  (id: string) => (dispatch: any, getState: Function) => {
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: { id },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const clearCart = () => ({
  type: CLEAR_CART,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems") as string)
  : [];

const initialState = {
  cartItems: cartItemsFromStorage,
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const existItem = state.cartItems.find(
        (item: any) => item.id === action.payload.id
      );

      if (existItem) {
        return state;
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item: any) => item.id !== action.payload.id
        ),
      };

    case CLEAR_CART:
      localStorage.removeItem("cartItems");
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

export default cartReducer;
