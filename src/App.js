import React from "react";
import PeopleList from "./components/people/PeopleList";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <ReduxProvider store={store}>
      <PeopleList />
    </ReduxProvider>
  );
}

export default App;
