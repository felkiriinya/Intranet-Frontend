import React, { Component } from "react";
import { Navbar } from "../common";
import { ProjectStatus, ProjectTask } from "./";
import { connect } from "react-redux";
import { fetchParticipant, fetchTask } from "../../actions/taskActions";
import { fetchProgress } from "../../actions/projectActions";
class Project extends Component {
  state = {
    projectName: "",
    id: "",
    allParticipants: [],
    projectId: "",
    userId: "",
    allTask: [],
    progress: {},
  };

  componentDidMount() {
    // let id = localStorage.getItem("projectid");
    // let name = localStorage.getItem("projectname");
    // this.setState({
    //   projectId: id,
    //   userId: this.props.auth.id,
    //   projectName: name,
    // });
    // this.props.fetchProgress(id);
    // this.props.fetchTask(this.props.auth.id, id);
    // this.props.fetchParticipant(id);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.allParticipants !== state.allParticipants) {
      return {
        allParticipants: props.allParticipants,
      };
    }
    if (props.allTask !== state.allTask) {
      return {
        allTask: props.allTask,
      };
    }
    if (props.progress !== state.progress) {
      return {
        progress: props.progress,
      };
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.taskResponse !== prevProps.taskResponse ||
      this.props.taskUpdate !== prevProps.taskUpdate ||
      this.props.taskDelete !== prevProps.taskDelete
    ) {
      this.props.fetchTask(this.state.userId, this.state.projectId);
      this.props.fetchProgress(this.state.projectId);
    }
  }

  fetchTask = (id) => {
    const { projectId } = this.state;
    this.props.fetchTask(id, projectId);
  };

  render() {
    const { projectName, allParticipants, allTask, progress } = this.state;
    console.log(progress);
    const progressPercentage = parseInt(
      (progress.Complete / progress.allTasks) * 100
    );
    console.log(progressPercentage);
    console.log(allTask);
    const displayParticipants =
      allParticipants instanceof Array
        ? allParticipants.map((participant) => (
            <React.Fragment key={participant.id}>
              <li
                onClick={() => this.fetchTask(participant.id)}
                style={{ cursor: "pointer" }}
                className="ml-3"
              >
                {participant.username}
              </li>
            </React.Fragment>
          ))
        : null;

    return (
      <React.Fragment>
        <div className="container-fluid mr-5">
          <Navbar
            to="/workflow"
            heading={projectName}
            details={
              <div className="ml-0 dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Participants
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {displayParticipants}
                </ul>
              </div>
            }
          />
          <ProjectStatus progressPercentage={progressPercentage} />
          <ProjectTask allTask={allTask} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  allParticipants: state.task.participants,
  allTask: state.task.allTask,
  auth: state.auth.authenticatedUser,
  progress: state.project.progressResponse,
  taskDelete: state.task.taskDelete,
  taskResponse: state.task.taskResponse,
  taskUpdate: state.task.taskUpdate,
});

export default connect(mapStateToProps, {
  fetchParticipant,
  fetchTask,
  fetchProgress,
})(Project);
