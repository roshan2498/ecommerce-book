import { Link } from "react-router-dom";
import "./BookCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, buyProduct } from "../redux/ducks/cart";

function BookCard(props: any) {
  const dispatch = useDispatch();
  const { book } = useSelector((state: any) => state.product);

  const cartHandler = () => {
    dispatch(addToCart(book));
  };

  const buyHandler = () => {
    dispatch(buyProduct(book));
  };

  const { thumbnailUrl, authors, title, price, id } = props;
  return (
    <div className="book">
      <div className="book-details">
        <img src={thumbnailUrl} alt="book" />
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(", ")}</div>
      </div>
      <div className="book-price">{"$" + price}</div>
      <Link to={`/book/${id}`} className="btn btn-detail">
        View Details
      </Link>
    </div>
  );
}

export default BookCard;
