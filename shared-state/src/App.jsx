import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import {
  ApolloProvider,
} from "@apollo/client";
import {client, mutateProfileInformation, getProfile} from './apollo';

import "./index.css";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <h1>My state app is running</h1>
    </ApolloProvider>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));

export default () => (
  <ApolloProvider client={client}>
    <TODO />
  </ApolloProvider>
);