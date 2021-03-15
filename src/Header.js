import { Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import "./Header.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { Link } from "react-router-dom";
import { SearchPanel } from "react-search-panel";
import axios from "axios";

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
  let items = [{ login: "mkmkm" }];
  const [input, setInput] = React.useState("");
  const [selectedChoices, setSelectedChoices] = useState(items);
  const [{ user }, dispatch] = useStateValue();
  console.log(localStorage.getItem("user"));
  const classes = useStyles();

  const fetchData = async function (e) {
    const searchText = e.target.value;
    const url = `https://api.github.com/search/users?q=${searchText}&per_page=10`;
    try {
      const res = await axios.get(url);
      items = res.data.items;
      console.log(items);
    } catch (err) {
      console.log("Error");
    }
  };

  return (
    <div className="header__container">
      <div className="header__searchBox">
        <SearchPanel
          choices={items}
          onChange={(event) => setInput(event.target.value)}
          onSelectionChange={setSelectedChoices}
          placeholder="Search"
          selectedChoices={selectedChoices}
          value={input}
        />
      </div>
      <Link to="/login">
        <div className="header__option">
          <span className="header__option1">
            Hello {!user ? "Guest" : user.first_name}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
