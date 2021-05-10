import React, { Component } from "react";
import { UpdateStaff } from "./";
import { Navbar, Table, Preloader } from "../common";
import {Navbar as Navtext} from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

import {
  fetchStaff,
  updateStaff,
  deleteStaff,
} from "../../actions/staffActions";

class Staff extends Component {
  state = {
    staff: [],
    count: 0,
    deleteResponse: "",
    preloader: "d-none",
    updateResponse: "",
  };
  // componentDidMount() {
  //   if (!this.props.auth.isAuthenticated) {
  //     this.props.history.push("/");
  //   }
  //   this.props.fetchStaff();
  //   // this.setState({
  //   //   preloader: "d-block",
  //   // });
  // }

  static getDerivedStateFromProps(props, state) {
    if (props.deleteResponse) {
      if (props.deleteResponse.message) {
        return {
          deleteResponse: props.deleteResponse.message,
          staff: props.allStaff,
        };
      }
    }
    if (props.updateResponse.message === "Profile Update Successful.") {
      // alert("yes");
      return {
        staff: props.allStaff,
      };
    }
    if (props.allStaff) {
      return {
        staff: props.allStaff,
        preloader: "d-none",
      };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.allStaff);
    // console.log(prevState.allStaff);
    if (
      this.props.updateResponse !== prevProps.updateResponse ||
      this.props.deleteResponse !== prevProps.deleteResponse
    ) {
      this.props.fetchStaff();
      this.setState({
        preloader: "d-none",
      });
    }
  }

  deleteStaff = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.deleteStaff(id);
        this.props.fetchStaff();
        this.setState({
          staff: this.props.allStaff,
        });
      }
    });
  };

  render() {
    const { staff, preloader } = this.state;

    const displayStaff =
      staff instanceof Array
        ? staff.map((user) => (
            <tr>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.department.name}</td>

              <td>
                <i
                  className="fas fa-edit btn btn-sm btn-info mr-3"
                  data-toggle="modal"
                  data-target={"#updateStaff" + user.id}
                ></i>
                <UpdateStaff
                  fetchStaff={this.props.fetchStaff}
                  firstname={user.first_name}
                  UpdateStaff={this.props.updateStaff}
                  lastname={user.last_name}
                  email={user.email}
                  id={user.id}
                />
                <i
                  className="fas fa-trash-alt btn btn-sm btn-danger"
                  onClick={() => this.deleteStaff(user.id)}
                ></i>
              </td>
            </tr>
          ))
        : null;
    return (
      <div className="container-fluid mr-5">
      <Navbar
      to="/landing"
      heading="STAFF"
      user={
        <Navtext.Text>
          Signed in as:{" "}
          <a href="#login">
            {this.props.auth.authenticatedUser.firstName}
          </a>
        </Navtext.Text>
      }
    />

        <div className={preloader}>
          <div className={`d-flex justify-content-center mt-5`}>
            <Preloader />
          </div>
        </div>

        <div className="mt-5">
          <h6 className="text-center mt-5 md-3">Personnel</h6>
          <Table
            thead={
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            }
            tbody={<React.Fragment>{displayStaff}</React.Fragment>}
          />
        </div>
      </div>
    );
  }
}
Staff.propTypes = {
  allStaff: PropTypes.array.isRequired,
  updateStaff: PropTypes.func,
  fetchStaff: PropTypes.func.isRequired,
  deleteStaff: PropTypes.func,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  allStaff: state.staff.allStaff,
  updateResponse: state.staff.updateResponse,
  deleteResponse: state.staff.deleteResponse,
});
export default connect(mapStateToProps, {
  fetchStaff,
  updateStaff,
  deleteStaff,
})(Staff);
