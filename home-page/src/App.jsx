import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  ApolloProvider
} from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from './home'
import Text from './Text'

const App = () => {
  return (
    <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/text" element={<Text />}></Route>
          </Routes>
        </Router>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
