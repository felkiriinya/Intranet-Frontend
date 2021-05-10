import React, { Component } from 'react'
import Dashboard from "../dashboard/Dashboard";
import {connect} from "react-redux";
import {projectsDepartment} from "../../actions/departmentActions"
class Projects extends Component {
  state = {
    allProjects: [],
    departmentId: 1,
  };
  componentDidMount() {
    this.props.projectsDepartment(this.state.departmentId);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.allProjects !== state.allProjects) {
      return {
        allProjects: props.allProjects,
      };
    }

    return null;
  }
  render() {
    const {allProjects} = this.state;
    console.log(allProjects)
    let displayDepartmentsProjects =
      allProjects instanceof Array
        ? allProjects.map((project) => (
            <div className="col-lg-6">
              <div className="card ">
                <div className="card-header">
                  <h4>{project.name}</h4>
                </div>
                <div className="card-body">
                  <div className="custom-tab">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          className="nav-item nav-link active"
                          id="custom-nav-home-tab"
                          data-toggle="tab"
                          href="#custom-nav-home"
                          role="tab"
                          aria-controls="custom-nav-home"
                          aria-selected="true"
                        >
                          Members
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="custom-nav-profile-tab"
                          data-toggle="tab"
                          href="#custom-nav-profile"
                          role="tab"
                          aria-controls="custom-nav-profile"
                          aria-selected="false"
                        >
                          Tasks
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="custom-nav-contact-tab"
                          data-toggle="tab"
                          href="#custom-nav-contact"
                          role="tab"
                          aria-controls="custom-nav-contact"
                          aria-selected="false"
                        >
                          Status
                        </a>
                      </div>
                    </nav>
                    <div className="tab-content pl-3 pt-2" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="custom-nav-home"
                        role="tabpanel"
                        aria-labelledby="custom-nav-home-tab"
                      >
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <a href="#">
                              {" "}
                              <i className="fa fa-user"></i> Solomon- Tech Lead{" "}
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a href="#">
                              {" "}
                              <i className="fa fa-user"></i> Felista Kiriinya{" "}
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a href="#">
                              {" "}
                              <i className="fa fa-user"></i> Kevin King'ori{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-nav-profile"
                        role="tabpanel"
                        aria-labelledby="custom-nav-profile-tab"
                      >
                        <p>
                          {project.description}
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="custom-nav-contact"
                        role="tabpanel"
                        aria-labelledby="custom-nav-contact-tab"
                      >
                        <span className="badge badge-complete">{project.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 ">
                    <a href="./createtask.html">
                      {" "}
                      <button className="btn btn-sm btn-primary">
                        Update Project &nbsp;&nbsp;{" "}
                        <i className=" fa fa-pencil"></i>
                      </button>
                    </a>
                    <a href="./createtask.html">
                      {" "}
                      <button className="btn btn-sm btn-danger ">
                        Delete Project &nbsp;&nbsp;{" "}
                        <i className=" fa fa-trash"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null;
    return (
      <div>
        <Dashboard />
        <div id="right-panel" className="right-panel">
          <div className="breadcrumbs">
            <div className="breadcrumbs-inner">
              <div className="row m-0">
                <div className="col-sm-3">
                  <div className="page-header float-left">
                    <div className="page-title">
                      <h1>Projects</h1>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="page-header page-title">
                    <a href="">
                      {" "}
                      <button className="btn btn-sm btn-primary ">
                        Create a new Project &nbsp;&nbsp;{" "}
                        <i className=" fa fa-pencil"></i>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="page-header float-right">
                    <div className="page-title">
                      <ol className="breadcrumb text-right">
                        <li>
                          <a href="#">Members</a>
                        </li>
                        <li>
                          <a href="#">Tasks</a>
                        </li>
                        <li className="active">Project Status</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="row">
            
             {displayDepartmentsProjects}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps =(state) => ({
  allProjects: state.department.allProjects
})
 
export default connect(mapStateToProps, {projectsDepartment}) (Projects);