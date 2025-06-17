import styles from "./ScreenLoader.module.css";
function ScreenLoader() {
  return (
    <div className={styles.loadingScreen} id="loadingScreen">
      <div className={styles.loadingSpinner}>
        <div className={styles.spinner}></div>
        <p>Fetching weather data...</p>
      </div>
    </div>
  );
}

export default ScreenLoader;
