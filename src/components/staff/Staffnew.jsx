import React, { Component } from "react";
import Dashboard from "../dashboard/Dashboard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import {Table} from "../common"
import { membersDepartment } from "../../actions/departmentActions";
class Staffnew extends Component {
  state = {
    allMembers: [],
    departmentName: "",
    departmentId: 1,
    allDepartments: [],
  };

  componentDidMount() {
  
    this.props.membersDepartment(
      this.state.departmentId
    );
  }
  static getDerivedStateFromProps(props, state) {
    if (props.allMembers !== state.allMembers) {
      return {
        allMembers: props.allMembers,
      };
      
    }
    // if (props.allDepartments !== state.allDepartments) {
    //   let id =
    //     props.allDepartments instanceof Array
    //       ? props.allDepartments.map(
    //           (department) => state.departmentId === department.id
    //         )
    //       : null;
    //       return {
    //         departmentId: id
    //       }
    // }

    
    return null;
  }
  render() {
    const { allMembers } = this.state;
    console.log(allMembers);

    let displayDepartmentMembers =
      allMembers instanceof Array
        ? allMembers.map((member) => (
            <tr key={member.departmentId}>
              <td>{member.first_name}</td>
              <td>
                {" "}
                <span className="name">{member.last_name}</span>{" "}
              </td>
              <td>
                {" "}
                <span className="name"> {member.contact}</span>{" "}
              </td>
              <td>{member.email} </td>
            </tr>
          ))
        : null;
    return (
      <div>
        <Dashboard />
        <div id="right-panel" className="right-panel">
          <div className="content ">
            <div className="">
              <div className="row">
                {/* <div className="col-md-3"></div> */}
                <div className="col-md-12">
                  <div className="card">
                    <Table
                      tbody={
                        <React.Fragment>
                          {displayDepartmentMembers}
                        </React.Fragment>
                      }
                      thead={
                        <tr>
                          <th scope="col">First Name</th>

                          <th scope="col">Second Name</th>
                          <th scope="col">Contact</th>
                          <th scope="col">Email</th>
                        </tr>
                      }
                    />
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
  auth: state.auth,
  allMembers: state.department.allMembers,
  departmentResponse: state.department.departmentResponse,
  allDepartments: state.department.allDepartments,
});
export default connect(mapStateToProps, { membersDepartment })(Staffnew);
