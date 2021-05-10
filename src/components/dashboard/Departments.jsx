import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Departments
 extends Component {
    state = {  }
    render() { 
        const {
            name
        } = this.props
        return (
          <div>
            <li className="menu-item-has-children dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <i className="menu-icon fa fa-glass"></i>{name}
              </a>
              <ul className="sub-menu children dropdown-menu">
                {" "}
                <li>
                  <i className="fa fa-users"></i>
                  <Link to="/staff">Members</Link>
                </li>
                <li>
                  <i className="fa fa-id-badge"></i>
                  <Link to="/project">Projects</Link>
                </li>
                <li>
                  <i className="fa fa-tasks"></i>
                  <a href="./tasks.html">Tasks</a>
                </li>
                <li>
                  <i className="fa fa-calendar"></i>
                  <a href="./events.html">Events</a>
                </li>
                <li>
                  <i className="fa fa-newspaper-o"></i>
                  <a href="">News Box</a>
                </li>
              </ul>
            </li>
          </div>
        );
    }
}
 
export default Departments
;
