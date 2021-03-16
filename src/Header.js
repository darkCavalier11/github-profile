import { Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

import { useStateValue } from "./StateProvider";
import "./Header.css";
import { makeStyles } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
  },
});

function Header() {
  let user = JSON.parse(localStorage.getItem("user"));

  const [items, setitems] = useState([]);
  useEffect(() => {}, [items]);
  const history = useHistory();
  const handleSignout = (e) => {
    e.preventDefault();
    if (e.target.textContent == "Signout") {
      let user = JSON.parse(localStorage.getItem("user"));
      const url = "http://localhost:7000/profile";
      axios({
        url: url,
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: user,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      localStorage.clear();
      history.push("/login");
    } else history.push("/signup");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (e.target.textContent == "Hello Guest") history.push("/login");
  };

  const fetchData = async function (e) {
    const searchText = e.target.value;
    if (!searchText) return;
    const url = `https://api.github.com/search/users?q=${searchText}&per_page=10`;
    try {
      const res = await axios.get(url);
      setitems(res.data.items);
      console.log(items);
    } catch (err) {
      console.log("Error");
    }
  };
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
  return (
    <div className="header__container">
      <div className="header__searchBox">
        <input type="text" onChange={fetchData} placeholder="Search..."></input>
        <div className="header__option">
          <span className="header__option1" onClick={handleLogin}>
            Hello <b>{!user ? "Guest" : user.first_name}</b>
          </span>
          <span className="header__option2" onClick={handleSignout}>
            {user ? "Signout" : "Signup"}
          </span>
        </div>
      </div>
      <hr></hr>
      <h1 className="header__legend">Search Result</h1>
      <div className="header__res">
        {items.map((data) => {
          return (
            <Card src={data.avatar_url} name={data.login} data={data}></Card>
          );
        })}
      </div>
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
    </div>
  );
}

export default Header;
