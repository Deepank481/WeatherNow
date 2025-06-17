import DetailItem from "./DetailItem";
import styles from "./WeatherDetails.module.css";

function WeatherDetails({ state }) {
  const { current, forecast } = state.data;
  return (
    <div className={styles.weatherDetails}>
      {state.isDataLoaded && (
        <DetailItem
          detailName={"Humidity"}
          detailValue={current.humidity + " %"}
          detailClass={"fas fa-tint"}
        />
      )}
      {state.isDataLoaded && (
        <DetailItem
          detailName={"Wind Speed"}
          detailValue={current.wind_kph + " km/h"}
          detailClass={"fas fa-wind"}
        />
      )}

      {state.isDataLoaded && (
        <DetailItem
          detailName={"Visibility"}
          detailValue={current.vis_km + " km"}
          detailClass={"fas fa-eye"}
        />
      )}

      {state.isDataLoaded && (
        <DetailItem
          detailName={"Pressure"}
          detailValue={current.pressure_mb + " mb"}
          detailClass={"fas fa-thermometer-half"}
        />
      )}
      {state.isDataLoaded && (
        <DetailItem
          detailName={"UV Index"}
          detailValue={current.uv}
          detailClass={"fas fa-sun"}
        />
      )}

      {state.isDataLoaded && (
        <DetailItem
          detailName={"Sunrise"}
          detailValue={forecast.forecastday[0].astro.sunrise}
          detailClass={"fas fa-sunrise"}
        />
      )}
    </div>
  );
}

export default WeatherDetails;
