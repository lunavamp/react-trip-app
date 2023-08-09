import React, { useState, useMemo } from "react";
import Header from "../header/Header";
import WeatherCard from "../weather_card/WeatherCard";
import "./App.css";
import TripsList from "../trips/trips_list/TripsList";
import SearchBar from "../search_bar/SearchBar";
import WeatherForecast from "../weather_forecast/WeatherForecast";
import Modal from "../modal/Modal";

const initialData = [
  {
    id: 1,
    city: "Berlin",
    startDate: "2023-08-14",
    endDate: "2023-08-21",
    image: "berlin.png",
    alt: "Berlin",
  },
  {
    id: 2,
    city: "Tokyo",
    startDate: "2023-08-17",
    endDate: "2023-08-23",
    image: "tokyo.png",
    alt: "Tokyo",
  },
  {
    id: 3,
    city: "Barcelona",
    startDate: "2023-08-16",
    endDate: "2023-08-26",
    image: "barcelona.png",
    alt: "Barcelona",
  },
];

function App() {
  const [data, setData] = useState(initialData);
  const [searchTrip, setSearchTrip] = useState("");
  const [selectedTrip, setSelectedTrip] = useState(initialData[0]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleTripSelect = (data) => {
    setSelectedTrip(data);
  };

  const handleSearchChange = (value) => {
    setSearchTrip(value);
  };

  const filteredData = useMemo(() => {
    return data.filter((trip) =>
      trip.city.toLowerCase().includes(searchTrip.toLowerCase())
    );
  }, [data, searchTrip]);

  const handleSortData = () => {
    const sortByDate = [...filteredData].sort(
      (a, b) => new Date(a.startDate) - new Date(b.startDate)
    );
    setData(sortByDate);
  };

  return (
    <div className="App">
      <div className="trips-container">
        <Header />
        <SearchBar value={searchTrip} onChange={handleSearchChange} />
        <p onClick={handleSortData} className="sort-by-date">
          Sort by date
        </p>
        <TripsList
          data={filteredData}
          onSelect={handleTripSelect}
          onClick={handleModalOpen}
        />
        <WeatherForecast selectedTrip={selectedTrip} />
        <Modal
          isOpen={modalOpen}
          setModalOpen={setModalOpen}
          data={data}
          setData={setData}
        />
      </div>
      <div className="weather-container">
        <WeatherCard selectedTrip={selectedTrip} />
      </div>
    </div>
  );
}

export default App;
