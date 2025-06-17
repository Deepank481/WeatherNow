import styles from "./SearchSuggestion.module.css";
function SearchSuggestion() {
  return (
    <div className={styles.searchSuggestions} id="searchSuggestions">
      <div className={styles.suggestionItem}>New York, NY, USA</div>
      <div className={styles.suggestionItem}>London, UK</div>
      <div className={styles.suggestionItem}>Tokyo, Japan</div>
    </div>
  );
}

export default SearchSuggestion;
