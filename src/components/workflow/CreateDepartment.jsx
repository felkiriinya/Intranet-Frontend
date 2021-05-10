import React, { Component } from "react";
import { Input } from "../common";
import { connect } from "react-redux";
import { createDepartment } from "../../actions/departmentActions";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

class CreateDepartment extends Component {
  state = {
    name: "",
    slogan: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitDepartment = () => {
    const { name, slogan } = this.state;
    if (name === "") {
      Swal.fire("Error", "Name is Required", "error");
    }
    let data = {
      name,
      slogan,
    };
    this.props.createDepartment(data);
  };

  render() {
    const { name, slogan } = this.state;
    return (
      <div
        className="modal fade"
        id="CreateDepartment"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Department
              </h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Input
                label="Department Name"
                placeholder="Enter Department Name"
                type="text"
                value={name}
                onChange={this.onChange}
                name="name"
              />
              <Input
                label="Slogan"
                placeholder="Enter Slogan"
                type="text"
                value={slogan}
                onChange={this.onChange}
                name="slogan"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.submitDepartment}
                data-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateDepartment.propTypes = {
  createDepartment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  createDepartmentResponse: state.department.departmentResponse,
});
export default connect(mapStateToProps, { createDepartment })(CreateDepartment);
