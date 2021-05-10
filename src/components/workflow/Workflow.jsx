import React, { Component } from "react";
import { user } from "../assets/images";
import { Navbar } from "../common";
import { CreateDepartment, CreateProject } from "./";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Navbar as Navtext } from "react-bootstrap";

import {
  fetchDepartment,
  projectsDepartment,
} from "../../actions/departmentActions";

class Workflow extends Component {
  state = {
    allDepartments: [],
    departmentId: "",
    projects: [],
    departmentName: "",
    departmentResponse: {},
    projectResponse: {},
  };

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    this.setState({
      departmentId: this.props.auth.authenticatedUser.departmentId,
    });

    this.props.fetchDepartment();
    this.props.projectsDepartment(
      this.props.auth.authenticatedUser.departmentId
    );
  }

  static getDerivedStateFromProps(props, state) {
    if (props.projects !== state.projects) {
      return {
        projects: props.projects,
      };
    }
    if (props.allDepartments !== state.allDepartments) {
      let name =
        props.allDepartments instanceof Array
          ? props.allDepartments.filter(
              (department) => state.departmentId === department.id
            )
          : null;
      let Name = name.map((Nm) => {
        return Nm.name;
      });
      return {
        allDepartments: props.allDepartments,
        departmentName: Name,
      };
    }
    if (props.departmentResponse !== state.departmentResponse) {
      return {
        allDepartments: props.allDepartments,
      };
    }

    if (props.projectResponse !== state.projectResponse) {
      return {
        allDepartments: props.allDepartments,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.departmentResponse !== prevProps.departmentResponse) {
      this.props.fetchDepartment();
    }
    if (this.props.projectResponse !== prevProps.projectResponse) {
      this.props.projectsDepartment(
        this.props.auth.authenticatedUser.departmentId
      );
    }
  }

  fetchProject = (id, name) => {
    this.props.projectsDepartment(id);
    this.setState({
      departmentName: name,
    });
  };

  redirectProject = (name, id) => {
    localStorage.setItem("projectname", name);
    localStorage.setItem("projectid", id);
    this.props.history.push("/project");
  };

  render() {
    const { allDepartments, projects, departmentName } = this.state;

    console.log(projects);

    const displayProjects =
      projects instanceof Array
        ? projects.map((project) => (
            <div
              className="col-3 mr-2 mt-5 bg-white shadow rounded d-flex align-items-center justify-content-center project-card link"
              style={{ cursor: "pointer" }}
              key={project.id}
              onClick={() => this.redirectProject(project.name, project.id)}
            >
              <h6 className="text-uppercase fw-bold"> {project.name}</h6>
            </div>
          ))
        : null;

    const displayDepartments =
      allDepartments instanceof Array
        ? allDepartments.map((department) => (
            <div
              className="mt-3 d-flex align-items-center justify-content-center rounded col-12 shadow-sm"
              style={{ cursor: "pointer" }}
              key={department.id}
              onClick={() => this.fetchProject(department.id, department.name)}
            >
              {department.name}
            </div>
          ))
        : null;
    return (
      <React.Fragment>
        <div className="side-nav col-md-2 shadow-sm bg-white ">
          <div className=" username d-flex align-items-center justify-content-center mt-3 py-5 flex-column">
            <img src={user} alt="" srcSet="" height="100" width="90" />
            <span className="mt-2">
              {this.props.auth.authenticatedUser.firstName}
            </span>
          </div>

          <div className="mt-2 department-card">
            <div className="d-flex justify-content-center ">
              <h6 className="text-muted fw-bold mr-3 "> Departments </h6>
              <i
                className="fa fa-plus-square btn-sm btn-primary  "
                data-toggle="modal"
                data-target="#CreateDepartment"
              />
            </div>
            <div className="ml-3 d-flex flex-column departments">
              {displayDepartments}
            </div>
          </div>
        </div>

        <div className="main mr-5">
          <Navbar
            to="/landing"
            heading={departmentName}
            user={
              <Navtext.Text>
                Signed in as:{" "}
                <a href="#login">
                  {this.props.auth.authenticatedUser.firstName}
                </a>
              </Navtext.Text>
            }
          />
          <div className="mt-3 ml-4">
            <button
              type="button"
              class="btn btn-success"
              data-toggle="modal"
              data-target="#CreateProject"
            >
              Add Project
            </button>
          </div>

          <div className="d-flex justify-content-between flex-wrap mt-2 ml-4">
            {displayProjects}
          </div>
          <CreateDepartment />
          <CreateProject allDepartments={allDepartments} />
        </div>
      </React.Fragment>
    );
  }
}

Workflow.propTypes = {
  fetchDepartment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  projectsDepartment: PropTypes.array.isRequired,
};

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
})(Workflow);
