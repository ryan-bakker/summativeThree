import React from "react";
import Products from "./Components/Products";
import Login from "./Components/Login";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Nav from "./Components/Nav";
import UserAccount from "./Components/UserAccount";
import YourSelling from "./Components/YourSelling";
import ListItem from "./Components/ListItem";

function App() {
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
        <Route path="/list-item" element={<ListItem />} />
      </Routes>
    </div>
  );
}

export default App;
