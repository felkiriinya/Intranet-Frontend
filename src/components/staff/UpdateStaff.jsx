import React, { Component } from "react";
import { Input } from "../common";
class UpdateStaff extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    id: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    const { firstname, lastname, email, id } = this.props;
    this.setState({
      firstname,
      lastname,
      email,
      id,
    });
  }

  UpdateStaff = () => {
    const { firstname, lastname, email, id } = this.state;
    let data = {
      firstName: firstname,
      lastName: lastname,
      email,
    };
    this.props.UpdateStaff(data, id);
    this.props.fetchStaff();
  };

  render() {
    const { firstname, lastname, email, id } = this.state;

    return (
      <div
        className="modal fade"
        id={"updateStaff" + id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Staff
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
                label="Email"
                placeholder="Enter Email"
                type="email"
                value={email}
                onChange={this.onChange}
                name="email"
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
                onClick={this.UpdateStaff}
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

export default UpdateStaff;
