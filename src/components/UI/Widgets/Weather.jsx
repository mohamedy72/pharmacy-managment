import "./widgets.css";

const Weather = ({ greet }) => {
  return (
    <div className="weather">
      <p className="weather_header">
        <span className="weather_icon"></span>
        {greet}
      </p>
      <p className="weather_cal">
        <span className="weather_date">14 Jan 2022</span>
        <span className="divider"></span>
        <span className="weather_time">22:45:04</span>
      </p>
    </div>
  );
};

export default Weather;
