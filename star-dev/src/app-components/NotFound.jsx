import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="home">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <br/>
      <Link className={"error-page"} to="/">
        Home
      </Link>
    </div>
  );
}

export default NotFound;
