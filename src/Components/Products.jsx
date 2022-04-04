import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";

export default function Products() {
  const [thumb, setThumb] = useState("iii");
  const [area, setArea] = useState("iii");
  const [item, setItem] = useState("iii");

  const [mydata, setData] = useState([]);
  const [year, setYear] = useState("000");
  const [brand, setBrand] = useState("ddd");
  const [model, setModel] = useState("iii");
  const [description, setDescription] = useState("cccc");
  const [features, setFeatures] = useState("llll");
  const [seller, setSeller] = useState("eee");
  const [price, setPrice] = useState("aaa");
  const [status, setStatus] = useState("jjj");
  const [category, setCategory] = useState("iii");
  const [condition, setCondition] = useState("iii");
  const [odometer, setOdometer] = useState("iii");
  const [engine, setEngine] = useState("iii");
  const [fuel, setFuel] = useState("iii");
  const [transmission, setTransmission] = useState("iii");

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
        setYear(response.data.year);
        setBrand(response.data.brand);
        setModel(response.data.model);
        setDescription(response.data.description);
        setFeatures(response.data.features);
        setSeller(response.data.seller);
        setPrice(response.data.price);
        setStatus(response.data.status);
        setCategory(response.data.category);
        setItem(response.data.item);
        setCondition(response.data.condition);
        setOdometer(response.data.odometer);
        setEngine(response.data.engine);
        setFuel(response.data.fuel);
        setTransmission(response.data.transmission);
        setThumb(response.data.thumb);
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
                    <div className="item-brand">{item.brand}</div>
                    <div className="item-model">{item.model}</div>
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
        <div className="modal-brand">
          {year}&nbsp;{brand}&nbsp;{model}
        </div>
        <div className="modal-price">
          {" "}
          {(price && `$${price}`) || "Negotiation"}
        </div>

        <h3 className="modal-title">Details</h3>
        <div className="modal-details">
          <ul>
            <li>Condition: {condition}</li>
            <li>Odometer: {odometer}</li>
            <li>Engine Size: {engine}</li>
            <li>Petrol Type: {fuel}</li>
            <li>Transmission: {transmission}</li>
          </ul>
        </div>
        <hr />

        <h3 className="modal-title">Features</h3>
        <div className="modal-features">{features}</div>
        <hr />
        <div className="modal-details"></div>
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
