import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <h1>Login</h1>
        <span>Email</span>
        <input type="email" required></input>
        <span>Password</span>
        <input type="password" required></input>
        <button className="login__button">Login</button>
      </div>
    </div>
  );
}

export default Login;
