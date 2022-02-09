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
        <BookCard
          key={book.id}
          id={book.id}
          thumbnailUrl={book.thumbnailUrl}
          title={book.title}
          authors={book.authors}
          shortDescription={book.shortDescription}
          price={book.price}
        />
      ))}
    </div>
  );
};

export default BookList;
