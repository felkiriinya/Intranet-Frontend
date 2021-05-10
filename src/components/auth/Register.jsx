import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { fetchDepartment } from "../../actions/departmentActions";
import { appicon } from "../assets/images";
import { Link } from "react-router-dom";
import { Input, Select, Preloader } from "../common";
import Swal from "sweetalert2";

class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    contact: "",
    email: "",
    departmentId: "",
    password: "",
    confirm_password: "",
    allDepartments: [],
    registerErrors: [],
    preloader: "d-none",
    
  };

  componentDidMount() {   
     console.log(this.props.error);

    if (this.props.auth.message) {
      this.props.history.push("/");
    }
    this.props.fetchDepartment();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.allDepartments !== state.allDepartments) {
      return {
        allDepartments: props.allDepartments,
      };
    }

    if (props.registerErrors.length !== 0) {
      return {
        preloader: "d-none",
      };
    }
    return null;
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  register = (e) => {
    const {
      firstname,
      lastname,
      contact,
      username,
      email,
      departmentId,
      password,
      confirm_password,
    } = this.state;

    if (
      firstname === "" ||
      lastname === "" ||
      contact === "" ||
      username === "" ||
      password === "" ||
      confirm_password === "" ||
      email === "" ||
      departmentId === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text: "All Fields Should Be Filled!",
      });
    } else {
      if (password !== confirm_password) {
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: "Password Don't Match!",
        });
      } else {
        let data = {
          firstName: firstname,
          lastName: lastname,
          contact,
          username,
          departmentId: parseInt(departmentId),
          password,
          email,
        };
        this.setState({
          preloader: "d-block",
        });
        this.props.registerUser(data, this.props.history);
      }
    }
  };

  render() {
    const {
      firstname,
      lastname,
      contact,
      username,
      password,
      confirm_password,
      email,
      departmentId,
      allDepartments,
      preloader,
    } = this.state;
    console.log(allDepartments);

    const displaydepartment =
      allDepartments instanceof Array
        ? allDepartments.map((department) => (
            <React.Fragment key={department.id}>
              <option value={department.id}>{department.name}</option>
            </React.Fragment>
          ))
        : null;
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="col-md-4 mt-5 border border-1 border-radius-3 rounded shadow-sm p-3 pb-5 form-wrap">
          <div className="d-flex  justify-content-center">
            <img src={appicon} height="72" alt="Mawingu Networks" />{" "}
          </div>
          <Input
            label="First Name"
            placeholder="Enter First Name"
            type="text"
            value={firstname}
            onChange={this.onChange}
            name="firstname"
          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            type="text"
            value={lastname}
            onChange={this.onChange}
            name="lastname"
          />
          <Input
            label="Username"
            placeholder="Enter Username"
            type="text"
            value={username}
            onChange={this.onChange}
            name="username"
          />
          <Input
            label="Phone Number"
            placeholder="Enter Phone Number"
            type="number"
            value={contact}
            onChange={this.onChange}
            name="contact"
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={this.onChange}
            name="email"
          />
          <Select
            label="Department"
            value={departmentId}
            onChange={this.onChange}
            name="departmentId"
            options={
              <React.Fragment>
                <option value="" disabled selected>
                  Select Department
                </option>

                {displaydepartment}
              </React.Fragment>
            }
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={this.onChange}
            name="password"
          />
          <Input
            label="Confirm Password"
            placeholder="Re-enter Password"
            type="password"
            value={confirm_password}
            onChange={this.onChange}
            name="confirm_password"
          />

          <div className="d-grid gap-1 mt-3">
            {preloader === "d-none" ? (
              <button
                className="btn btn-primary btn-sm"
                onClick={this.register}
              >
                Register
              </button>
            ) : (
              <div className={preloader}>
                <Preloader />
              </div>
            )}
          </div>
          <div className="d-flex justify-content-between mt-2">
            <Link to="/">Login instead</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.userDetails,
  allDepartments: state.department.allDepartments,
  registerErrors: state.auth.registerErrors,
});

export default connect(mapStateToProps, { registerUser, fetchDepartment })(
  Register
);
