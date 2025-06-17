import { useEffect, useRef } from "react";
import {
  fetchWeatherDetails,
  getYourCoordinates,
} from "../../../service/FetchWeatherDetails";
import styles from "./SearchInputWrapper.module.css";
function SearchInputWrapper({ searchQuery, setSearchQuery, dispatch }) {
  const searchInput = useRef(null);

  useEffect(
    function () {
      const handleKeyUp = (e) => {
        if (
          e.key === "Enter" &&
          document.activeElement === searchInput.current
        ) {
          handleFetchWeatherData();
        }
      };
      document.addEventListener("keyup", handleKeyUp);
      return () => document.removeEventListener("keyup", handleKeyUp);
    },
    [handleFetchWeatherData]
  );

  async function handleFetchWeatherData() {
    let coord, res;
    dispatch({ type: "new-data-fetch" });
    if (
      searchQuery === "" ||
      searchQuery === null ||
      searchQuery === undefined
    ) {
      coord = await getYourCoordinates();
      if (coord !== null || coord !== undefined) {
        const [lat, longi] = coord;
        res = await fetchWeatherDetails(`${lat},${longi}`, 7);
      } else {
        es = await fetchWeatherDetails(`New Delhi`, 7);
      }
    } else {
      res = await fetchWeatherDetails(searchQuery, 7);
    }
    const data = await res.json();
    dispatch({ type: "add-data", payload: data, rSearch: searchQuery });
  }
  return (
    <div className={styles.searchInputWrapper}>
      <i className={"fas fa-search " + styles.searchIcon}></i>
      <input
        ref={searchInput}
        type="text"
        className={styles.searchInput}
        id="searchInput"
        placeholder="Search for a city..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(() => e.target.value)}
      />
      <button
        className={styles.locationBtn}
        id="locationBtn"
        title="Use current location"
        onClick={handleFetchWeatherData}
      >
        <i className="fas fa-location-arrow"></i>
      </button>
    </div>
  );
}

export default SearchInputWrapper;
