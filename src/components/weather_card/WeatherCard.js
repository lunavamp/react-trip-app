import React, { useState, useEffect } from "react";
import "./WeatherCard.css";
import Timer from "../timer/Timer";

const WeatherCard = ({ selectedTrip }) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    if (!selectedTrip) return;
    const API_KEY = "";
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedTrip.city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data.days[0]);
      })
      .catch((error) => {
        console.error("Error fetching weather data", error);
      });
  }, [selectedTrip]);

  const getIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return "/img/weather-icons/sunny.png";
      case "Partially cloudy":
        return "/img/weather-icons/sunny-with-cloud.png";
      case "Moderate Rain":
        return "/img/weather-icons/sunny-rain.png";
      case "Light Rain":
        return "/img/weather-icons/sunny-rain.png";
      case "Cloudy":
        return "/img/weather-icons/cloudy.png";
      default:
        return "/img/weather-icons/cloudy.png";
    }
  };

  return (
    <div className="weather-card">
      <div className="weather-card-top">
        <div className="current-weather-container">
          <div>
            <img
              src={getIcon(weatherData.conditions)}
              alt="weather condition"
            />
          </div>
          <div>
            <h2 className="weekday">
              {new Date().toLocaleString("en-US", { weekday: "long" })}
            </h2>
            <div className="weather-condition-container">
              <p className="weather-card-temp">
                {Math.round(weatherData.temp)}
                <sup>°C</sup>
              </p>
            </div>
            <p className="weather-card-city">{selectedTrip.city}</p>
          </div>
        </div>
        <div className="weather-card-timer">
          <Timer selectedTrip={selectedTrip} />
        </div>
      </div>
      <div className="bg-images">
        <img src="/img/penguin.png" alt="penguin icon" />
        <img src="/img/cloud.svg" alt="cloud" />
        <img src="/img/cloud.svg" alt="cloud" />
        <img src="/img/cloud.svg" alt="cloud" />
        <img src="/img/cloud.svg" alt="cloud" />
      </div>
    </div>
  );
};

export default WeatherCard;
