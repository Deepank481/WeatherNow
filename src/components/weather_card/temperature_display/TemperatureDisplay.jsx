import styles from "./TemperatureDisplay.module.css";
function TemperatureDisplay({ state }) {
  const { current, forecast } = state.data;
  return (
    state.isDataLoaded && (
      <div className={styles.temperatureDisplay}>
        <span className={styles.mainTemp}>{current.temp_c}°</span>
        <div className={styles.tempDetails}>
          <span className={styles.feelsLike}>
            Feels like {current.feelslike_c}°
          </span>
          <span className={styles.tempRange}>
            H: {forecast.forecastday[0].day.maxtemp_c}° L:{" "}
            {forecast.forecastday[0].day.mintemp_c}°
          </span>
        </div>
      </div>
    )
  );
}

export default TemperatureDisplay;
