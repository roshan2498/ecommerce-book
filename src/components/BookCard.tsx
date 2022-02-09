import React, { useState } from "react";
import "./BookCard.css";
function BookCard(props: any) {
  const { thumbnailUrl, authors, title, shortDescription, price, id } = props;
  return (
    <div className="book">
      <div className="book-details">
        <img src={thumbnailUrl} alt="book" />
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors.map((author: string) => (
            <span className="author-list">{author}</span>
          ))}
        </div>
      </div>
      <div className="book-price">{"$" + price}</div>
      <div className="book-buy">
        <button className="btn btn-danger">Buy Now</button>
        <button className="btn btn-primary" onClick={() => addToCart(props)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default BookCard;
