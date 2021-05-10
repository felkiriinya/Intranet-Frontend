import React, { Component } from "react";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper";
import "./App.css";
import "../src/components/assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "../src/components/assets/css/quick-website.css";

// import toastify from 'toastify-js'
import { Login, Loginnew, Register, Reset } from "./components/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Staff from "./components/staff/Staff";
import Landing from "./components/landing/Landing";
import Workflow from "./components/workflow/Workflow";
import "@fortawesome/fontawesome-free/css/all.css";
import jwt_decode from "jwt-decode";
import store from "./store";
import setAuthToken from "./utilities/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import { logoutUser } from "./actions/authActions";
import { Project } from "./components/project";
import { Landingnew } from "./components/landing";
import { Registernew } from "./components/auth";
import Dashboard from "./components/dashboard/Dashboard";
import Staffnew from "./components/staff/Staffnew";
import { Projects } from "./components/project";
import { Tasks } from "./components/tasks";
import AddDepartment from "./components/dashboard/AddDepartment";

if (localStorage.token) {
  //set Auth token header
  setAuthToken(localStorage.token);
  //decode token to read user details
  const decoded = jwt_decode(localStorage.token);
  console.log(decoded);
  //set user and authorize user
  store.dispatch(setCurrentUser(decoded, true));
  //check for expired token
  const currentTime = Date.now() / 10000;
  if (decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser());
    // redirect to login
    window.location.href = "/";
  }
}

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landingnew} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/register" component={Registernew} />
          <Route exact path="/staff" component={Staffnew} />
          <Route exact path="/login" component={Loginnew} />
          <Route exact path="/workflow" component={Workflow} />
          <Route exact path="/project" component={Projects} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/createdepartment" component={AddDepartment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
