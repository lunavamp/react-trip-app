import React from "react";
import TripsListItem from "../trips_list_item/TripsListItem";
import "./TripsList.css";
import AddTripBtn from "../add_trip_btn/AddTripBtn";

const TripsList = ({ data, onSelect, onClick }) => {
  const elements = data.map((item) => (
    <TripsListItem key={item.id} data={item} onSelect={onSelect} />
  ));

  return (
    <div className="trips-list">
      {elements}
      <AddTripBtn onClick={onClick} />
    </div>
  );
};

export default TripsList;
