import { Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import "./Header.css";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
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
  const [items, setitems] = useState([]);
  useEffect(() => {}, [items]);
  const [{ user }, dispatch] = useStateValue();
  console.log(localStorage.getItem("user"));
  const classes = useStyles();

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
        <Link to="/login">
          <div className="header__option">
            <span className="header__option1">
              Hello {4 ? "Guest" : user.first_name}
            </span>
          </div>
        </Link>
      </div>
      <hr></hr>
      <h1>Search Result</h1>
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
