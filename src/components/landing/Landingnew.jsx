import React, { Component } from 'react'
import appicon from "../assets/images/app_icon.png";
import svg from "../assets/svg/illustrations/illustration-4.svg";
import { Link } from "react-router-dom";
import {
  crm,
  splynx,
  staff,
  projects,
  user,
 
  zabbix,
  prtg,
} from "../assets/images";
class Landingnew
 extends Component {
    state = {  }
    render() { 
        const style = {
            enableBackground: "new 0 0 2560 100"
        }
        return ( 
            <div>
                  {/* <!-- Navbar --> */}
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        {/* <!-- Brand --> */}
        <a className="" >
          <img
            alt="Image placeholder"
            src={appicon}
            id=""
            height="60"
          />
        </a>
        {/* <!-- Toggler --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Collapse --> */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mt-4 mt-lg-0 ml-auto">
            <li className="nav-item">
              <a className="nav-link" >Homepage</a>
            </li>
            <li className="nav-item dropdown dropdown-animate" data-toggle="hover">
              <a
                className="nav-link"
               
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Pages</a
              >
              <div className="dropdown-menu dropdown-menu-single">
                <a className="dropdown-item">Homepage</a>
                <a  className="dropdown-item">About us</a>
                <a className="dropdown-item">Contact</a>
                <div className="dropdown-divider"></div>
                <a  className="dropdown-item">Login</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" >Support</a>
            </li>
          </ul>
          {/* <!-- Button --> */}
          <a
          href=""
            className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3"
           
          >
            Engage
          </a>
          
        
        </div>
      </div>
    </nav>
    {/* <!-- Main content --> */}
    <section className="slice py-7">
      <div className="container">
        <div className="row row-grid align-items-center">
          <div className="col-12 col-md-5 col-lg-6 order-md-2 text-center">
            {/* <!-- Image --> */}
            <figure className="w-100">
              <img
                alt="Image placeholder"
                src={svg}
                className="img-fluid mw-md-90"
              />
            </figure>
          </div>
          <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
            {/* <!-- Heading --> */}
            <h1 className="display-4 text-center text-md-left mb-3">
              The Employee Powered
              <strong className="text-primary pl-2">platform</strong>
            </h1>
            {/* <!-- Text --> */}
            <p className="lead text-center text-md-left text-muted">
              An intranet, enterprise social network and collaboration platform
              that lets your communications flow seamlesly making work a happier
              place for all
            </p>
            {/* <!-- Buttons --> */}
            <div className="text-center text-md-left mt-5">
              <Link
                to="/register"
                className="btn btn-primary btn-icon"
                
              >
                <span className="btn-inner--text">Get started</span>
                <span className="btn-inner--icon"
                  ></span>
              </Link>
              <Link
              to="/login"
                
                className="btn btn-neutral btn-icon d-none d-lg-inline-block"
               
                >Log in</Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="slice slice-lg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <span className="badge badge-primary badge-pill">Quick Links</span>
            <h5 className="lh-180 mt-4 mb-6">Mawingu Internal Applications</h5>
          </div>
        </div>
        {/* <!-- Features --> */}
        <div className="row mx-lg-n4">
          {/* <!-- Features - Col 1 --> */}
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <a href="https://www.mawingunetworks.com/">
                <div className="p-3 d-flex">
                  <div>
                    <div
                      className="icon icon-shape rounded-circle bg-warning text-white mr-4"
                    >
                      <img
                        src={appicon}
                        alt=""
                        height="60"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="h6">Mawingu Website</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <a href="">
                <div className="p-3 d-flex">
                  <div>
                    <div
                      className="icon icon-shape rounded-circle bg-primary text-white mr-4"
                    >
                      <img
                        src={zabbix}
                        alt=""
                        height="70"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="h6">Zabbix</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <a href="">
                <div className="p-3 d-flex">
                  <div>
                    <div
                      className="icon icon-shape rounded-circle bg-primary text-white mr-4"
                    >
                      <img src={prtg} alt="" height="70" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="h6">PRTG</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <a href="">
                <div className="p-3 d-flex">
                  <div>
                    <div
                      className="icon icon-shape rounded-circle bg-primary text-white mr-4"
                    >
                      <img src={crm} alt="" height="60" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="h6">CRM</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <a href="">
                <div className="p-3 d-flex">
                  <div>
                    <div
                      className="icon icon-shape rounded-circle bg-primary text-white mr-4"
                    >
                      <img src={staff} alt="" height="70" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="h6">Intranet</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <a href="">
                <div className="p-3 d-flex">
                  <div>
                    <div
                      className="icon icon-shape rounded-circle bg-primary text-white mr-4"
                    >
                      <img
                        src={splynx}
                        alt=""
                        height="70"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="h6">Splynx</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* <!-- Features - Col 3 --> */}
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <a href="">
                <div className="p-3 d-flex">
                  <div>
                    <div
                      className="icon icon-shape rounded-circle bg-primary text-white mr-4"
                    >
                      <img
                        src="./assets/images/zabbix.png"
                        alt=""
                        height="70"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="h6">CST</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <a href="">
                <div className="p-3 d-flex">
                  <div>
                    <div
                      className="icon icon-shape rounded-circle bg-primary text-white mr-4"
                    >
                      <img
                        src="./assets/images/zabbix.png"
                        alt=""
                        height="70"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="h6">Zabbix</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
              <a href="">
                <div className="p-3 d-flex">
                  <div>
                    <div
                      className="icon icon-shape rounded-circle bg-primary text-white mr-4"
                    >
                      <img
                        src="./assets/images/zabbix.png"
                        alt=""
                        height="70"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="h6">Zabbix</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="position-relative" id="footer-main">
      <div className="footer pt-lg-7 footer-dark bg-primary">
        {/* <!-- SVG shape --> */}
        <div
          className="shape-container shape-line shape-position-top shape-orientation-inverse"
        >
          <svg
            width="2560px"
            height="100px"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="none"
            x="0px"
            y="0px"
            viewBox="0 0 2560 100"
            style={{enableBackground: "new 0 0 2560 100"}}
            xmlSpace="preserve"
            className="fill-section-secondary"
          >
            <polygon points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        {/* <!-- Footer --> */}
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              {/* <!-- Theme's logo --> */}
              <a >
                <img
                  alt="Image placeholder"
                  src={appicon}
                  id=""
                  height="60"
                />
              </a>
              {/* <!-- Mawingu' mission --> */}
              <p className="mt-4 text-sm opacity-8 pr-lg-4">
                Connecting Africa to the world
              </p>
              {/* <!-- Social --> */}
              <ul className="nav mt-4">
                <li className="nav-item">
                  <a className="nav-link pl-0"  target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="" target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
              <h6 className="heading mb-3">Customer Service Resources</h6>
              <ul className="list-unstyled">
                <li><a href="#">Emalify auto dialer</a></li>
                <li><a href="#">GoIp Call Center</a></li>
                <li><a href="#">My Mawingu App</a></li>
                <li><a href="#">Ms. Dynamics 365 CRM</a></li>
                <li><a href="#">Ms. 365 Business Basic CRM</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
              <h6 className="heading mb-3">Finance Resources</h6>
              <ul className="list-unstyled">
                <li><a href="#">HR Payroll-KE</a></li>
                <li><a href="#">Ms. D365 Business Central</a></li>
                <li><a href="#">My Mawingu Middleware</a></li>
                <li><a href="#">(Navison v-14.5)</a></li>
                <li><a href="#">Mpesa Payments System</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
              <h6 className="heading mb-3">NOC Resources</h6>
              <ul className="list-unstyled">
                <li><a href="#">Airlnk</a></li>
                <li><a href="#">UNMS</a></li>
                <li><a href="#">PhP IPAM</a></li>
                <li><a href="#">Unifi Controller</a></li>
                <li><a href="#">Cacti</a></li>
                <li><a href="#">Smokeping </a></li>
              </ul>
            </div>
          </div>
          <hr className="divider divider-fade divider-dark my-4" />
          <div className="row align-items-center justify-content-md-between pb-4">
            <div className="col-md-6">
              <div
                className="copyright text-sm font-weight-bold text-center text-md-left"
              >
                &copy; 2021
                <a href="" className="font-weight-bold" target="_blank"
                  >Mawingu Networks</a
                >. All rights reserved
              </div>
            </div>
            <div className="col-md-6">
              <ul
                className="nav justify-content-center justify-content-md-end mt-3 mt-md-0"
              >
                <li className="nav-item">
                  <a className="nav-link" href="#"> Terms </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> Privacy </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> Cookies </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
            </div>
         );
    }
}
 
export default Landingnew
;