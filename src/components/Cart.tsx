import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  return (
    <div>
      <h1>Cart</h1>
      {console.log(cartItems)}
    </div>
  );
};
