import React, { useState } from "react";
import "./login.css";

function Login(props) {
  var [status, changeStatus] = useState(false);
  var loginMessage = "Already have an account?";
  var signUpMessage = "Don't have an account yet?";

  function statusChange() {
    changeStatus(!status);
  }

  return (
    <div className="container">
      <div className="form-container">
        <h4>
          <strong>Login</strong>
        </h4>
        <form>
          <div className="mb-3">
            <label className="form-label l1">Email</label>
            <input
              className="form-control"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            {status && <label className="form-label">Confirm password</label>}
            {status && (
              <input
                className="form-control"
                type="password"
                placeholder="Confirm Password"
              />
            )}
          </div>
          <button className="form-control btn-warning" type="submit">
            {status ? "Register" : "Login"}
          </button>
        </form>
        <p className="message">
          {status ? loginMessage : signUpMessage}
          <strong onClick={statusChange}>
            {status ? " Login" : " Signup"}
          </strong>
        </p>
      </div>
      <div className="forgot-password-container">
        <p>forgot password</p>
      </div>
    </div>
  );
}

export default Login;
