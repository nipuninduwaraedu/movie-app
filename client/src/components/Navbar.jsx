import React from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar">
      <h1 className="logo">Movie App</h1>
      <input
        type="text"
        placeholder="search movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />
      <div>
        {" "}
        <Link to="/watchlist">Watchlist</Link>
      </div>
    </nav>
  );
}

export default Navbar;
