import {
  CREATE_DEPARTMENT,
  FETCH_ALL_DEPARTMENT,
  FETCH_DEPARTMENT_PROJECTS,
  FETCH_DEPARTMENT_MEMBERS,
} from "./types";
import { axios } from "../utils";
import Swal from "sweetalert2";
// create department

export const createDepartment = (departmentDetails) => (dispatch) => {
  let url = `departments/create`;
  axios
    .post(url, departmentDetails)
    .then((response) => {
      Swal.fire("Success", response.data.message, "success");
      dispatch({
        type: CREATE_DEPARTMENT,
        payload: response.data,
      });
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.data.name) {
          Swal.fire("Error", error.response.data.name, "error");
        }
      } else {
        Swal.fire("Error", "Oops! Something went wrong!", "error");
      }
    });
};

// fetch department

export const fetchDepartment = () => (dispatch) => {
  let url = `departments/all`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: FETCH_ALL_DEPARTMENT,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// Projects belonging to a department

export const projectsDepartment = (id) => (dispatch) => {
  let url = `projects/departments/${id}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);

      dispatch({
        type: FETCH_DEPARTMENT_PROJECTS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
 
//members belonging to a department

export const membersDepartment =(id) => (dispatch) => {
  let url = `departments/members/${id}`;
  console.log(id)
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: FETCH_DEPARTMENT_MEMBERS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error)
    });
}