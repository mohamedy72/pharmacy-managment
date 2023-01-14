import "./widgets.css";

import { useEffect, useState } from "react";

import { currentDate, currentTime } from "@Utils/currentDataAndTime";

import { BrightnessHighFill, MoonFill } from "react-bootstrap-icons";

const Weather = ({ greet }) => {
  const [time, setTime] = useState(() => currentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="weather">
      <p className="weather_header">
        <span className="weather_icon">
          {time.includes("PM") ? <BrightnessHighFill /> : <MoonFill />}
        </span>
        {greet}
      </p>
      <div className="weather_cal">
        <p className="weather_date">
          {currentDate().month < 10 ? (
            <span>0{currentDate().month}</span>
          ) : (
            <span>{currentDate().month}</span>
          )}
          /
          {currentDate().day < 10 ? (
            <span>0{currentDate().day}</span>
          ) : (
            <span>{currentDate().month}</span>
          )}
          / <span>{currentDate().year}</span>
        </p>
        <p className="weather_time">{time}</p>
      </div>
    </div>
  );
};

export default Weather;
