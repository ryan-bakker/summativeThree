import React from "react";
import Products from "./Components/Products";
import Login from "./Components/Login";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.scss";
import "./styles/nav.scss";
import "./styles/home.scss";
import "./styles/products.scss";
import UserAccount from "./Components/UserAccount";
import YourSelling from "./Components/YourSelling";
import ListItem from "./Components/ListItem";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Products />} />
        <Route path="/add-listing" element={<ListItem />} />
        <Route path="/delete-listing" element={<ListItem />} />
      </Routes>
    </div>
  );
}

function Menu() {
  const [logged, setLogin] = useState(false);
  const isLoggedIn = (isLoggedIn) => {
    setLogin(isLoggedIn);
  };

  return (
    <div className="nav">
      <Link className="site-logo" to="/">
        Retail<span>er</span>
      </Link>
      <ul className="nav-list">
        <li>
          <Link className="link-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-item" to="/listings">
            Listings
          </Link>
        </li>
        {logged && (
          <>
            <li>
              <Link to="/add-listing" className="link-item">
                Add Listing
              </Link>
            </li>
            <li>
              <Link to="/delete-listing" className="link-item">
                My Listings
              </Link>
            </li>
          </>
        )}
        <li className="login-graphic">
          <Login onUpdateLoggedInState={isLoggedIn} />
        </li>
      </ul>
    </div>
  );
}

export default App;
