import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from './home';
import Text from './Text';
import Blank from './Blank';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/text" element={<Text />}></Route>
          <Route exact path="/blank" element={<Blank />}></Route>
        </Routes>
      </Router>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
