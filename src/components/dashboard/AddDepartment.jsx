import React, { Component } from "react";
import Input from "../common/Input";
import Dashboard from "./Dashboard";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { createDepartment } from "../../actions/departmentActions";
import PropTypes from "prop-types";

class AddDepartment extends Component {
  state = {
    name: "",
    slogan: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  createDepartment = (e) => {
    e.preventDefault();
    const {name, slogan} =this.state;
    if (name === ""){
        Swal.fire("Error","Department name should not be empty", "error")

    }
      let data = {
        name,
        slogan,
      };
      this.props.createDepartment(data);

    
    
  }
  render() {
    const { name, slogan } = this.props;
    return (
      <div>
        <Dashboard />
        <div id="right-panel" className="right-panel">
          <div class="content">
            <div class="animated fadeIn">
              <div class="row">
                <div class="col-lg-6">
                  <div class="card">
                    <div class="card-header">
                      <strong class="card-title"> Add a Department</strong>
                    </div>
                    <div class="card-body">
                      <div id="pay-invoice">
                        <div class="card-body">
                          <hr />
                          <form
                            
                          >
                            <div class="form-group has-success">
                              <Input
                                type="text"
                                label="Department Name"
                                name="name"
                                value={name}
                                onChange={this.onChange}
                              />
                              <Input
                                type="text"
                                label="Slogan"
                                name="slogan"
                                value={slogan}
                                onChange={this.onChange}
                              />
                            </div>

                            <div>
                              <button
                                id="payment-button"
                                type="submit"
                                class="btn btn-sm btn-info btn-block"
                                onClick={this.createDepartment}
                              >
                                <i class="fa fa-plus"></i>&nbsp;
                                <span id="payment-button-amount">Add</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  createDepartmentResponse: state.department.departmentResponse,
});
export default connect(mapStateToProps, {createDepartment}) (AddDepartment);
