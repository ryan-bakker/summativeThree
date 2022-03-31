import React from "react";
import { IoIosClose } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";
import "../styles/components.scss";
import "../styles/account.scss";

function UserAccount() {
  return (
    <div className="user-account-wrapper">
      <div className="user-info">
        <div className="user-info-top">
          <IoIosClose className="close" />
          <p>Log out</p>
        </div>

        <div className="user-info-middle">
          <div className="user-info-left">
            <HiUserCircle className="user-icon" />
            <p>Edit your profile</p>
          </div>

          <div className="user-info-right">
            <h2>Hi, username</h2>
            <div className="rating-section">
              <p className="rate">4.7</p>
              <div className="star">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarHalf />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="user-task">
        <li>
          <FaRegEdit className="task-icon"/>
          <p>Sell your items</p>
        </li>
        <li>
          <IoSettingsOutline  className="task-icon"/>
          <p>Manage your items</p>
        </li>
        <li>
          <MdOutlineFavoriteBorder  className="task-icon"/>
          <p>Wishlist</p>
        </li>
        <li>
          <FaCommentDots  className="task-icon"/>
          <p>Messages</p>
        </li>
      </ul>
    </div>
  );
}

export default UserAccount;
