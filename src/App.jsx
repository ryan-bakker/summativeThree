import React from "react";
import Products from "./Components/Products";
import Login from "./Components/Login";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Nav from "./Components/Nav";
import UserAccount from "./Components/UserAccount";
import YourSelling from "./Components/YourSelling";
import ListItem from "./Components/ListItem";
import { useEffect, useState } from "react";

function App() {
  const [logged, setLogin] = useState(false);
  const isLoggedIn = (isLoggedIn) => {
    setLogin(isLoggedIn);
  };
  return (
    <div className="App">
      <Nav />
      <div className="nav-buttons">
        <Link className="link-item" to="/">
          Products
        </Link>
        <Link className="link-item" to="/list-item">
          List Item
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add-listing" element={<ListItem />} />
        <Route path="/delete-listing" element={<UserAccount />} />
      </Routes>
      <Login onUpdateLoggedInState={isLoggedIn} />
      {logged && (
        <>
          <li>
            <Link to="/add-listing">Add Listing</Link>
          </li>
          <li>
            <Link to="/delete-listing">Delete Listing</Link>
          </li>
        </>
      )}
    </div>
  );
}

export default App;
