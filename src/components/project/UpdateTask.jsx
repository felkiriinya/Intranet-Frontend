import React, { Component } from "react";
import { Input, TextArea, Select } from "../common";
import { updateTask } from "../../actions/taskActions";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class UpdateTask extends Component {
  state = {
    id: "",
    name: "",
    description: "",
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
    const {
      name,
      description,
      status,
      userId,
      projectId,
      id,
    } = this.props;

    this.setState({
      id,
      name,
      description,
      status,
      userId,
      projectId,
    });
  }

  submitTask = () => {
    const {
      name,
      description,
      status,
      projectId,
      userId,
      id,
    } = this.state;
    if (name === "" || description === "" || status === "") {
      Swal.fire("Error", "All Fields are Required", "error");
    } else {
      let data = {
        taskId:id,
        name,
        description,
        status,
        userId: parseInt(userId),
        projectId: parseInt(projectId),
      };
      this.props.updateTask(data, id);
    }
  };

  render() {
    const { name, description, status } = this.state;

    const { id } = this.props;
    console.log(id);

    return (
      <div
        className="modal fade"
        id={"updateTask" + id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Status
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

UpdateTask.propTypes = {
  updateTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  taskUpdate: state.project.taskUpdate,
  auth: state.auth.authenticatedUser,
});

export default connect(mapStateToProps, { updateTask })(UpdateTask);
