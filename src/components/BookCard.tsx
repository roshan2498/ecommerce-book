import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";
function BookCard(props: any) {
  const { thumbnailUrl, authors, title, shortDescription, price, id } = props;
  return (
    <div className="book">
      <div className="book-details">
        <img src={thumbnailUrl} alt="book" />
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(", ")}</div>
      </div>
      <div className="book-price">{"$" + price}</div>
      <div className="book-buy">
        <button className="btn btn-danger">Buy Now</button>
        <button className="btn btn-primary">Add To Cart</button>
      </div>
      <Link to={`/book/${id}`} className="btn btn-detail">
        View Details
      </Link>
    </div>
  );
}

export default BookCard;
