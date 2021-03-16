import { Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import "./Header.css";
import { makeStyles } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

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

  return (
    <div className="header__container">
      <div className="header__searchBox">
        <input type="text" onChange={fetchData}></input>
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
    </div>
  );
}

export default Header;
