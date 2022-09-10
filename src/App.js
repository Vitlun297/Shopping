import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Cart from "./containers/ProductComponent/Cart/Cart"
import Header from "./containers/Header/Header";
import "./App.css";
import ProductDetails from "./containers/ProductComponent/ProductDetail/ProductDetails";
import Login from "./containers/Login/Login"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
