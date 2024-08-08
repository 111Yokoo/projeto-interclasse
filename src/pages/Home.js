import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <Link to="/example">Go to Example Page</Link>
    </div>
  );
}

export default Home;
