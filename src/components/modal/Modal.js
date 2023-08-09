import React, { useState, useEffect } from "react";
import options from "./options";
import "./Modal.css";

const Modal = ({ data, setData, isOpen, setModalOpen }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [newCity, setNewCity] = useState("");
  const [newStartDate, setNewStartDate] = useState("");
  const [newEndDate, setNewEndDate] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("tripsData"));
    setData(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("tripsData", JSON.stringify(data));
  }, [data]);

  if (!isOpen) {
    return null;
  }

  const handleModalClose = () => {
    setModalOpen(false);
    setNewCity("");
    setNewStartDate("");
    setNewEndDate("");
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setNewCity(e.target.value);
  };

  const handleAddData = () => {
    const newId = data.length + 1;
    const newData = {
      id: newId,
      city: newCity,
      startDate: newStartDate,
      endDate: newEndDate,
      image: `${newCity.toLowerCase()}.png`,
      alt: newCity,
    };

    const updatedData = [...data, newData];
    setData(updatedData);
    handleModalClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <h2>Create trip</h2>
          <button
            onClick={handleModalClose}
            className="close-btn"
            type="button"
          >
            X
          </button>
        </div>
        <div>
          <form>
            <label htmlFor="select-city">City</label>
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              id="select-city"
            >
              <option value="">Please select a city</option>
              {options.map((option) => (
                <option key={option.id} value={option.city}>
                  <p>{option.city}</p>
                  <img src={option.image} alt={option.city} />
                </option>
              ))}
            </select>
            <label htmlFor="start-date">Start date</label>
            <input
              type="date"
              id="start-date"
              value={newStartDate}
              onChange={(e) => setNewStartDate(e.target.value)}
            />
            <label htmlFor="end-date">End date</label>
            <input
              type="date"
              id="end-date"
              value={newEndDate}
              onChange={(e) => setNewEndDate(e.target.value)}
            />
          </form>
        </div>
        <div className="modal-btns-container">
          <button
            onClick={handleModalClose}
            className="cancel-btn"
            type="button"
          >
            Cancel
          </button>
          <button onClick={handleAddData} className="save-btn" type="button">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
