import { useReducer } from "react";
import { initialState, reducerFunction } from "../service/AppState";
import AppContainer from "./app_container/AppContainer";
import ScreenLoader from "./screen_loader/ScreenLoader";

function App() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <>
      {!state.isDataLoaded && !state.isNewDataDemanded && <ScreenLoader />}
      {state.isDataLoaded && state.isNewDataDemanded && <ScreenLoader />}
      <AppContainer state={state} dispatch={dispatch} />
    </>
  );
}

export default App;
