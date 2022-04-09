import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import Background from "../images/half-bg.png";
import { useRef } from "react";

// styling inside products scss file

export default function MyListings() {
  const yearRef = useRef();
  const priceRef = useRef();
  const thumbRef = useRef();
  const descriptionRef = useRef();
  const brandRef = useRef();
  const modelRef = useRef();
  const odometerRef = useRef();
  const engineRef = useRef();
  const fuelRef = useRef();
  const transmissionRef = useRef();
  const featuresRef = useRef();
  const userName = useRef();
  const [mydata, setData] = useState([]);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  // Modal.setAppElement(el);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    axios.get("http://localhost:4000/api/view-products").then((response) => {
      setData(response.data);
    });
  }, []);

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:4000/api/delete-product-by-id/${id}`)
      .then((response) => {
        //   user notification
        alert("item deleted");
      });
  };

  const changeCard = (id) => {
    console.log(id);
  };

  return (
    <>
      <img src={Background} className="page-background" />

      <div className="my-listings-container">
        <div className="title">
          <h1>List Your Car</h1>
        </div>
        <div className="item-wrapper">
          <div className="card-container">
            {mydata.map((item, index) => {
              return (
                <div key={index} className="card shadow">
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
                      <div className="item-title">
                        {item.year} {item.brand} {item.model}
                      </div>
                      <div className="item-detail">
                        {item.odometer}km &nbsp;|&nbsp; {item.engine}cc{" "}
                        &nbsp;|&nbsp; {item.fuel} &nbsp;|&nbsp;{" "}
                        {item.transmission}
                      </div>
                      <div className="item-price">
                        Asking price:{" "}
                        {(item.price && `$${item.price}`) || "Negotiation"}
                      </div>
                      <hr />
                      <div className="user-listing-btn">
                        <button className="user-btn-edit" onClick={openModal}>
                          Edit
                        </button>
                        <button
                          className="user-btn-delete"
                          onClick={() => deleteItem(item._id)}
                        >
                          Delete
                        </button>
                      </div>
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
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            },
            content: {
              position: "absolute",
              top: "20px",
              left: "50%",
              marginLeft: "-425px",
              bottom: "20px",
              border: "1px solid #4E69A5",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "10px",
              outline: "none",
              padding: "25px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              width: "850px",
            },
          }}
        >
          <img src={Background} className="modal-background" />

          <div className="modal-edit-listing">
            <h1>Edit Listing</h1>
            <h4>Add text to blocks you wish to replace:</h4>

            <form>
              <p className="form-year">
                Year:{" "}
                <input
                  type="text"
                  placeholder="year manufactured..."
                  ref={yearRef}
                />
              </p>
              <p>
                Brand:
                <input
                  type="text"
                  placeholder="vehicle brand..."
                  ref={brandRef}
                />
              </p>
              <p>
                Model:
                <input
                  type="text"
                  placeholder="vehicle model..."
                  ref={modelRef}
                />
              </p>
              <p>
                Price:
                <input
                  type="number"
                  placeholder="add price..."
                  ref={priceRef}
                />
              </p>
              <p>
                Odometer:
                <input
                  type="text"
                  placeholder="odometer at time of listing..."
                  ref={odometerRef}
                />
              </p>
              <p>
                Engine Size (cc):
                <input
                  type="text"
                  placeholder="engine size in cc..."
                  ref={engineRef}
                />
              </p>
              <p>
                Fuel Type:
                <input
                  type="text"
                  placeholder="vehicles petrol type..."
                  ref={fuelRef}
                />
              </p>
              <p>
                Vehicle Transmission:
                <input
                  type="text"
                  placeholder="add transmission type..."
                  ref={transmissionRef}
                />
              </p>

              <p className="form-row-lg">
                Image Name:
                <input
                  type="text"
                  placeholder="add image name..."
                  ref={thumbRef}
                />
              </p>
              <p className="form-row-lg">
                Features:
                <textarea
                  name="w3review"
                  rows="4"
                  cols="50"
                  placeholder="what makes your vehicle stand out..."
                  ref={featuresRef}
                />
              </p>
              <p className="form-row-lg">
                Description:
                <textarea
                  name="w3review"
                  rows="4"
                  cols="50"
                  placeholder="description of your vehicle..."
                  ref={descriptionRef}
                />
              </p>
              <div className="modal-edit-listing-btns">
                <button className="cancel-button" onClick={closeModal}>
                  Cancel
                </button>
                <button className="save-button" onClick={changeCard}>
                  Save
                </button>
              </div>
            </form>
          </div>

          {/* Modal Image Tile */}
        </Modal>

        <div className="spacing">a</div>
      </div>
    </>
  );
}
