import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BookDetail.css";
import { useSelector } from "react-redux";

const BookDetail = () => {
  const { id } = useParams();
  const { book } = useSelector((state: any) => state.product);
  console.log(book);
  // const currentBook = book.find(id === book.id);
  return (
    <div className="book-detail">
      <div className="row">
        <img src={book.thumbnailUrl} alt={book.title} />
        <h2>${book.price}</h2>
      </div>
      <div className="row">
        <h2>{book.title}</h2>
        <h3>{book.authors.join(", ")}</h3>
        <em>{book.longDescription}</em>
        <div className="book-buy">
          <button className="btn btn-danger">Buy Now</button>
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
