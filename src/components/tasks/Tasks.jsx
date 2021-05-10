import React, { Component } from 'react';
import Dashboard from '../dashboard/Dashboard';

class Tasks extends Component {
    state = {  }
    render() { 
        return (
          <div>
            <Dashboard />
            <div id="right-panel" className="right-panel">
              <div className="breadcrumbs">
                <div className="breadcrumbs-inner">
                  <div className="row m-0">
                    <div className="col-sm-3">
                      <div className="page-header float-left">
                        <div className="page-title">
                          <h1>Tasks</h1>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-9">
                      <div className="page-header page-title float-right">
                        <a href="">
                          {" "}
                          <button className="btn btn-sm btn-primary ">
                            Create a new task &nbsp;&nbsp;{" "}
                            <i className=" fa fa-pencil"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title box-title">To Do List</h4>
                        <div className="card-content">
                          <div className="todo-list">
                            <div className="tdl-holder">
                              <div className="tdl-content">
                                <ul>
                                  <li>
                                    <label>
                                      <input type="checkbox" />
                                      <i className="check-box"></i>
                                      <span>
                                        Conveniently fabricate interactive
                                        technology for ....
                                      </span>
                                      <a href="#" className="fa fa-times"></a>
                                      <a href="#" className="fa fa-pencil"></a>
                                      <a href="#" className="fa fa-check"></a>
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input type="checkbox" />
                                      <i className="check-box"></i>
                                      <span>Creating component page</span>
                                      <a href="#" className="fa fa-times"></a>
                                      <a href="#" className="fa fa-pencil"></a>
                                      <a href="#" className="fa fa-check"></a>
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input type="checkbox" checked />
                                      <i className="check-box"></i>
                                      <span>
                                        Follow back those who follow you
                                      </span>
                                      <a href="#" className="fa fa-times"></a>
                                      <a href="#" className="fa fa-pencil"></a>
                                      <a href="#" className="fa fa-check"></a>
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input type="checkbox" checked />
                                      <i className="check-box"></i>
                                      <span>Design One page theme</span>
                                      <a href="#" className="fa fa-times"></a>
                                      <a href="#" className="fa fa-pencil"></a>
                                      <a href="#" className="fa fa-check"></a>
                                    </label>
                                  </li>

                                  <li>
                                    <label>
                                      <input type="checkbox" checked />
                                      <i className="check-box"></i>
                                      <span>Creating component page</span>
                                      <a href="#" className="fa fa-times"></a>
                                      <a href="#" className="fa fa-pencil"></a>
                                      <a href="#" className="fa fa-check"></a>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title box-title">Done</h4>
                        <div className="card-content ">
                          <div className="todo-list  ">
                            <div className="tdl-holder">
                              <div className="tdl-content ">
                                <ul>
                                  <li>
                                    <label>
                                      <span>
                                        Conveniently fabricate interactive{" "}
                                      </span>
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <span>
                                        Conveniently fabricate interactive{" "}
                                      </span>
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <span>
                                        Conveniently fabricate interactive{" "}
                                      </span>
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <span>
                                        Conveniently fabricate interactive{" "}
                                      </span>
                                    </label>
                                  </li>

                                  <li>
                                    <label>
                                      <span>
                                        Conveniently fabricate interactive{" "}
                                      </span>
                                    </label>
                                  </li>
                                </ul>
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
          </div>
        );
    }
}
 
export default Tasks;