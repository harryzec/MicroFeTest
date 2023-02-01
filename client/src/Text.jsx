import React, { useState, Suspense } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { CButton } from '@coreui/react'

const client = new ApolloClient({
  uri: "https://localhost:4000/",
  cache: new InMemoryCache(),
});

const query = gql`
  query MyTodoAppQuery {
    text
  }
`;

const giveMeMyText = () => client.readQuery({ query })?.text;
const myNewTodo = "My Text Has Been Cached!!";

const TODO = () => {
  const [text, setText] = useState(giveMeMyText());
  const [persist, setPersist] = useState(false)

  const createTodo = async () => {
    await client.writeQuery({
      query,
        data: {
          text: myNewTodo,
        },
    })
    setText(giveMeMyText());
  };

  return (
    <>
      {text}
      {persist && "My React State is Also Being Persisted"}
      <CButton color="primary" onClick={createTodo} shape="rounded-pill">
        Add Text
      </CButton>
      <CButton
        color="secondary"
        onClick={() => setPersist(!persist)}
        shape="rounded-pill"
      >
        React State
      </CButton>
    </>
  );
}

export default () => (
  <ApolloProvider client={client}>
    <TODO/>
  </ApolloProvider>
)