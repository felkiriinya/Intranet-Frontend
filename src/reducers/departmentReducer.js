/* eslint-disable import/no-anonymous-default-export */
import { act } from "react-dom/test-utils";
import {
  CREATE_DEPARTMENT,
  FETCH_ALL_DEPARTMENT,
  FETCH_DEPARTMENT_PROJECTS,
  FETCH_DEPARTMENT_MEMBERS,
} from "../actions/types";

const initialState = {
  departmentResponse: {},
  allDepartments: [],
  allProjects: {},
  allMembers: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_DEPARTMENT:
      return {
        ...state,
        departmentResponse: action.payload,
      };
    case FETCH_ALL_DEPARTMENT:
      return {
        ...state,
        allDepartments: action.payload,
      };
    case FETCH_DEPARTMENT_PROJECTS:
      return {
        ...state,
        allProjects: action.payload,
      };
    case FETCH_DEPARTMENT_MEMBERS:
      return {
        ...state,
        allMembers: action.payload,
      };
    default:
      return state;
  }
}
