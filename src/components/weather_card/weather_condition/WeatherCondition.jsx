import styles from "./WeatherCondition.module.css";
function WeatherCondition({ state }) {
  const { current } = state.data;
  return (
    state.isDataLoaded && (
      <div className={styles.weatherCondition}>
        <h3>{current.condition.text}</h3>
        <p>Clear sky with bright sunshine</p>
      </div>
    )
  );
}

export default WeatherCondition;
