import AppHeader from "../app_header/AppHeader";
import RecentSearches from "../recent_searches/RecentSearches";
import SearchSection from "../search_section/SearchSection";
import WeatherCard from "../weather_card/WeatherCard";
import {
  fetchWeatherDetails,
  getYourCoordinates,
} from "../../service/FetchWeatherDetails";

function AppContainer({ state, dispatch }) {
  async function fetchDefaultWeather() {
    let res = null;
    if (!state.isDataLoaded && !state.isNewDataDemanded) {
      const coordinates = await getYourCoordinates();
      if (coordinates != null && coordinates != undefined) {
        const [latitude, longitude] = coordinates;
        res = await fetchWeatherDetails(`${latitude},${longitude}`, 7);
      } else {
        res = await fetchWeatherDetails(`New Delhi`, 7);
      }
      const data = await res.json();

      dispatch({
        type: "add-data",
        payload: data,
        rSearch: data.location.name,
      });
    }
  }

  fetchDefaultWeather();

  return (
    <div className="app-container" id="appContainer">
      <AppHeader />
      <SearchSection dispatch={dispatch} />
      <RecentSearches state={state} dispatch={dispatch} />
      <WeatherCard state={state} />
    </div>
  );
}

export default AppContainer;
