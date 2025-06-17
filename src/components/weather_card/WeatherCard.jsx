import TemperatureDisplay from "./temperature_display/TemperatureDisplay";
import WeatherCondition from "./weather_condition/WeatherCondition";
import WeatherDetails from "./weather_details/WeatherDetails";
import WeatherHeader from "./weather_header/WeatherHeader";
import styles from "./WeatherCard.module.css";

function WeatherCard({ state }) {
  return (
    <section className={styles.currentWeather} id="currentWeather">
      <div className={styles.weatherCard}>
        <WeatherHeader state={state} />
        <TemperatureDisplay state={state} />
        <WeatherCondition state={state} />

        <WeatherDetails state={state} />
      </div>
    </section>
  );
}

export default WeatherCard;
