import React, { useState, Suspense } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { CButton, CInput } from '@coreui/react'

const client = new ApolloClient({
  uri: "https://localhost:4000/",
  cache: new InMemoryCache(),
});

const query = gql`
  query MyTodoAppQuery {
    todos {
      text
    }
  }
`;

const giveMeMyTodos = () => client.readQuery({ query })?.todos;

const initializeState = async () => {
  const csrf = await import("state/csrf");
  const apollo = await import("state/apollo");
  console.log('my remote csrf token and profile:', apollo.getProfile(), csrf.getCSRFToken())
  return { csrf, apollo };
};

const TODO = () => {
  initializeState();
  const [todoCache, setTodoCache] = useState(giveMeMyTodos());
  const [todo, setTodo] = useState('');
  const [persist, setPersist] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const updateTodo = {
      text: todo
    }

    await client.writeQuery({
      query,
      data: {
        todos: [...(todoCache || []), updateTodo],
      },
    });
    setTodoCache(giveMeMyTodos());
    return;
  }

  return (
    <>
      {(todoCache || []).map(({ text }) => (
        <div>{text}</div>
      ))}
      <form onSubmit={onSubmit}>
        <div>
          <input onChange={(e) => setTodo(e.target.value)} />
        </div>
        <button type="submit">Submit Todo</button>
      </form>
      <br />
      {persist && <div>"My React State is Also Being Persisted"</div>}
      <button onClick={() => setPersist(!persist)}>React State</button>
    </>
  );
}

export default () => (
  <ApolloProvider client={client}>
    <TODO/>
  </ApolloProvider>
)