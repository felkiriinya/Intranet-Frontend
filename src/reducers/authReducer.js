import {
  REGISTER_USER,
  RESET_USER,
  SET_CURRENT_USER,
  FETCH_ALL_DEPARTMENT,
  LOGIN_ERROR,
  REGISTER_ERROR,
  RESET_ERROR
} from "../actions/types";
import isEmpty from "../validation/is-empty";
const initialState = {
  userDetails: {},
  authenticatedUser: {},
  isAuthenticated: false,
  allDepartments: [],
  loginErrors: "",
  registerErrors: [],
  resetErrors:[],
  
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        userDetails: action.payload,
      };
    case SET_CURRENT_USER:
      // console.log(!isEmpty(action.payload));
      return {
        ...state,
        authenticatedUser: action.payload,
        isAuthenticated: !isEmpty(action.payload),
      };
    case RESET_USER:
      return {
        ...state,
        userDetails: action.payload,
      };
    case FETCH_ALL_DEPARTMENT:
      return {
        ...state,
        allDepartments: action.payload,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginErrors: action.payload,
      };

    case REGISTER_ERROR:
      return {
        ...state,
        registerErrors: action.payload,
      };

    case RESET_ERROR:
      return{
        ...state,
        resetErrors:action.payload,
      }
    default:
      return state;
  }
}
