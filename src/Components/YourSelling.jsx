import React from "react";
import { IoIosClose } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";
import { IoTrashSharp } from "react-icons/io5";
import "../styles/components.scss";
import "../styles/selling.scss";

function YourSelling() {
  return (
    <div className="your-selling-wrapper">
      <IoIosClose className="close" />
      <h1>Your selling</h1>

      <div className="item-container">

        <div className="image-container">
          <img src="" alt="" />
        </div>

        <div className="item-details">
          <h4></h4>

          <div className="item-info">
            <h3 className="price">$ </h3>
            <div><MdOutlineFavoriteBorder className="favorite" />(0)</div>
            <div><FaCommentDots className="comment"/>(0)</div>
          </div>

          <div className="edit-delete">
              <p>Edit the page</p>
              <IoTrashSharp className="trash"/>
          </div>

          <div className="withdraw-button">Withdraw a posting</div>

        </div>
      </div>
    </div>
  );
}

export default YourSelling;
