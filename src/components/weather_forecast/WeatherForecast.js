import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";

const WeatherForecast = ({ selectedTrip }) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (!selectedTrip) return;
    const API_KEY = "";
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedTrip.city}/${selectedTrip.startDate}/${selectedTrip.endDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setForecast(data.days);
      })
      .catch((error) => {
        console.error("Error fetching weather data", error);
      });
  }, [selectedTrip]);

  function getDayOfWeek(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    const dateObj = new Date(year, month - 1, day);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[dateObj.getDay()];
  }

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
    <div className="weather-forecast">
      <h3>Week</h3>
      <div className="weather-forecast-container">
        {forecast.map((day) => (
          <div key={day.datetime}>
            <p className="forecast-weekday">{getDayOfWeek(day.datetime)}</p>
            <img src={getIcon(day.conditions)} alt="weather condition" />
            <p>
              {Math.round(day.tempmax)}°/{Math.round(day.tempmin)}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
