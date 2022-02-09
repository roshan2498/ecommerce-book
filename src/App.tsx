import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyOrder } from "./components/MyOrder";
import { Cart } from "./components/Cart";
import SingleBook from "./components/SingleBook";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/orders" element={<MyOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/book/:id" element={<SingleBook />} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
