/* eslint-disable import/no-anonymous-default-export */
import {
  CREATE_TASK,
  DELETE_TASK,
  FETCH_PROJECT_TASK,
  UPDATE_TASK,
  FETCH_PARTICIPANTS,
} from "../actions/types";

const initialState = {
  taskResponse: {},
  allTask: [],
  taskUpdate: {},
  taskDelete: {},
  participants: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        taskResponse: action.payload,
      };
    case FETCH_PROJECT_TASK:
      return {
        ...state,
        allTask: action.payload,
      };

    case UPDATE_TASK:
      return {
        ...state,
        taskUpdate: action.payload,
      };

    case DELETE_TASK:
      return {
        ...state,
        taskDelete: action.payload,
      };
    case FETCH_PARTICIPANTS:
      return {
        ...state,
        participants: action.payload,
      };

    default:
      return state;
  }
}
