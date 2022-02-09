import React, { useState } from "react";

export const Cart = () => {
  const [cart, setCart] = useState<IBook[] | undefined>([]);

  const addToCart = (book: IBook): void => {
    if (cart) {
      setCart([...cart, book]);
    } else {
      setCart([book]);
    }
  };
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};
