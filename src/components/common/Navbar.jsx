import React from "react";
import logo from "../assets/images/left-arrow.png";
import { Link } from "react-router-dom";

const Navbar = ({ heading, user, details, to }) => {
  return (
    <nav className="navbar navbar-dark bg-primary d-flex justify-content-between">
      <Link to={to} className="navbar-brand mr-5">
        <img src={logo} height="25" width="25" alt="Mawingu Networks" />
      </Link>
      <span className="navbar-brand mb-0">{heading}</span>
      <div className="ml-5">{user}</div>

     {details}
    </nav>
  );
};

export default Navbar;
