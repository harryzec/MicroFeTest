import React from 'react';
import { Link } from 'react-router-dom';

const Blank = () => {
  return (
    <>
      <h1>This is a Page Without Apollo</h1>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/text">Text</Link>
    </>
  );
}

export default Blank;