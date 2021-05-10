import React, { Component } from "react";
import { Input, TextArea, Select } from "../common";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

class CreateProject extends Component {
  state = {
    name: "",
    description: "",
    status: "",
    departmentId: "",
    userId: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    let id = localStorage.getItem("departmentId");
    this.setState({
      departmentId: id,
      userId: this.props.auth.id,
    });
  }

  submitProject = () => {
    const { name, description, status, departmentId, userId } = this.state;
    if (
      name === "" ||
      description === "" ||
      status === "" ||
      departmentId === ""
    ) {
      Swal.fire("Error", "All Fields are Required", "error");
    } else {
      let data = {
        name,
        description,
        status,
        departmentId: parseInt(departmentId),
        userId: parseInt(userId),
      };
      this.props.createProject(data);
    }
  };

  render() {
    const { name, description, status, departmentId } = this.state;
    const { allDepartments } = this.props;

    const displaydepartment =
      allDepartments instanceof Array
        ? allDepartments.map((department) => (
            <React.Fragment key={department.id}>
              <option value={department.id}>{department.name}</option>
            </React.Fragment>
          ))
        : null;
    return (
      <div
        className="modal fade"
        id="CreateProject"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Input
                label="Project Name"
                placeholder="Enter Project Name"
                type="text"
                value={name}
                onChange={this.onChange}
                name="name"
              />
              <TextArea
                label="Project Description"
                placeholder="Enter Description"
                value={description}
                onChange={this.onChange}
                name="description"
              />
              <Select
                label="Status"
                value={status}
                onChange={this.onChange}
                name="status"
                options={
                  <React.Fragment>
                    <option value="" disabled selected>
                      Select Status
                    </option>
                    <option value="new">New</option>
                    <option value="in progress">In Progress</option>
                    <option value="complete">Completed</option>
                  </React.Fragment>
                }
              />
              <Select
                label="Department"
                value={departmentId}
                onChange={this.onChange}
                name="departmentId"
                options={
                  <React.Fragment>
                    <option value="" disabled selected>
                      Select Department
                    </option>

                    {displaydepartment}
                  </React.Fragment>
                }
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.submitProject}
                data-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProject.propTypes = {
  createProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  createProjectResponse: state.project.projectResponse,
  auth: state.auth.authenticatedUser,
});
export default connect(mapStateToProps, { createProject })(CreateProject);
