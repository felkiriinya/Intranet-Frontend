/* eslint-disable import/no-anonymous-default-export */
import {FETCH_ALL_STAFF, UPDATE_STAFF,DELETE_STAFF } from "../actions/types";

const initialState = {
  allStaff: [],
  updateResponse: {},
  deleteResponse:{}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_STAFF:
      return {
        ...state,
        allStaff: action.payload,
      };
    case UPDATE_STAFF:
      return {
        ...state,
        updateResponse: action.payload,
      };
    case DELETE_STAFF:
      return {
        ...state,
        deleteResponse: action.payload,
      };

    default:
      return state;
  }
}
