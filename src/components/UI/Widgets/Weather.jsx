import classes from "./widgets.module.css";

const Weather = ({ greet }) => {
  return (
    <div className={classes.weather}>
      <p className={classes.weather_header}>
        <span className={classes.weather_icon}></span>
        {greet}
      </p>
      <p className={classes.weather_cal}>
        <span className={classes.weather_date}>14 Jan 2022</span>
        <span className={classes.divider}></span>
        <span className={classes.weather_time}>22:45:04</span>
      </p>
    </div>
  );
};

export default Weather;
