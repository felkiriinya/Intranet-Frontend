import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <h6 className="mt-2">Resources</h6>
        <div className="row">

          <div className="col">
            <h6>Customer Service Resources</h6>
            <ul className="list-unstyled">
              <li>Emalify auto dialer</li>
              <li>GoIp Call Center</li>
              <li>My Mawingu App</li>
              <li>Ms. Dynamics 365 CRM</li>
              <li>Ms. 365 Business Basic CRM</li>
            </ul>
          </div>
          <div className="col">
            <h6>Finance Resources</h6>
            <ul className="list-unstyled">
              <li>HR Payroll-KE</li>
              <li>Ms. D365 Business Central (Navison v-14.5)</li>
              <li>My Mawingu Middleware Portal</li>
              <li>Mpesa Payments System</li>
            </ul>
          </div>
          <div className="col">
            <h6>NOC Resources</h6>
            <ul className="list-unstyled">
              <li>Air Control</li>
              <li> Airlnk</li>
              <li>UNMS</li>
              <li>PhP IPAM</li>
              <li>Unifi Controller</li>
              <li>Cacti</li>
              <li>Smokeping</li>
            </ul>
          </div>
          <div className="col">
            <h6>Backend Solutions Resources</h6>
            <ul className="list-unstyled">
              <li>Dynamics 365 Customer Service Insights</li>
              <li>Ms. 365 Business Standard</li>
              <li>Ms. Power Apps</li>
              <li>Ms. Power Automate</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Mawingu Networks| All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
