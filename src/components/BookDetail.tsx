import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BookDetail.css";
// import { useHistory, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { addBookToCart, buyBook } from "../state/action-creators/fetch-data";
//
const BookDetail = () => {
  const [book, setBook] = useState<any | {}>({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`http://localhost:3000/books/${id}`);
        setBook(result.data);
        console.log(book);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && (
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
              <button className="btn">Buy Now</button>
              <button className="btn">Add To Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
// const SingleBook = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   //   const buyingHandler = () => {
//   //     dispatch(buyBook(selectedBook));
//   //   };

//   //   const selectedBook = useSelector((state: any) => state.books.selectedBook);
//   //   const { id } = useParams();
//   //   const selectedBook = books.find((book) => book.id === id);
//   return (
//     <div>
//       <h1>Single Book</h1>
//     </div>
//   );
// };

// export default SingleBook;
