import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";

export default function Products() {
  const [mydata, setData] = useState([]);
  const [name, setName] = useState("ddd");
  const [description, setDescription] = useState("cccc");
  const [seller, setSeller] = useState("eee");
  const [price, setPrice] = useState("aaa");
  const [status, setStatus] = useState("jjj");
  const [thumb, setThumb] = useState("iii");
  const [area, setArea] = useState("iii");
  const [category, setCategory] = useState("iii");
  const [condition, setCondition] = useState("iii");
  const [item, setItem] = useState("iii");
  const [collection, setCollection] = useState("iii");
  const [size, setSize] = useState("iii");
  const [rate, setRate] = useState("iii");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function onBuy(id) {
    // TODO: add buy functionality
    console.log("buy");
  }

  const getSingle = (id) => {
    console.log(id);
    axios
      .get(`http://localhost:4000/api/view-product-by-id/${id}`)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setDescription(response.data.description);
        setSeller(response.data.seller);
        setPrice(response.data.price);
        setStatus(response.data.status);
        setThumb(response.data.thumb);
        setArea(response.data.area);
        setCategory(response.data.category);
        setItem(response.data.item);
        setCondition(response.data.condition);
        setCollection(response.data.collection);
        setSize(response.data.size);
        setRate(response.data.rate);
        setIsOpen(true);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:4000/api/view-products").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>New Items</h1>
      <div className="item-wrapper">
        <div className="card-container">
          {mydata.map((item, index) => {
            return (
              <div
                key={index}
                className="card shadow"
                onClick={() => getSingle(item._id)}
              >
                {(item.thumb && (
                  <img
                    className="item-thumbnail"
                    src={`${"./images/" + item.thumb}`}
                    alt="product-img"
                  />
                )) || (
                  <img
                    className="item-thumbnail"
                    src="./images/noimage.jpg"
                    alt="no-img"
                  />
                )}
                <div className="item-details">
                  <div>
                    <div className="item-area">{item.area}</div>
                    <div className="item-name">{item.name}</div>
                  </div>
                  <div className="price">
                    {(item.price && `$${item.price}`) || "Negotiation"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <button className="close-button" onClick={closeModal}>
          <IoClose size={20} />
        </button>
        {(thumb && (
          <img
            className="modal-thumbnail"
            src={`${"./images/" + thumb}`}
            alt="product-img"
          />
        )) || (
          <img
            className="modal-thumbnail"
            src="./images/noimage.jpg"
            alt="no-img"
          />
        )}
        <div className="modal-status">{status}</div>
        <div className="modal-name">{name}</div>
        <div className="modal-price">
          {" "}
          {(price && `$${price}`) || "Negotiation"}
        </div>

        <h3 className="modal-title">Details</h3>
        <hr />
        <div className="modal-details">
          {category && (
            <div className="modal-detail">
              <div className="details-label">Category</div>
              <div className="details-text">{category}</div>
            </div>
          )}
          {item && (
            <div className="modal-detail">
              <div className="details-label">Item</div>
              <div className="details-text">{item}</div>
            </div>
          )}
          {size && (
            <div className="modal-detail">
              <div className="details-label">Size</div>
              <div className="details-text">{size}</div>
            </div>
          )}
          {condition && (
            <div className="modal-detail">
              <div className="details-label">Condition</div>
              <div className="details-text">{condition}</div>
            </div>
          )}
          {collection && (
            <div className="modal-detail">
              <div className="details-label">Collection Options</div>
              <div className="details-text">{collection}</div>
            </div>
          )}
        </div>
        <h3 className="modal-title">Description</h3>
        <hr />
        <div className="modal-description">{description}</div>
        <h3 className="modal-title">Seller</h3>
        <hr />
        <div className="seller-details">
          <HiUserCircle size={72} color={"lightgray"} />
          <div className="seller-profile">
            <div className="modal-seller">{seller}</div>
            <div className="modal-seller-location">{area}</div>
            <div className="rating-section">
            <div className="rate">4.7</div>
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
        <div className="w-full">
          <button className="modal-buy-btn" onClick={onBuy}>
            Buy
          </button>
        </div>
      </Modal>
    </div>
  );
}
