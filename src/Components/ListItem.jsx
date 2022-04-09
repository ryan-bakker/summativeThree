import React from "react";
import axios from "axios";
import { useRef } from "react";
import Modal from "react-modal";
import "../styles/_listitems.scss";
import { HiCheck } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import Background from "../images/half-bg.png";

function ListItem() {
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

  const [modalIsOpen, setIsOpen] = React.useState(false);
  // Modal.setAppElement(el);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(userName.current.value);
    console.log(yearRef.current.value);
    console.log(brandRef.current.value);
    console.log(modelRef.current.value);
    console.log(priceRef.current.value);
    console.log(odometerRef.current.value);
    console.log(engineRef.current.value);
    console.log(fuelRef.current.value);
    console.log(transmissionRef.current.value);
    console.log(featuresRef.current.value);
    console.log(descriptionRef.current.value);
    console.log(thumbRef.current.value);

    let formdata = {
      user: userName.current.value,
      year: yearRef.current.value,
      brand: brandRef.current.value,
      model: modelRef.current.value,
      price: priceRef.current.value,
      odometer: odometerRef.current.value,
      engine: engineRef.current.value,
      fuel: fuelRef.current.value,
      transmission: transmissionRef.current.value,
      features: featuresRef.current.value,
      description: descriptionRef.current.value,
      thumb: thumbRef.current.value,
    };

    axios
      .post("//localhost:4000/api/create-product", formdata)
      .then((response) => {
        console.log(response);
        setIsOpen(true);
      });
  };

  return (
    <>
      <img src={Background} className="page-background" />
      <div className="list-item-container">
        <div className="title">
          <h1>List Your Car</h1>
        </div>

        <form onSubmit={onSubmit} className="list-form">
          <p>
            Username
            <input
              type="text"
              placeholder="john@email.com etc"
              ref={userName}
              required
            />
          </p>
          <div className="form-row-one">
            <p>
              Year
              <input
                type="text"
                placeholder="year manufactured..."
                ref={yearRef}
              />
            </p>
            <p>
              Brand
              <input
                type="text"
                placeholder="vehicle brand..."
                ref={brandRef}
              />
            </p>
          </div>
          <div className="form-row-two">
            <p>
              Model
              <input
                type="text"
                placeholder="vehicle model..."
                ref={modelRef}
                required
              />
            </p>
            <p>
              Price
              <input type="number" placeholder="add price..." ref={priceRef} />
            </p>
          </div>
          <div className="form-row-three">
            <p>
              Odometer
              <input
                type="text"
                placeholder="odometer at time of listing..."
                ref={odometerRef}
              />
            </p>
            <p>
              Engine Size
              <input
                type="text"
                placeholder="engine size in cc..."
                ref={engineRef}
              />
            </p>
          </div>
          <div className="form-row-four">
            <p>
              Fuel Type
              <input
                type="text"
                placeholder="vehicles petrol type..."
                ref={fuelRef}
              />
            </p>
            <p>
              Vehicle Transmission
              <input
                type="text"
                placeholder="add transmission type..."
                ref={transmissionRef}
              />
            </p>
          </div>

          <p className="form-row-lg">
            Image Name
            <input type="text" placeholder="add image name..." ref={thumbRef} />
          </p>
          <p className="form-row-lg">
            Features
            <textarea
              name="w3review"
              rows="4"
              cols="50"
              placeholder="what makes your vehicle stand out..."
              ref={featuresRef}
            />
          </p>
          <p className="form-row-lg">
            Description
            <textarea
              name="w3review"
              rows="4"
              cols="50"
              placeholder="description of your vehicle..."
              ref={descriptionRef}
              required
            />
          </p>
          <div className="post-button">
            <button type="submit">Post</button>
          </div>
        </form>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          // className="modal-success"
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
              top: "250px",
              left: "50%",
              marginLeft: "-150px",
              bottom: "250px",
              border: "1px solid #4E69A5",
              background: "#fff",
              overflow: "hidden",
              WebkitOverflowScrolling: "touch",
              borderRadius: "10px",
              outline: "none",
              padding: "25px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              width: "300px",
              display: "flex",
            },
          }}
        >
          <div className="close">
            <IoIosClose size={40} color={"#6c6666"} onClick={closeModal} />
          </div>
          <div className="check-success">
            <HiCheck size={65} color={"#FFB82F"} />
            <h4>Success</h4>
            <p>Your listing has posted</p>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ListItem;
