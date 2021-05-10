import React from "react";

const ProjectStatus = ({ progressPercentage }) => {
  console.log(progressPercentage);
  return (
    <div className="">
      <h6 className="text-center mt-5 md-3">Project Status</h6>
      <div className="progress mt-5" style={{ height: "20px", width: "600px" }}>
        <div
          className="progress-bar progress-bar-striped active"
          role="progressbar"
          style={{ width: `${progressPercentage}%` }}
          aria-valuenow={progressPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {isNaN(progressPercentage) ? "0%" : progressPercentage + "%"}
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;
