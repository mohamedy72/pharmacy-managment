import "./widgets.css";

import { useEffect, useState } from "react";

import { currentDate, currentTime } from "@Utils/currentDataAndTime";

import { BrightnessHighFill, MoonFill } from "react-bootstrap-icons";

const Weather = ({ greet }) => {
  const [time, setTime] = useState(() => currentTime());
  const hoursOfTheTime = +time.split("")[0];
  const amOrPm = time.split(" ")[1];

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
          {time.includes("PM") ? (
            <BrightnessHighFill fill="#FAC05E" />
          ) : (
            <MoonFill />
          )}
        </span>
        <span>
          <RenderCorrectPartOfADay hours={hoursOfTheTime} timePeriod={amOrPm} />
        </span>
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

const RenderCorrectPartOfADay = ({ hours, timePeriod }) => {
  if (timePeriod === "AM" && hours >= 5 && hours <= 12) {
    return "Good Morning";
  } else if (timePeriod === "PM" && hours <= 12 && hours <= 6) {
    return "Good Afternoon";
  } else if (timePeriod === "PM" && hours > 6 && hours <= 9) {
    return "Good Evening";
  } else if (timePeriod === "AM" || timePeriod === "PM") {
    if (hours > 9 || (hours < 9 && hours <= 5)) {
      return "Good Night";
    }
  }
};
