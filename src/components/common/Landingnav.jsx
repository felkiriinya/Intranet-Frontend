import React from "react";
import logo from "../assets/images/app_icon.png";

const Landingnav = ({ keys, users ,logoutuser,resetUser}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ml-0 pr-0">
      <div className="navbar-brand text-white">
        <img src={logo} height="35" width="35" alt="Mawingu Networks" />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container">
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav  ">
            <div className="nav-item ">
              <div
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                {keys}
              </div>
            </div>
          </ul>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <div className="my-2 my-lg-0">
            <div className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle text-white"
                id="userAccount"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {/* <i className="fa fa-user" />{agents.agent_firstName} */}
                <i className="fa fa-user" />
                {" " + users}
              </div>
              <div className="dropdown-menu" aria-labelledby="userAccount">
                <div
                  className="dropdown-item"
                  // to="/logout"
                  name="Change Password"
                  onClick={logoutuser}
                  style={{ cursor: "pointer" }}
                >
                  Log Out
                </div>
                <div
                  className="dropdown-item"
                  // to="/resetPassword"
                  name="Change Password"
                  onClick={resetUser}
                  style={{ cursor: "pointer" }}
                >
                  Reset Password
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Landingnav;
