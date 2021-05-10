import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Input } from "../common";
import Swal from "sweetalert2";
import Select from "react-select";
import { fetchDepartment } from "../../actions/departmentActions";
import { registerUser } from "../../actions/authActions";
class Registernew extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    username: "",
    password: "",
    confirm_password: "",
    allDepartments: [],
    departmentId: "",
  };
  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleChange = (value) => {
    this.setState({
      departmentId: value,
    });
  };
  
  registerUser = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      contact,
      username,
      password,
      confirm_password,
      departmentId,
    } = this.state;
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      departmentId === "" ||
      username === "" ||
      contact === "" ||
      password === "" ||
      confirm_password === ""
    ) {
      Swal.fire("Error", "All Field should be field", "error");
      if (password !== confirm_password) {
        Swal.fire("Error", "Password do not match!", "error");
      }
    } else {
      
      let data = {
        firstName,
        lastName,
        email,
        contact,
        username,
        password,
        confirm_password,
        departmentId: departmentId.value,
      };
      this.props.registerUser(data, this.props.history);
    }
  };
  componentDidMount() {
    this.props.fetchDepartment();
  }
  static getDerivedStateFromProps(props, state) {
    if (props.allDepartments !== state.allDepartments) {
      return {
        allDepartments: props.allDepartments,
      };
    }
    return null;
  }
  render() {
    const {
      firstName,
      lastName,
      email,
      contact,
      username,
      password,
      confirm_password,
      departmentId,
      allDepartments,
    } = this.state;
    console.log(allDepartments);

    const displayDepartments =
      allDepartments instanceof Array
        ? allDepartments.map((department) => {
            return {
              value: department.id,
              label: department.name,
            };
          })
        : null;
    return (
      <div>
        <section>
          <div class="container d-flex flex-column">
            <div class="row align-items-center justify-content-center min-vh-100">
              <div class="col-md-6 col-lg-5 col-xl-5 py-6 py-md-0">
                <div class="card shadow zindex-100 mb-0">
                  <div class="card-body px-md-5 py-5">
                    <div class="">
                      <h6 class="h3 text-center">Sign up</h6>
                      <p class="text-muted mb-0">
                        Create an account to continue.
                      </p>
                    </div>

                    <form>
                      <div class="form-group">
                        <Input
                          label="First Name"
                          placeholder="First Name"
                          type="text"
                          value={firstName}
                          name="firstName"
                          onChange={this.onChange}
                        />
                      </div>
                      <div class="form-group">
                        <Input
                          label="Last Name"
                          placeholder="Last Name"
                          type="text"
                          value={lastName}
                          name="lastName"
                          onChange={this.onChange}
                        />
                      </div>
                      <div class="form-group">
                        <Input
                          label="Username"
                          placeholder="Username"
                          type="text"
                          value={username}
                          name="username"
                          onChange={this.onChange}
                        />
                      </div>
                      <div class="form-group">
                        <Input
                          label="Work Email"
                          placeholder="john.doe@mawingunetworks.com"
                          type="email"
                          value={email}
                          name="email"
                          onChange={this.onChange}
                        />
                      </div>
                      <div class="form-group">
                        <Input
                          label="Phone number"
                          placeholder="+25471234567"
                          type="text"
                          value={contact}
                          name="contact"
                          onChange={this.onChange}
                        />
                      </div>
                      <div class="form-group">
                        <label class="form-control-label">
                          Select department
                        </label>
                        <div class="">
                          <Select
                            value={departmentId}
                            onChange={this.handleChange}
                            options={displayDepartments}
                            placeholder="Select Departments"
                          />
                        </div>
                      </div>
                      <div class="form-group mb-0">
                        <Input
                          label=" Password"
                          placeholder="Password"
                          type="password"
                          value={password}
                          name="password"
                          onChange={this.onChange}
                        />
                      </div>
                      <div class="form-group mb-0">
                        <Input
                          label="Confirm Password"
                          placeholder="Confirm Password"
                          type="password"
                          value={confirm_password}
                          name="confirm_password"
                          onChange={this.onChange}
                        />
                      </div>
                      <div class="mt-4">
                        <button
                          type="button"
                          class="btn btn-block btn-primary"
                          onClick={this.registerUser}
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer px-md-5">
                    <small className="pr-2">Already registered?</small>
                    <Link to="/login" class="small font-weight-bold">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  allDepartments: state.department.allDepartments,

  departmentResponse: state.department.departmentResponse,
});

export default connect(mapStateToProps, { fetchDepartment, registerUser })(
  Registernew
);
