import {
  CREATE_TASK,
  DELETE_TASK,
  FETCH_PROJECT_TASK,
  UPDATE_TASK,
  FETCH_PARTICIPANTS,
} from "./types";
import { axios } from "../utils";
import Swal from "sweetalert2";

// create task
export const createTask = (taskDetails) => (dispatch) => {
  let url = `tasks/create`;
  axios
    .post(url, taskDetails)
    .then((response) => {
      Swal.fire("Success", response.data.message, "success");
      dispatch({
        type: CREATE_TASK,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

// fetch task belonging to project

export const fetchTask = (userId, projectId) => (dispatch) => {
  let url = `tasks/user/${userId}/${projectId}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);

      dispatch({
        type: FETCH_PROJECT_TASK,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// update task
export const updateTask = (taskDetails) => (dispatch) => {
  let url = `tasks/edit-task`;
  axios
    .put(url, taskDetails)
    .then((response) => {
      // console.log(response.data)

      Swal.fire("Success", response.data.message, "success");
      dispatch({
        type: UPDATE_TASK,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

// delete task

export const deleteTask = (taskId) => (dispatch) => {
  let url = `tasks/delete/${taskId}`;
  axios
    .delete(url)
    .then((response) => {
      console.log();
      Swal.fire("Deleted!", response.data.message, "success");

      dispatch({
        type: DELETE_TASK,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// fetch participants

export const fetchParticipant = (id) => (dispatch) => {
  let url = `projects/projectPartcipants/${id}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: FETCH_PARTICIPANTS,
        payload: response.data,
      });
    })
    .catch((error) => {
      // console.log(error.response.data);
    });
};
