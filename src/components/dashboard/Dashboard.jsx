import React, { Component } from "react";
import appicon from "../assets/images/app_icon.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Departments from "./Departments";
import AddDepartment from "./AddDepartment";
import {
  fetchDepartment,
  projectsDepartment,
} from "../../actions/departmentActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Dashboard extends Component {
  state = {
    allDepartments: [],
    departmentName: "",
    departmentId: "",
    departmentResponse: {},
  };

  componentDidMount() {
    this.props.fetchDepartment();
  }
  static getDerivedStateFromProps(props, state) {
    if (props.allDepartments !== state.allDepartments) {
      return {
        allDepartments: props.allDepartments,
      };
    }
    return null;
  }
  render() {
    const { departmentName, allDepartments } = this.state;

    console.log(allDepartments);
    let displayDepartments =
      allDepartments instanceof Array
        ? allDepartments.map((department) => (
            <li
              className="menu-item-has-children dropdown
            "
              key={department.id}
            >
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <i className="menu-icon fa fa-glass"></i>
                {department.name}
              </a>
              <ul className="sub-menu children dropdown-menu">
                {" "}
                <li>
                  <i className="fa fa-users"></i>
                  <Link to="/staff">Members</Link>
                </li>
                <li>
                  <i className="fa fa-id-badge"></i>
                  <Link to="/project">Projects</Link>
                </li>
                <li>
                  <i className="fa fa-tasks"></i>
                  <Link to="/tasks">Tasks</Link>
                </li>
                <li>
                  <i className="fa fa-calendar"></i>
                  <a href="./events.html">Events</a>
                </li>
                <li>
                  <i className="fa fa-newspaper-o"></i>
                  <a href="">News Box</a>
                </li>
              </ul>
            </li>
          ))
        : null;
    return (
      <div>
        <aside id="left-panel" className="left-panel">
          <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="index.html">
                    <i className="menu-icon fa fa-laptop"></i>Dashboard{" "}
                  </a>
                </li>
                <li className="menu-title">Departments</li>
                {displayDepartments}
                <li
                  class="active"
                  data-toggle="modal"
                  data-target="#addDepartment"
                >
                  <Link to="/createdepartment">
                    <i class="menu-icon fa fa-pen"></i>
                    Add a Department
                    
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        <div id="right-panel" className="right-panel">
          <Navbar />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  allDepartments: state.department.allDepartments,
  projects: state.department.allProjects,
  departmentResponse: state.department.departmentResponse,
  projectResponse: state.project.projectResponse,
});

export default connect(mapStateToProps, {
  fetchDepartment,
  projectsDepartment,
}) (Dashboard);
