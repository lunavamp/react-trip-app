import React from "react";
import "./AddTripBtn.css";

const AddTripBtn = ({ onClick }) => {
  return (
    <div className="add-trip-btn" onClick={onClick}>
      <img src="/img/plus-icon.svg" alt="plus icon" />
      <p>Add trip</p>
    </div>
  );
};

export default AddTripBtn;
