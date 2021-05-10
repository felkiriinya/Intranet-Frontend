import { FETCH_ALL_STAFF, UPDATE_STAFF, DELETE_STAFF } from "./types";
import axios from "../utils/axios";
import Swal from "sweetalert2";
//get all staff

export const fetchStaff = () => (dispatch) => {
  let url = `users/all`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: FETCH_ALL_STAFF,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

//Update Staff

export const updateStaff = (userDetails, id) => (dispatch) => {
  let url = `users/changeProfile/${id}`;
  axios
    .patch(url, userDetails)
    .then((response) => {
      // console.log(response.data);
      dispatch({
        type: UPDATE_STAFF,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// Delete Staff

export const deleteStaff = (id) => (dispatch) => {
  let url = `users/removeUser/${id}`;
  axios
    .delete(url)
    .then((response) => {
      console.log();
      Swal.fire("Deleted!", response.data.message, "success");

      dispatch({
        type: DELETE_STAFF,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
