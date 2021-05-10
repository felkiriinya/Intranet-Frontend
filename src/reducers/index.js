import { combineReducers } from "redux";
import authReducer from "./authReducer";
import staffReducer from "./staffReducer";
import departmentReducer from "./departmentReducer";
import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";

export default combineReducers({
  auth: authReducer,
  staff: staffReducer,
  department: departmentReducer,
  project: projectReducer,
  task: taskReducer,
  
});
