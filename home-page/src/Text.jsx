import React, { Suspense } from "react";
import { Link } from "react-router-dom";


const Text = () => {
  const Component = React.lazy(() => import("remoteapp/text"));

  return (
    <>
      <h1>This is My Component Page</h1>
      <Suspense fallback="IM WAITING">
        <Component />
      </Suspense>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/blank">Blank</Link>
    </>
  );
};

export default Text;
