import { CREATE_PROJECT, PROJECT_PROGRESS } from "./types";
import { axios } from "../utils";
import Swal from "sweetalert2";

// create project
export const createProject = (projectDetails) => (dispatch) => {
  let url = `projects/create`;
  axios
    .post(url, projectDetails)
    .then((response) => {
      Swal.fire("Success", response.data.message, "success");
      dispatch({
        type: CREATE_PROJECT,
        payload: response.data,
      });
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.data.error) {
          Swal.fire("Error", error.response.data.error, "error");
        }
      } else {
        Swal.fire("Error", "Oops! Something went wrong!", "error");
      }
    });
};

// progress project
export const fetchProgress = (projectId) => (dispatch) => {
  let url = `tasks/progress/${projectId}`;
  axios
    .get(url)
    .then((response) => {
      dispatch({
        type: PROJECT_PROGRESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};


