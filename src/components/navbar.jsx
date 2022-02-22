import React, { Component } from "react";

//Stateless functional component
const NavBar = ({ totalCounters }) => {
  //dont need to call props.totalCounters many times
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Number of counters{" "}
          <span className="badge bg-pill bg-secondary">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
