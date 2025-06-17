import styles from "./RecentSearches.module.css";
function RecentSearches({ state, dispatch }) {
  return (
    <section className={styles.recentSearches} id="recentSearches">
      <h3>Recent Searches</h3>
      <div className={styles.recentItems}>
        {state.recentSearches.length > 0 &&
          state.recentSearches.map((rSearch, i) => (
            <span key={i} className={styles.recentItem}>
              {rSearch}{" "}
              <i
                className="fas fa-times"
                onClick={() =>
                  dispatch({ type: "remove-recent-search", payload: rSearch })
                }
              ></i>
            </span>
          ))}
      </div>
    </section>
  );
}

export default RecentSearches;
