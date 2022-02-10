import React, { useEffect } from "react";
import BookCard from "./BookCard";
import "./BookCard.css";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../redux/ducks/product";
const BookList = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: any) => state.product);
  const { books } = product;
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="container">
      {books.map((book: IBook) => (
        <BookCard {...book} />
      ))}
    </div>
  );
};

export default BookList;
