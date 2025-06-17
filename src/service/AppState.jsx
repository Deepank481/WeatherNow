export const initialState = {
  data: {},
  isDataLoaded: false,
  isNewDataDemanded: false,
  recentSearches: [],
};

export function reducerFunction(state, action) {
  const { type, payload, rSearch } = action;
  switch (type) {
    case "add-data":
      state = {
        ...state,
        data: payload,
        isDataLoaded: true,
        isNewDataDemanded: false,
        recentSearches:
          rSearch !== "" && rSearch !== null
            ? [...state.recentSearches, rSearch]
            : state.recentSearches,
      };
      break;
    case "reset":
      state = { ...initialState };
      break;
    case "new-data-fetch":
      state = { ...state, isNewDataDemanded: true };
      break;
    case "remove-recent-search":
      state = {
        ...state,
        recentSearches: [
          ...state.recentSearches.filter((recSearch) => recSearch !== payload),
        ],
      };
  }
  return state;
}
