import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const Component = React.lazy(() => import("remoteapp/text"));
  const [displayApp, setDisplayApp] = useState(false);

  return (
    <>
      <h1>This Is My Home Page</h1>
      {displayApp && (
        <Suspense fallback="IM WAITING">
          <Component />
        </Suspense>
      )}
      <button
        onClick={() => {
          setDisplayApp(!displayApp);
        }}
      >
        TurnOn
      </button>
      <br />
      <Link to="/todo">Todo</Link>
      <br />
      <Link to="/state">State</Link>
    </>
  );
}

export default Home;