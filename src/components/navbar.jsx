import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row">
      <Link
        className="flex-sm-fill text-sm-center nav-link "
        aria-current="page"
        to="#"
      >
        Vidly
      </Link>
      <NavLink className="flex-sm-fill text-sm-center nav-link" to="/movies">
        Movies
      </NavLink>
      <NavLink className="flex-sm-fill text-sm-center nav-link" to="/customers">
        Customers
      </NavLink>
      <NavLink className="flex-sm-fill text-sm-center nav-link" to="/rentals">
        Rentals
      </NavLink>
    </nav>
  );
};

export default NavBar;
