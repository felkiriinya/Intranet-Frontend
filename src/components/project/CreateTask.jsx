import React, { Component } from "react";
import { Input, TextArea, Select } from "../common";
import { createTask } from "../../actions/taskActions";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class CreateTask extends Component {
  state = {
    name: "",
    description: "",
    startTime: "",
    endTime: "",
    status: "",
    userId: "",
    projectId: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    let id = localStorage.getItem("projectid");
    this.setState({
      projectId: id,
      userId: this.props.auth.id,
    });
  }

  submitTask = () => {
    const {
      name,
      description,
      status,
      projectId,
      userId,
      startTime,
      endTime,
    } = this.state;
    if (
      name === "" ||
      description === "" ||
      status === "" ||
      startTime === "" ||
      endTime === ""
    ) {
      Swal.fire("Error", "All Fields are Required", "error");
    } else {
      let data = {
        name,
        description,
        startTime: "",
        endTime: "",
        status,
        userId: parseInt(userId),
        projectId: parseInt(projectId),
      };
      this.props.createTask(data);
    }
  };

  render() {
    const { name, description, status, startTime, endTime } = this.state;

    return (
      <div
        className="modal fade"
        id="createTask"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Task
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
                label="Name"
                type="text"
                placeholder="Enter Task Name"
                value={name}
                onChange={this.onChange}
                name="name"
              />
              <TextArea
                label="Task Description"
                placeholder="Enter Description"
                value={description}
                onChange={this.onChange}
                name="description"
              />
              <Input
                label="Start Time"
                type="date"
                value={startTime}
                onChange={this.onChange}
                name="startTime"
              />
              <Input
                label="End Time"
                type="date"
                value={endTime}
                onChange={this.onChange}
                name="endTime"
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
                onClick={this.submitTask}
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

CreateTask.propTypes = {
  createTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  createTaskResponse: state.project.taskResponse,
  auth: state.auth.authenticatedUser,
});

export default connect(mapStateToProps, { createTask })(CreateTask);
