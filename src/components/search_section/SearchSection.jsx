import { useState } from "react";
import SearchInputWrapper from "./search_input_wrapper/SearchInputWrapper";
import SearchSuggestion from "./search_suggestion/SearchSuggestion";
import styles from "./SearchSection.module.css";

function SearchSection({ dispatch }) {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <section className={styles.searchSection}>
      <div className={styles.searchContainer}>
        <SearchInputWrapper
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          dispatch={dispatch}
        />
        <SearchSuggestion />
      </div>
    </section>
  );
}

export default SearchSection;
