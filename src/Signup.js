import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup">
      <div className="signup__container">
        <h1> Signup </h1>
        <span>First Name</span>
        <input></input>
        <span>Last Name</span>
        <input></input>
        <span>Email</span>
        <input type="email"></input>
        <span>Password</span>
        <input type="password"></input>
        <span> Confirm Password</span>
        <input type="password"></input>
        <button className="login__button">Signup</button>

      </div>
    </div>
  );
}

export default Signup;
