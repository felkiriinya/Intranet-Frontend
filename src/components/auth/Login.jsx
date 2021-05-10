import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import {appicon} from "../assets/images";
import { Link } from "react-router-dom";
import { Input, Preloader } from "../common";
import Swal from "sweetalert2";

class Login extends Component {
  state = {
    username: "",
    password: "",
    preloader: "d-none",
    loginErrors: "",
    authenticatedUser: {},
  };
  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    // console.log(this.props.auth);
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/landing");
    }
  }

  login = () => {
    const { username, password } = this.state;
    if (username === "" || password === "") {
      Swal.fire("Error", "Username or Password Shouldnot be Empty", "error");
    } else {
      let data = {
        username,
        password,
      };
      this.setState({
        preloader: "d-block",
      });

      this.props.loginUser(data, this.props.history);
    }
  };

  static getDerivedStateFromProps(props, state) {
    if (props.loginErrors.length !== 0) {
      return {
        preloader: "d-none",
      };
    }
    if (props.authenticatedUser !== state.authenticatedUser) {
      return {
        preloader: "d-none",
      };
    }
  }

  render() {
    const { username, password, preloader } = this.state;
    return (
      <div className="d-flex justify-content-center mt-5 ">
        <div className="col-md-4 mt-5 border border-1 border-radius-3 rounded shadow-sm p-3 pb-5 form-wrap">
          <div className="d-flex  justify-content-center">
            <img src={appicon} height="72" alt="Mawingu Networks" />
          </div>
          <Input
            label="Username"
            placeholder="Enter Username"
            type="text"
            value={username}
            name="username"
            onChange={this.onChange}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            type="password"
            value={password}
            name="password"
            onChange={this.onChange}
          />

          <div className="d-grid gap-1 mt-3">
            {preloader === "d-none" ? (
              <button className="btn btn-primary btn-sm" onClick={this.login}>
                Login
              </button>
            ) : (
              <div className={preloader}>
                <Preloader />
              </div>
            )}
          </div>
          <div className="d-flex justify-content-between mt-2">
            <Link to="/reset">Reset Password</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  loginErrors: state.auth.loginErrors,
  authenticatedUser: state.auth.authenticatedUser,
});
export default connect(mapStateToProps, { loginUser })(Login);
