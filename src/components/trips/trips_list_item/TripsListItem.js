import React from "react";
import "./TripsListItem.css";

const TripsListItem = ({ data, onSelect }) => {
  const { city, startDate, endDate, image, alt } = data;

  const formatStartDate = (startDate) => {
    const parts = startDate.split("-");
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    return `${day}.${month}.${year}`;
  };

  const formatEndDate = (endDate) => {
    const parts = endDate.split("-");
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    return `${day}.${month}.${year}`;
  };

  const formatedStartDate = formatStartDate(startDate);
  const formatedEndDate = formatEndDate(endDate);

  return (
    <div className="trip-item" onClick={() => onSelect(data)}>
      <img src={`/img/${image}`} alt={alt} />
      <div>
        <h3>{city}</h3>
        <p>
          {formatedStartDate} - {formatedEndDate}
        </p>
      </div>
    </div>
  );
};

export default TripsListItem;
