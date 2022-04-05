import React from "react";
import HomeVector from "../images/homeVector.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <h1>
          <span>Community</span>
          <br />
          Online Store
        </h1>
        <p className="home-overview">
          Buy and sell from a range of listed items in your community.
        </p>

        <a href="/listings">Listings</a>

        <img src={HomeVector} alt="" />
      </div>
      <h3>Ryan Bakker | 2022 | Yoobee Application Development Summative</h3>
    </>
  );
}

export default Home;
