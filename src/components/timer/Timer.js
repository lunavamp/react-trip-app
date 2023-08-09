import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = ({ selectedTrip }) => {
  const countDownDate = new Date(selectedTrip.startDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return (
    <div className="timer-container">
      <div>
        <p className="timer-numbers">{days}</p>
        <p className="timer-text">days</p>
      </div>
      <div>
        <p className="timer-numbers">{hours}</p>
        <p className="timer-text">hours</p>
      </div>
      <div>
        <p className="timer-numbers">{minutes}</p>
        <p className="timer-text">minutes</p>
      </div>
      <div>
        <p className="timer-numbers">{seconds}</p>
        <p className="timer-text">seconds</p>
      </div>
    </div>
  );
};

export default Timer;
