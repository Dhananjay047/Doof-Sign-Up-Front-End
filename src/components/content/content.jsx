import React from "react";
import "./content.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

function Content() {
  return (
    <div className="content-container">
      <h3>Unlock your stuck revenue.</h3>
      <p>
        We help you unlock the true potential connect with your customers to
      </p>
      <p>understand the rights and wrongs with your product.</p>
      <div className="contentImages">
        <div>
          <img className="girl-image" src="images/girl-image-Doof.png" alt="" />
        </div>
        <div>
          <img className="laptop-image" src="images/laptop.png" alt="" />
        </div>
        <div className="lock-box">
          <LockOutlinedIcon style={{ fontSize: 30 }} className="lock-icon" />
        </div>
      </div>
    </div>
  );
}

export default Content;
