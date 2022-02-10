import React, { useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import "./BookCard.css";

const BookList = () => {
  const [books, setBooks]: any = React.useState([]);
  useEffect(() => {
    axios
      .get<any>("http://localhost:3000/books")
      .then((res) => setBooks(res.data));
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
