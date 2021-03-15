import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Login() {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();
  const [isFailure, setIsFailure] = useState(false);
  const handleFailure = () => {
    setIsFailure(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsFailure(false);
  };

  const login = function (e) {
    e.preventDefault();
    const formData = {
      email: document.querySelector(".login__email").value,
      password: document.querySelector(".login__password").value,
    };
    if (!formData.email || !formData.password) {
      handleFailure();
    }
    const url = "http://localhost:7000/login";
    axios({
      url: url,
      method: "post",
      data: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: "SUCCESS_LOGIN",
            user: response.data,
          });
          localStorage.setItem("user", JSON.stringify(response.data));
          history.push("/");
        }
      })
      .catch((err) => {
        setIsFailure(true);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1>Login</h1>
        <span>Email</span>
        <input type="email" required className="login__email"></input>
        <span>Password</span>
        <input type="password" required className="login__password"></input>
        <button className="login__button" onClick={login}>
          Login
        </button>
        <Snackbar open={isFailure} autoHideDuration={600} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Error. Try again.
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default Login;
