import styles from "./AppHeader.module.css";

function AppHeader() {
  return (
    <header className={styles.appHeader}>
      <div className={styles.headerContent}>
        <h1>
          <i className="fas fa-cloud-sun"></i> WeatherNow
        </h1>
        <div className={styles.headerControls}></div>
      </div>
    </header>
  );
}

export default AppHeader;
