import React, { Component } from "react";
import Dashboard from "../dashboard/Dashboard";
import Staffnew from "../staff/Staffnew"
import { Link } from "react-router-dom";
class Users extends Component {
  state = {};
  render() {
    return (
      <div>
        <Dashboard />
        <Staffnew/>

        </div>
    );
  }
}

export default Users;
