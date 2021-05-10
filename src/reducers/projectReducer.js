/* eslint-disable import/no-anonymous-default-export */
import { CREATE_PROJECT, PROJECT_PROGRESS } from "../actions/types";

const initialState = {
  projectResponse: {},
  progressResponse: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
        projectResponse: action.payload,
      };

    case PROJECT_PROGRESS:
      return {
        ...state,
        progressResponse: action.payload,
      };

    default:
      return state;
  }
}
