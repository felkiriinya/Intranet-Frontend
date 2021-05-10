import React, { Component } from "react";
import appicon from "../assets/images/app_icon.png";
import { Link } from "react-router-dom";
import $ from "jquery";
import jQuery from "jquery";
class Navbar extends Component {
  state = {};
 
  componentDidMount(){
     

jQuery(document).ready(function ($) {
  // Menu Trigger
  $("#menuToggle").on("click", function (event) {
    var windowWidth = $(window).width();
    if (windowWidth < 1010) {
      $("body").removeClass("open");
      if (windowWidth < 760) {
        $("#left-panel").slideToggle();
      } else {
        $("#left-panel").toggleClass("open-menu");
      }
    } else {
      $("body").toggleClass("open");
      $("#left-panel").removeClass("open-menu");
    }
  });

  $(".menu-item-has-children.dropdown").each(function () {
    $(this).on("click", function () {
      var $temp_text = $(this).children(".dropdown-toggle").html();
      $(this)
        .children(".sub-menu")
        .prepend('<li class="subtitle">' + $temp_text + "</li>");
    });
  });
});
  }
  render() {
    return (
      <div>
        <header id="header" className="header">
          <div className="top-left">
            <div className="navbar-header">
              <a className="navbar-brand" href="./">
                <img src={appicon} alt="Logo" height="40" />
              </a>
              <a className="navbar-brand hidden" href="./">
                <img src="images/logo2.png" alt="Logo" />
              </a>
              <a id="menuToggle" className="menutoggle">
                <i className="fa fa-bars"></i>
              </a>
            </div>
          </div>
          <div className="top-right">
            <div className="header-menu">
              <div className="header-left">
                <button className="search-trigger">
                  <i className="fa fa-search"></i>
                </button>
                <div className="form-inline">
                  <form className="search-form">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search ..."
                      aria-label="Search"
                    />
                    <button className="search-close" type="submit">
                      <i className="fa fa-close"></i>
                    </button>
                  </form>
                </div>
              </div>

              <div className="user-area dropdown">
                <a
                  href="#"
                  className="dropdown-toggle active"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="user-avatar rounded-circle"
                    src="https://colorlib.com/polygon/elaadmin/images/admin.jpg"
                    alt="User Avatar"
                  />
                </a>

                <div className=" dropdown-menu">
                  <a className="nav-link" href="./profile.html">
                    <i className="fa fa- user"></i>My Profile
                  </a>

                  <a className="nav-link" href="#">
                    <i className="fa fa- user"></i>Notifications{" "}
                    <span className="count">13</span>
                  </a>

                  <a className="nav-link" href="#">
                    <i className="fa fa -cog"></i>Settings
                  </a>

                  <a className="nav-link" href="#">
                    <i className="fa fa-power -off"></i>Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
