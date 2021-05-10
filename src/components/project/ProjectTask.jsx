import React, { Component } from "react";
import { CreateTask, UpdateTask } from "./";
import { deleteTask } from "../../actions/taskActions";
import { connect } from "react-redux";
import Swal from "sweetalert2";

class ProjectTask extends Component {
  state = {
    deleteTask: "",
  };

  componentDidMount() {
    this.setState({
      userId: this.props.auth.id,
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.deleteTask) {
      if (props.deleteTask.message) {
        return {
          deleteTask: props.deleteTask.message,
          staff: props.allStaff,
        };
      }
    }
  }

  deleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.deleteTask(id);
        this.setState({
          staff: this.props.allTask,
        });
      }
    });
  };

  render() {
    const { allTask } = this.props;
    console.log(allTask);

    const displayTask =
      allTask instanceof Array
        ? allTask
            .filter((newTask) => newTask.status === "new")
            .map((task) => (
              <div
                className="d-flex flex-row justify-content-between mt-2 shadow-sm p-2 mb-2 bg-light flex-column"
                key={task.id}
              >
                {" "}
                <div className="d-flex flex-row border-bottom p-2">
                  <div className="mr-4">{task.name}</div>
                  <div className="mr-2 edit-div">
                    <i
                      className="fas fa-edit btn btn-sm btn-info mr-3"
                      data-toggle="modal"
                      data-target={"#updateTask" + task.id}
                    ></i>
                    <UpdateTask
                      id={task.id}
                      name={task.name}
                      description={task.description}
                      status={task.status}
                      userId={task.userId}
                      projectId={task.projectId}
                    />
                  </div>
                  <div className="">
                    <i
                      className="fas fa-trash-alt btn btn-sm btn-danger"
                      onClick={() => this.deleteTask(task.id)}
                    ></i>
                  </div>
                </div>
                <div className="p-2">{task.description}</div>
              </div>
            ))
        : null;

    const displayInprogress =
      allTask instanceof Array
        ? allTask
            .filter((newTask) => newTask.status === "in progress")
            .map((task) => (
              <div
                className="d-flex flex-row justify-content-between shadow-sm p-2 mb-2 bg-light flex-column"
                key={task.id}
              >
                <div className="d-flex flex-row border-bottom">
                  <div className="mr-4 progress-div">{task.name}</div>
                  <div className="mr-2 edit-div">
                    <i
                      className="fas fa-edit btn btn-sm btn-info mr-3"
                      data-toggle="modal"
                      data-target={"#updateTask" + task.id}
                    ></i>
                    <UpdateTask
                      id={task.id}
                      name={task.name}
                      description={task.description}
                      status={task.status}
                      userId={task.userId}
                      projectId={task.projectId}
                    />
                  </div>
                </div>
                <div className="p-2">{task.description}</div>
              </div>
            ))
        : null;

    const displayComplete =
      allTask instanceof Array
        ? allTask
            .filter((newTask) => newTask.status === "complete")
            .map((task) => (
              <div
                className="d-flex flex-row justify-content-between shadow-sm p-2 mb-2 bg-light flex-column"
                key={task.id}
              >
                <div className="d-flex flex-row border-bottom p-2">
                  <div className="mr-4 progress-div">{task.name}</div>

                  <div className="mr-2 edit-div">
                    <i
                      className="fas fa-edit btn btn-sm btn-info mr-3"
                      data-toggle="modal"
                      data-target={"#updateTask" + task.id}
                    ></i>
                    <UpdateTask
                      id={task.id}
                      name={task.name}
                      description={task.description}
                      status={task.status}
                      userId={task.userId}
                      projectId={task.projectId}
                    />
                  </div>
                </div>
                <div className="p-2">{task.description}</div>
              </div>
            ))
        : null;

    return (
      <div className="mt-5 mb-5">
        <h6 className="text-center mt-5 md-3">Tasks</h6>
        <div className="border d-flex flex-row">
          <div className="d-flex flex-column col-3 border p-4">
            <div className="d-flex justify-content-center">
              <h6 className="to-do-heading">To Do</h6>

              <i
                className="fas fa-plus btn btn-sm btn-outline-primary"
                data-toggle="modal"
                data-target="#createTask"
              ></i>
              <CreateTask />
            </div>
            {displayTask}
          </div>
          <div className="d-flex flex-column col-6 align-items-center justify-content-center border">
            <h6>In Progress</h6>
            {displayInprogress}
          </div>
          <div className="d-flex flex-column col-3 border p-4">
            <div className="d-flex justify-content-center">
              <h6 className="to-do-heading">Completed</h6>
            </div>
            {displayComplete}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.authenticatedUser,
  taskDelete: state.task.taskDelete,
  taskResponse: state.task.taskResponse,
  taskUpdate: state.task.taskUpdate,
});

export default connect(mapStateToProps, { deleteTask })(ProjectTask);
