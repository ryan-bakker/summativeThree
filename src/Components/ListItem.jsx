import React from "react";
import axios from "axios";
import { useRef } from "react";
import Modal from "react-modal";
import "../styles/_listitems.scss";
import { HiCheck } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

function ListItem() {
  const nameRef = useRef();
  const sellerRef = useRef();
  const priceRef = useRef();
  const thumbRef = useRef();
  const descriptionRef = useRef();
  //   const statusRef = useRef();
  const areaRef = useRef();
  const categoryRef = useRef();
  const conditionRef = useRef();
  const itemRef = useRef();
  const sizeRef = useRef();
  const collectingRef = useRef();

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
    console.log("Name:", nameRef.current.value);
    console.log("Price:", priceRef.current.value);
    console.log("Collecting:", collectingRef.current.value);
    let formdata = {
      name: nameRef.current.value,
      seller: sellerRef.current.value,
      price: priceRef.current.value,
      thumb: thumbRef.current.value,
      //   status: statusRef.current.value,
      area: areaRef.current.value,
      category: categoryRef.current.value,
      condition: conditionRef.current.value,
      item: itemRef.current.value,
      size: sizeRef.current.value,
      collecting: collectingRef.current.value,
      description: descriptionRef.current.value,
    };

    axios
      .post("//localhost:4000/api/create-product", formdata)
      .then((response) => {
        console.log(response);
        setIsOpen(true);
        console.log(response.statusText);
      });
  };
  return (
    <div className="list-item-container">
      <div className="title">
        <h1>List Your Item</h1>
      </div>

      <form onSubmit={onSubmit} className="list-form">
        <p>
          Seller{" "}
          <input
            type="text"
            placeholder="John Smith"
            ref={sellerRef}
            required
          />
        </p>
        <p>
          Location{" "}
          <input
            type="text"
            placeholder="Add your location..."
            ref={areaRef}
            required
          />
        </p>
        <p>
          Title{" "}
          <input
            type="text"
            placeholder="Add title..."
            ref={nameRef}
            required
          />
        </p>
        <p>
          Delivery{" "}
          <input
            type="text"
            placeholder="Add collection option..."
            ref={collectingRef}
            required
          />
        </p>
        <p>
          Price{" "}
          <input type="number" placeholder="Add price..." ref={priceRef} />
        </p>
        <p>
          Item
          <input
            type="text"
            placeholder="Add item name..."
            ref={itemRef}
            required
          />
        </p>
        <p>
          Category{" "}
          <input
            type="text"
            placeholder="Add category..."
            ref={categoryRef}
            required
          />
        </p>
        <p>
          Size
          <input type="text" placeholder="Add size..." ref={sizeRef} required />
        </p>
        <p>
          Condition{" "}
          <input
            type="text"
            placeholder="Add condition..."
            ref={conditionRef}
            required
          />
        </p>
        <p>
          Image{" "}
          <input type="text" placeholder="Add image name..." ref={thumbRef} />
        </p>
        <p>
          Description{" "}
          <textarea
            name="w3review"
            rows="4"
            cols="50"
            placeholder="Add item description..."
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
      >
        <div className="close">
          <IoIosClose size={40} color={"#6c6666"} onClick={closeModal} />
        </div>
        <div className="check-success">
          <HiCheck size={52} color={"#fe0000"} />
          <p>Success</p>
        </div>
      </Modal>
    </div>
  );
}

export default ListItem;
