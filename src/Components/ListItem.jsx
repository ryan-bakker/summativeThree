import React from "react";
import axios from "axios";
import { useRef } from "react";
import Modal from "react-modal";
import "../styles/_listitems.scss";
import { HiCheck } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

function ListItem() {
  const yearRef = useRef();
  const priceRef = useRef();
  const thumbRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const conditionRef = useRef();
  const brandRef = useRef();
  const modelRef = useRef();
  const odometerRef = useRef();
  const engineRef = useRef();
  const fuelRef = useRef();
  const transmissionRef = useRef();
  const featuresRef = useRef();

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
    console.log(conditionRef.current.value);

    let formdata = {
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
      condition: conditionRef.current.value,
    };

    axios
      .post("//localhost:4000/api/create-product", formdata)
      .then((response) => {
        console.log(response);
        setIsOpen(true);
      });
  };
  return (
    <div className="list-item-container">
      <div className="title">
        <h1>List Your Car</h1>
      </div>

      <form onSubmit={onSubmit} className="list-form">
        <p>
          Year
          <input type="text" placeholder="year manufactured..." ref={yearRef} />
        </p>
        <p>
          Brand
          <input type="text" placeholder="vehicle brand..." ref={brandRef} />
        </p>
        <p>
          Model
          <input type="text" placeholder="vehicle model..." ref={modelRef} />
        </p>
        <p>
          Vehicle Condition
          <input
            type="text"
            placeholder="condition of your vehicle..."
            ref={conditionRef}
          />
        </p>
        <p>
          Price
          <input type="number" placeholder="add price..." ref={priceRef} />
        </p>
        <p>
          Odometer
          <input
            type="text"
            placeholder="odometer displayed at time of listing..."
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
        <p>
          Fuel Type
          <input
            type="text"
            placeholder="petrol you currently use for this vehicle..."
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
        <p>
          Image Name
          <input type="text" placeholder="add image name..." ref={thumbRef} />
        </p>
        <p>
          Features
          <textarea
            name="w3review"
            rows="4"
            cols="50"
            placeholder="what makes your vehicle stand out..."
            ref={featuresRef}
          />
        </p>
        <p>
          Description
          <textarea
            name="w3review"
            rows="4"
            cols="50"
            placeholder="description of your vehicle..."
            ref={descriptionRef}
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
      >
        <div className="close">
          <IoIosClose size={40} color={"#6c6666"} onClick={closeModal} />
        </div>
        <div className="check-success">
          <HiCheck size={52} color={"#fe0000"} />
          <h4>Success</h4>
          <p>Your listing has posted.</p>
        </div>
      </Modal>
    </div>
  );
}

export default ListItem;
