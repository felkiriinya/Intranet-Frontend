import React from "react";

const Preloader = () => {
  return (
    <div>
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden"></span>
      </div>
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden"></span>
      </div>
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

export default Preloader;
