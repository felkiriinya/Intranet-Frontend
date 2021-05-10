import React, { Component } from "react";
import { Landingnav } from "../common";
import { connect } from "react-redux";
import {
  crm,
  splynx,
  staff,
  projects,
  user,
  appicon,
  zabbix,
  prtg,
} from "../assets/images";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import { Footer } from "../footer";
class Landing extends Component {
  state = {
    myRef: React.createRef(),
  };

  myRef = () => {
    console.log('MyRef func')
    console.log(React.createRef());
  };
  // componentDidMount() {
  //   if (!this.props.auth.isAuthenticated) {
  //     this.props.history.push("/");
  //   }
  // }

  logoutUser = () => {
    this.props.history.push("/");
    this.props.logoutUser();
  };
  resetUser = () => {
    this.props.history.push("/reset");
    this.props.logoutUser();
  };

  executeScroll = () => {
    console.log("Its getting here");
    // this.myRef.current.executeScroll();
  };

  render() {
    return (
      <div className="container bg-light mb-4">
        <Landingnav
          keys="Home"
          users={this.props.auth.authenticatedUser.firstName}
          logoutuser={this.logoutUser}
          resetUser={this.resetUser}
        />
        <div className="welcome d-flex align-items-center justify-content-center text-white">
          <h1 className="heading text-capitalize">Welcome to your intranet</h1>
        </div>

        <div className="d-flex flex-row mt-3 content-holder">
          <div className="col-md-12 d-flex flex-column mr-3">
            <div className="mb-1">
              <h6>Quick Links</h6>
            </div>
            <div className="d-flex shadow p-3 bg-white flex-row align-items-center justify-content-between mb-3 ">
              <div className="d-flex justify-content-center flex">
                <Link
                  to={{
                    pathname: "https://www.mawingunetworks.com/",
                  }}
                  target="_blank"
                  className="d-flex flex-column justify-content-between align-items-center mr-3 link"
                >
                  <div className="border rounded-circle shadow-sm d-flex justify-content-center align-items-center p-2 ">
                    <img
                      src={appicon}
                      alt=""
                      srcset=""
                      height="100"
                      width="90"
                    />
                  </div>
                  <span className="mt-2 d-flex justify-content-center align-items-center">
                    Website
                  </span>
                </Link>

                <Link
                  to={{
                    pathname: "https://www.mawingunetworks.com/",
                  }}
                  target="_blank"
                  className="d-flex flex-column justify-content-center align-items-center col-md-2 mr-2 link"
                >
                  <div className="border rounded-circle shadow-sm d-flex justify-content-center align-items-center p-2">
                    <img
                      src={zabbix}
                      alt=""
                      srcset=""
                      height="100"
                      width="90"
                    />
                  </div>
                  <span className="mt-2 d-flex justify-content-center align-items-center">
                    Zabbix
                  </span>
                </Link>

                <Link
                  to={{
                    pathname: "https://www.mawingunetworks.com/",
                  }}
                  target="_blank"
                  className="d-flex flex-column justify-content-center align-items-center col-md-2 mr-2 link"
                >
                  <div className="border rounded-circle shadow-sm d-flex justify-content-center align-items-center p-2">
                    <img src={prtg} alt="" srcset="" height="100" width="90" />
                  </div>
                  <span className="mt-2 d-flex justify-content-center align-items-center">
                    PRTG
                  </span>
                </Link>
                <div className="d-flex flex-column justify-content-center align-items-center col-md-2 mr-2">
                  <div className="border rounded-circle shadow-sm d-flex justify-content-center align-items-center p-2">
                    <img src={crm} alt="" srcset="" height="100" width="90" />
                  </div>
                  <span className="mt-2">CRM</span>
                </div>

                <Link
                  to="/staff"
                  className="d-flex flex-column justify-content-center align-items-center col-md-2 mr-2 link"
                >
                  <div className="border rounded-circle shadow-sm d-flex justify-content-center align-items-center p-2">
                    <img src={staff} alt="" srcset="" height="100" width="90" />
                  </div>
                  <span className="mt-2">Staff</span>
                </Link>

                <Link
                  to={{
                    pathname: "https://home.mawingunetworks.com/",
                  }}
                  target="_blank"
                  className="d-flex flex-column justify-content-center align-items-center col-md-2 mr-2 link"
                >
                  <div className="d-flex flex-column justify-content-center align-items-center col-md-2 mr-3">
                    <div className="border rounded-circle shadow-sm d-flex justify-content-center align-items-center p-2">
                      <img
                        src={splynx}
                        alt=""
                        srcset=""
                        height="100"
                        width="90"
                      />
                    </div>
                    <span className="mt-2">Splynx</span>
                  </div>
                </Link>

                <div
                  className="d-flex flex-column justify-content-center link"
                  onClick={this.executeScroll}
                >
                  <Link
                    to=""
                    className="d-flex flex-column justify-content-center align-items-center link"
                  >
                    <i className="fa fa-ellipsis-h " />
                  </Link>
                </div>
              </div>
            </div>

            <div className=" d-flex flex-row mr-3 justify-content-between ">
              <div className="d-flex shadow bg-white flex-column align-items-center mt-4 p-4">
                <div className="mb-2">
                  <h6>Mawingu Internal Updates</h6>
                </div>
                <div className="">
                  <div className="border-bottom mt-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum quam vero cumque labore natus quisquam deleniti
                      reprehenderit non sit itaque totam provident voluptatibus
                      odio, quod repellendus iusto fugit tenetur neque!
                    </p>
                  </div>
                  <div className="border-bottom mt-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum quam vero cumque labore natus quisquam deleniti
                      reprehenderit non sit itaque totam provident voluptatibus
                      odio, quod repellendus iusto fugit tenetur neque!
                    </p>
                  </div>
                  <div className="border-bottom mt-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum quam vero cumque labore natus quisquam deleniti
                      reprehenderit non sit itaque totam provident voluptatibus
                      odio, quod repellendus iusto fugit tenetur neque!
                    </p>
                  </div>
                  <div className="border-bottom mt-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum quam vero cumque labore natus quisquam deleniti
                      reprehenderit non sit itaque totam provident voluptatibus
                      odio, quod repellendus iusto fugit tenetur neque!
                    </p>
                  </div>
                  <div className="border-bottom mt-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum quam vero cumque labore natus quisquam deleniti
                      reprehenderit non sit itaque totam provident voluptatibus
                      odio, quod repellendus iusto fugit tenetur neque!
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-flex shadow bg-white flex-column align-items-center mb-3 mt-4 p-4 ml-4">
                <div className="mb-2">
                  <h6>Profile</h6>
                </div>
                <div className="card-container d-flex justify-content-center align-items-center flex-column">
                  <div className="image-container">
                    <img src={user} alt="" srcset="" height="100" width="90" />
                  </div>
                  <div className="mb-2 d-flex flex-column align-items-center">
                    <span>{this.props.auth.authenticatedUser.firstName}</span>
                    <span>Occupation,Department</span>
                  </div>
                </div>

                <div className="p-2 mt-2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum laboriosam voluptate optio quam est, architecto
                    consectetur facere commodi id neque, corrupti saepe quis
                    soluta vero? Id dolorum quasi tempora alias.
                  </p>
                </div>
                <div className="d-grid gap-1 col-6 mx-auto">
                  <Link className="btn btn-outline-info btn-sm">
                    View profile
                  </Link>
                </div>
                <div className="d-flex p-3 bg-white flex-column align-items-center mb-3">
                  <h6>Projects</h6>
                  <div className="card-container d-flex justify-content-center align-items-center flex-column">
                    <div className="image-container">
                      <img
                        src={projects}
                        alt=""
                        srcset=""
                        height="100"
                        width="90"
                      />
                    </div>
                    <div className="mb-2 d-flex flex-column">
                      <span>Project details:</span>
                      <span>Status:</span>
                    </div>
                  </div>

                  <div className="p-2 mt-2">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nostrum laboriosam voluptate optio quam est, architecto
                      consectetur facere commodi id neque, corrupti saepe quis
                      soluta vero? Id dolorum quasi tempora alias.
                    </p>
                  </div>
                  <div className="d-grid gap-1 col-6 mx-auto">
                    <Link
                      to="/workflow"
                      className="btn btn-outline-info btn-sm"
                    >
                      View projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex shadow bg-white mt-4"
          ref={this.myRef}
        >
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Landing);
