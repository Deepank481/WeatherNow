import { epocToDateFormat } from "../../../util/WeatherNowUtil";
import styles from "./WeatherHeader.module.css";
function WeatherHeader({ state }) {
  const { location, current } = state.data;
  return (
    state.isDataLoaded && (
      <div className={styles.weatherHeader}>
        <div className={styles.locationInfo}>
          <h2 className="city-name">{`${
            location === null || location === undefined ? "" : location.name
          }, ${
            location === null || location === undefined ? "" : location.region
          }`}</h2>
          <p className={styles.country}>
            {location === null || location === undefined
              ? ""
              : location.country}
          </p>
          <p className={styles.dateTime}>
            {
              epocToDateFormat(
                location === null || location === undefined
                  ? 0
                  : location.localtime
              ).formattedDate
            }
            •{" "}
            {
              epocToDateFormat(
                location === null || location === undefined
                  ? 0
                  : location.localtime
              ).formattedTime
            }
          </p>
        </div>
        <div className="weather-icon">
          {/* <i className={"fas fa-sun " + styles.weatherMainIcon}></i> */}
          <img
            src={`https:${current.condition.icon}`}
            alt={current.condition.text}
            className={styles.weatherMainIcon}
          />
        </div>
      </div>
    )
  );
}

export default WeatherHeader;
