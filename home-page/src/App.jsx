import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from './home';
import Text from './Text';
import State from './State';

const initializeState = async () => {
  const csrf = await import("state/csrf");
  const apollo = await import("state/apollo");
  await apollo.mutateProfileInformation({firstName: 'Harry', lastName: 'Zec', favoriteColor: 'Red'})
}

const App = () => {
  initializeState()
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/text" element={<Text />}></Route>
          <Route exact path="/state" element={<State />}></Route>
        </Routes>
      </Router>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
