import React, { Component } from "react";
import Swal from "sweetalert2";
import { Input} from "../common";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class Loginnew extends Component {
  state = {
    username: "",
    password: "",
  };
  

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  loginUser = () => {
    const { username, password } = this.state;

    if (username === "" || password === "") {
      Swal.fire("Error", "Username or Password Should not be Empty", "error");
    } else {
      let data = {
        username,
        password,
      };
      this.props.loginUser(data, this.props.history);
    }
  };
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <section>
          <div className="container d-flex flex-column">
            <div className="row align-items-center justify-content-center min-vh-100">
              <div className="col-md-6 col-lg-5 col-xl-5 py-6 py-md-0">
                <div className="card shadow zindex-100 mb-0">
                  <div className="card-body px-md-5 py-5">
                    <div>
                      <h6 className="h3 text-center">Login</h6>
                      <p className="text-muted mb-3">
                        Sign in to your account to continue.
                      </p>
                    </div>
                    <span className="clearfix"></span>
                    <form>
                      <div className="form-group">
                        <Input
                          label="Username"
                          placeholder="Enter username"
                          type="text"
                          value={username}
                          name="username"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group mb-0">
                        <Input
                          label="Password"
                          placeholder="Enter password"
                          type="password"
                          value={password}
                          name="password"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="mt-4">
                        <button
                          onClick={this.loginUser}
                          type="button"
                          className="btn btn-block btn-sm btn-primary"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer px-md-5 pr-2">
                    <small className="pr-2">Not registered?</small>
                    <Link to="/register" className="small font-weight-bold ">
                      Create account
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
  auth: state.auth,
  loginErrors: state.auth.loginErrors,
  authenticatedUser: state.auth.authenticatedUser,
});
export default connect(mapStateToProps, {loginUser})(Loginnew);
