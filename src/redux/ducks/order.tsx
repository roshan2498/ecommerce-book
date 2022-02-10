import axios from "axios";

const GET_ORDERS = "getMyOrder";

export const getMyOrders = () => async (dispatch: any) => {
  const response = await axios.get(
    "http://localhost:3000/orders?_sort=id&_order=desc"
  );
  dispatch({ type: GET_ORDERS, payload: response.data });
};

const initialState = {
  myOrders: [],
};

const orderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ORDERS:
      return { ...state, myOrders: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
