import React from "react";
import HomeVector from "../images/homeVector.png";
import Background from "../images/home-bg.png";

function Home() {
  return (
    <>
      <img src={Background} className="page-background" />
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
