import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Signup() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleSuccess = () => {
    setisSuccess(true);
  };
  const handleFailure = () => {
    setIsFailure(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setisSuccess(false);
    setIsFailure(false);
  };
  const userSignup = function (event) {
    event.preventDefault();
    const formData = {
      first_name: document.querySelector(".signup__firstName").value,
      last_name: document.querySelector(".signup__lastName").value,
      email: document.querySelector(".signup__email").value,
      password: document.querySelector(".signup__password").value,
      confirmPass: document.querySelector(".signup__confirmPass").value,
    };
    if (formData.password != formData.confirmPass) {
      handleClick();
      return;
    }
    const url = "http://localhost:7000/add";
    axios({
      method: "post",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status == 200) handleSuccess();
        history.push("/login");
      })
      .catch((error) => {
        handleFailure();
      });
  };
  return (
    <div className="signup">
      <Snackbar open={open} autoHideDuration={800} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Password Mismatch
        </Alert>
      </Snackbar>
      <Snackbar open={isSuccess} autoHideDuration={600} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Successfully Registered
        </Alert>
      </Snackbar>
      <Snackbar open={isFailure} autoHideDuration={600} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Error. Try again.
        </Alert>
      </Snackbar>
      <div className="signup__container">
        <h1> Signup </h1>
        <span>First Name</span>
        <input className="signup__firstName" required></input>
        <span>Last Name</span>
        <input className="signup__lastName" required></input>
        <span>Email</span>
        <input type="email" className="signup__email" required></input>
        <span>Password</span>
        <input type="password" className="signup__password" required></input>
        <span> Confirm Password</span>
        <input type="password" className="signup__confirmPass" required></input>
        <button className="login__button" onClick={userSignup}>
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;
