import { Search } from "@material-ui/icons";
import React from "react";
import "./Header.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff"
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
  const classes = useStyles();
  return (
    <div className="header__container">
      <div className="header__searchBox">
        <Autocomplete
          id="Search"
          freeSolo
          options={items}
          getOptionLabel={(option)=> option.login}
          renderInput={(params) => (
            <TextField
              {...params}
              className={classes.root}
              label="Search"
              margin="normal"
              variant="outlined"
            ></TextField>
          )}
          renderOption={(options, { inputValue }) => {
            const matches = match(options.login, inputValue);
            const parts = parse(options.login, matches);

            return (
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{ fontWeight: part.highlight ? 700 : 400, fontSize:'2rem'}}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}

export default Header;

const items = [
  {
    login: "rohit",
    id: 14514,
    node_id: "MDQ6VXNlcjE0NTE0",
    avatar_url: "https://avatars.githubusercontent.com/u/14514?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohit",
    html_url: "https://github.com/rohit",
    followers_url: "https://api.github.com/users/rohit/followers",
    following_url: "https://api.github.com/users/rohit/following{/other_user}",
    gists_url: "https://api.github.com/users/rohit/gists{/gist_id}",
    starred_url: "https://api.github.com/users/rohit/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohit/subscriptions",
    organizations_url: "https://api.github.com/users/rohit/orgs",
    repos_url: "https://api.github.com/users/rohit/repos",
    events_url: "https://api.github.com/users/rohit/events{/privacy}",
    received_events_url: "https://api.github.com/users/rohit/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohithasrk",
    id: 13820931,
    node_id: "MDQ6VXNlcjEzODIwOTMx",
    avatar_url: "https://avatars.githubusercontent.com/u/13820931?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohithasrk",
    html_url: "https://github.com/rohithasrk",
    followers_url: "https://api.github.com/users/rohithasrk/followers",
    following_url:
      "https://api.github.com/users/rohithasrk/following{/other_user}",
    gists_url: "https://api.github.com/users/rohithasrk/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohithasrk/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohithasrk/subscriptions",
    organizations_url: "https://api.github.com/users/rohithasrk/orgs",
    repos_url: "https://api.github.com/users/rohithasrk/repos",
    events_url: "https://api.github.com/users/rohithasrk/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohithasrk/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rhtyd",
    id: 95203,
    node_id: "MDQ6VXNlcjk1MjAz",
    avatar_url: "https://avatars.githubusercontent.com/u/95203?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rhtyd",
    html_url: "https://github.com/rhtyd",
    followers_url: "https://api.github.com/users/rhtyd/followers",
    following_url: "https://api.github.com/users/rhtyd/following{/other_user}",
    gists_url: "https://api.github.com/users/rhtyd/gists{/gist_id}",
    starred_url: "https://api.github.com/users/rhtyd/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rhtyd/subscriptions",
    organizations_url: "https://api.github.com/users/rhtyd/orgs",
    repos_url: "https://api.github.com/users/rhtyd/repos",
    events_url: "https://api.github.com/users/rhtyd/events{/privacy}",
    received_events_url: "https://api.github.com/users/rhtyd/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohitghatol",
    id: 899864,
    node_id: "MDQ6VXNlcjg5OTg2NA==",
    avatar_url: "https://avatars.githubusercontent.com/u/899864?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohitghatol",
    html_url: "https://github.com/rohitghatol",
    followers_url: "https://api.github.com/users/rohitghatol/followers",
    following_url:
      "https://api.github.com/users/rohitghatol/following{/other_user}",
    gists_url: "https://api.github.com/users/rohitghatol/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohitghatol/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohitghatol/subscriptions",
    organizations_url: "https://api.github.com/users/rohitghatol/orgs",
    repos_url: "https://api.github.com/users/rohitghatol/repos",
    events_url: "https://api.github.com/users/rohitghatol/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohitghatol/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohitgirdhar",
    id: 1893429,
    node_id: "MDQ6VXNlcjE4OTM0Mjk=",
    avatar_url: "https://avatars.githubusercontent.com/u/1893429?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohitgirdhar",
    html_url: "https://github.com/rohitgirdhar",
    followers_url: "https://api.github.com/users/rohitgirdhar/followers",
    following_url:
      "https://api.github.com/users/rohitgirdhar/following{/other_user}",
    gists_url: "https://api.github.com/users/rohitgirdhar/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohitgirdhar/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/rohitgirdhar/subscriptions",
    organizations_url: "https://api.github.com/users/rohitgirdhar/orgs",
    repos_url: "https://api.github.com/users/rohitgirdhar/repos",
    events_url: "https://api.github.com/users/rohitgirdhar/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohitgirdhar/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohitpaulk",
    id: 3893573,
    node_id: "MDQ6VXNlcjM4OTM1NzM=",
    avatar_url: "https://avatars.githubusercontent.com/u/3893573?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohitpaulk",
    html_url: "https://github.com/rohitpaulk",
    followers_url: "https://api.github.com/users/rohitpaulk/followers",
    following_url:
      "https://api.github.com/users/rohitpaulk/following{/other_user}",
    gists_url: "https://api.github.com/users/rohitpaulk/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohitpaulk/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohitpaulk/subscriptions",
    organizations_url: "https://api.github.com/users/rohitpaulk/orgs",
    repos_url: "https://api.github.com/users/rohitpaulk/repos",
    events_url: "https://api.github.com/users/rohitpaulk/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohitpaulk/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohithadassanayake",
    id: 110165,
    node_id: "MDQ6VXNlcjExMDE2NQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/110165?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohithadassanayake",
    html_url: "https://github.com/rohithadassanayake",
    followers_url: "https://api.github.com/users/rohithadassanayake/followers",
    following_url:
      "https://api.github.com/users/rohithadassanayake/following{/other_user}",
    gists_url:
      "https://api.github.com/users/rohithadassanayake/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohithadassanayake/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/rohithadassanayake/subscriptions",
    organizations_url: "https://api.github.com/users/rohithadassanayake/orgs",
    repos_url: "https://api.github.com/users/rohithadassanayake/repos",
    events_url:
      "https://api.github.com/users/rohithadassanayake/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohithadassanayake/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohythakur",
    id: 11797824,
    node_id: "MDQ6VXNlcjExNzk3ODI0",
    avatar_url: "https://avatars.githubusercontent.com/u/11797824?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohythakur",
    html_url: "https://github.com/rohythakur",
    followers_url: "https://api.github.com/users/rohythakur/followers",
    following_url:
      "https://api.github.com/users/rohythakur/following{/other_user}",
    gists_url: "https://api.github.com/users/rohythakur/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohythakur/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohythakur/subscriptions",
    organizations_url: "https://api.github.com/users/rohythakur/orgs",
    repos_url: "https://api.github.com/users/rohythakur/repos",
    events_url: "https://api.github.com/users/rohythakur/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohythakur/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "milliondreams",
    id: 265425,
    node_id: "MDQ6VXNlcjI2NTQyNQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/265425?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/milliondreams",
    html_url: "https://github.com/milliondreams",
    followers_url: "https://api.github.com/users/milliondreams/followers",
    following_url:
      "https://api.github.com/users/milliondreams/following{/other_user}",
    gists_url: "https://api.github.com/users/milliondreams/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/milliondreams/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/milliondreams/subscriptions",
    organizations_url: "https://api.github.com/users/milliondreams/orgs",
    repos_url: "https://api.github.com/users/milliondreams/repos",
    events_url: "https://api.github.com/users/milliondreams/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/milliondreams/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohitrango",
    id: 15312514,
    node_id: "MDQ6VXNlcjE1MzEyNTE0",
    avatar_url: "https://avatars.githubusercontent.com/u/15312514?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohitrango",
    html_url: "https://github.com/rohitrango",
    followers_url: "https://api.github.com/users/rohitrango/followers",
    following_url:
      "https://api.github.com/users/rohitrango/following{/other_user}",
    gists_url: "https://api.github.com/users/rohitrango/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohitrango/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohitrango/subscriptions",
    organizations_url: "https://api.github.com/users/rohitrango/orgs",
    repos_url: "https://api.github.com/users/rohitrango/repos",
    events_url: "https://api.github.com/users/rohitrango/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohitrango/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohitvarkey",
    id: 5669669,
    node_id: "MDQ6VXNlcjU2Njk2Njk=",
    avatar_url: "https://avatars.githubusercontent.com/u/5669669?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohitvarkey",
    html_url: "https://github.com/rohitvarkey",
    followers_url: "https://api.github.com/users/rohitvarkey/followers",
    following_url:
      "https://api.github.com/users/rohitvarkey/following{/other_user}",
    gists_url: "https://api.github.com/users/rohitvarkey/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohitvarkey/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohitvarkey/subscriptions",
    organizations_url: "https://api.github.com/users/rohitvarkey/orgs",
    repos_url: "https://api.github.com/users/rohitvarkey/repos",
    events_url: "https://api.github.com/users/rohitvarkey/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohitvarkey/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohit01",
    id: 1710801,
    node_id: "MDQ6VXNlcjE3MTA4MDE=",
    avatar_url: "https://avatars.githubusercontent.com/u/1710801?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohit01",
    html_url: "https://github.com/rohit01",
    followers_url: "https://api.github.com/users/rohit01/followers",
    following_url:
      "https://api.github.com/users/rohit01/following{/other_user}",
    gists_url: "https://api.github.com/users/rohit01/gists{/gist_id}",
    starred_url: "https://api.github.com/users/rohit01/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohit01/subscriptions",
    organizations_url: "https://api.github.com/users/rohit01/orgs",
    repos_url: "https://api.github.com/users/rohit01/repos",
    events_url: "https://api.github.com/users/rohit01/events{/privacy}",
    received_events_url: "https://api.github.com/users/rohit01/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "RohitDhankar",
    id: 13214169,
    node_id: "MDQ6VXNlcjEzMjE0MTY5",
    avatar_url: "https://avatars.githubusercontent.com/u/13214169?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/RohitDhankar",
    html_url: "https://github.com/RohitDhankar",
    followers_url: "https://api.github.com/users/RohitDhankar/followers",
    following_url:
      "https://api.github.com/users/RohitDhankar/following{/other_user}",
    gists_url: "https://api.github.com/users/RohitDhankar/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/RohitDhankar/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/RohitDhankar/subscriptions",
    organizations_url: "https://api.github.com/users/RohitDhankar/orgs",
    repos_url: "https://api.github.com/users/RohitDhankar/repos",
    events_url: "https://api.github.com/users/RohitDhankar/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/RohitDhankar/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rowhitswami",
    id: 16516296,
    node_id: "MDQ6VXNlcjE2NTE2Mjk2",
    avatar_url: "https://avatars.githubusercontent.com/u/16516296?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rowhitswami",
    html_url: "https://github.com/rowhitswami",
    followers_url: "https://api.github.com/users/rowhitswami/followers",
    following_url:
      "https://api.github.com/users/rowhitswami/following{/other_user}",
    gists_url: "https://api.github.com/users/rowhitswami/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rowhitswami/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rowhitswami/subscriptions",
    organizations_url: "https://api.github.com/users/rowhitswami/orgs",
    repos_url: "https://api.github.com/users/rowhitswami/repos",
    events_url: "https://api.github.com/users/rowhitswami/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rowhitswami/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohithreddy",
    id: 5348652,
    node_id: "MDQ6VXNlcjUzNDg2NTI=",
    avatar_url: "https://avatars.githubusercontent.com/u/5348652?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohithreddy",
    html_url: "https://github.com/rohithreddy",
    followers_url: "https://api.github.com/users/rohithreddy/followers",
    following_url:
      "https://api.github.com/users/rohithreddy/following{/other_user}",
    gists_url: "https://api.github.com/users/rohithreddy/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohithreddy/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohithreddy/subscriptions",
    organizations_url: "https://api.github.com/users/rohithreddy/orgs",
    repos_url: "https://api.github.com/users/rohithreddy/repos",
    events_url: "https://api.github.com/users/rohithreddy/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohithreddy/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohitash-chandra",
    id: 8530586,
    node_id: "MDQ6VXNlcjg1MzA1ODY=",
    avatar_url: "https://avatars.githubusercontent.com/u/8530586?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohitash-chandra",
    html_url: "https://github.com/rohitash-chandra",
    followers_url: "https://api.github.com/users/rohitash-chandra/followers",
    following_url:
      "https://api.github.com/users/rohitash-chandra/following{/other_user}",
    gists_url: "https://api.github.com/users/rohitash-chandra/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohitash-chandra/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/rohitash-chandra/subscriptions",
    organizations_url: "https://api.github.com/users/rohitash-chandra/orgs",
    repos_url: "https://api.github.com/users/rohitash-chandra/repos",
    events_url:
      "https://api.github.com/users/rohitash-chandra/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohitash-chandra/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohitkrai03",
    id: 6041994,
    node_id: "MDQ6VXNlcjYwNDE5OTQ=",
    avatar_url: "https://avatars.githubusercontent.com/u/6041994?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohitkrai03",
    html_url: "https://github.com/rohitkrai03",
    followers_url: "https://api.github.com/users/rohitkrai03/followers",
    following_url:
      "https://api.github.com/users/rohitkrai03/following{/other_user}",
    gists_url: "https://api.github.com/users/rohitkrai03/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohitkrai03/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohitkrai03/subscriptions",
    organizations_url: "https://api.github.com/users/rohitkrai03/orgs",
    repos_url: "https://api.github.com/users/rohitkrai03/repos",
    events_url: "https://api.github.com/users/rohitkrai03/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohitkrai03/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohitnotes",
    id: 47806052,
    node_id: "MDQ6VXNlcjQ3ODA2MDUy",
    avatar_url: "https://avatars.githubusercontent.com/u/47806052?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohitnotes",
    html_url: "https://github.com/rohitnotes",
    followers_url: "https://api.github.com/users/rohitnotes/followers",
    following_url:
      "https://api.github.com/users/rohitnotes/following{/other_user}",
    gists_url: "https://api.github.com/users/rohitnotes/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohitnotes/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohitnotes/subscriptions",
    organizations_url: "https://api.github.com/users/rohitnotes/orgs",
    repos_url: "https://api.github.com/users/rohitnotes/repos",
    events_url: "https://api.github.com/users/rohitnotes/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohitnotes/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohitagarwal003",
    id: 695290,
    node_id: "MDQ6VXNlcjY5NTI5MA==",
    avatar_url: "https://avatars.githubusercontent.com/u/695290?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohitagarwal003",
    html_url: "https://github.com/rohitagarwal003",
    followers_url: "https://api.github.com/users/rohitagarwal003/followers",
    following_url:
      "https://api.github.com/users/rohitagarwal003/following{/other_user}",
    gists_url: "https://api.github.com/users/rohitagarwal003/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohitagarwal003/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/rohitagarwal003/subscriptions",
    organizations_url: "https://api.github.com/users/rohitagarwal003/orgs",
    repos_url: "https://api.github.com/users/rohitagarwal003/repos",
    events_url: "https://api.github.com/users/rohitagarwal003/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohitagarwal003/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "RohitRathore1",
    id: 42641738,
    node_id: "MDQ6VXNlcjQyNjQxNzM4",
    avatar_url: "https://avatars.githubusercontent.com/u/42641738?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/RohitRathore1",
    html_url: "https://github.com/RohitRathore1",
    followers_url: "https://api.github.com/users/RohitRathore1/followers",
    following_url:
      "https://api.github.com/users/RohitRathore1/following{/other_user}",
    gists_url: "https://api.github.com/users/RohitRathore1/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/RohitRathore1/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/RohitRathore1/subscriptions",
    organizations_url: "https://api.github.com/users/RohitRathore1/orgs",
    repos_url: "https://api.github.com/users/RohitRathore1/repos",
    events_url: "https://api.github.com/users/RohitRathore1/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/RohitRathore1/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohitgeo",
    id: 17867943,
    node_id: "MDQ6VXNlcjE3ODY3OTQz",
    avatar_url: "https://avatars.githubusercontent.com/u/17867943?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohitgeo",
    html_url: "https://github.com/rohitgeo",
    followers_url: "https://api.github.com/users/rohitgeo/followers",
    following_url:
      "https://api.github.com/users/rohitgeo/following{/other_user}",
    gists_url: "https://api.github.com/users/rohitgeo/gists{/gist_id}",
    starred_url: "https://api.github.com/users/rohitgeo/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohitgeo/subscriptions",
    organizations_url: "https://api.github.com/users/rohitgeo/orgs",
    repos_url: "https://api.github.com/users/rohitgeo/repos",
    events_url: "https://api.github.com/users/rohitgeo/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohitgeo/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohitvvv",
    id: 404288,
    node_id: "MDQ6VXNlcjQwNDI4OA==",
    avatar_url: "https://avatars.githubusercontent.com/u/404288?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohitvvv",
    html_url: "https://github.com/rohitvvv",
    followers_url: "https://api.github.com/users/rohitvvv/followers",
    following_url:
      "https://api.github.com/users/rohitvvv/following{/other_user}",
    gists_url: "https://api.github.com/users/rohitvvv/gists{/gist_id}",
    starred_url: "https://api.github.com/users/rohitvvv/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohitvvv/subscriptions",
    organizations_url: "https://api.github.com/users/rohitvvv/orgs",
    repos_url: "https://api.github.com/users/rohitvvv/repos",
    events_url: "https://api.github.com/users/rohitvvv/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohitvvv/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "RohitKotiveetil",
    id: 8927652,
    node_id: "MDQ6VXNlcjg5Mjc2NTI=",
    avatar_url: "https://avatars.githubusercontent.com/u/8927652?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/RohitKotiveetil",
    html_url: "https://github.com/RohitKotiveetil",
    followers_url: "https://api.github.com/users/RohitKotiveetil/followers",
    following_url:
      "https://api.github.com/users/RohitKotiveetil/following{/other_user}",
    gists_url: "https://api.github.com/users/RohitKotiveetil/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/RohitKotiveetil/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/RohitKotiveetil/subscriptions",
    organizations_url: "https://api.github.com/users/RohitKotiveetil/orgs",
    repos_url: "https://api.github.com/users/RohitKotiveetil/repos",
    events_url: "https://api.github.com/users/RohitKotiveetil/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/RohitKotiveetil/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohitkrishna094",
    id: 18495886,
    node_id: "MDQ6VXNlcjE4NDk1ODg2",
    avatar_url: "https://avatars.githubusercontent.com/u/18495886?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohitkrishna094",
    html_url: "https://github.com/rohitkrishna094",
    followers_url: "https://api.github.com/users/rohitkrishna094/followers",
    following_url:
      "https://api.github.com/users/rohitkrishna094/following{/other_user}",
    gists_url: "https://api.github.com/users/rohitkrishna094/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohitkrishna094/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/rohitkrishna094/subscriptions",
    organizations_url: "https://api.github.com/users/rohitkrishna094/orgs",
    repos_url: "https://api.github.com/users/rohitkrishna094/repos",
    events_url: "https://api.github.com/users/rohitkrishna094/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohitkrishna094/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohitjha",
    id: 1254113,
    node_id: "MDQ6VXNlcjEyNTQxMTM=",
    avatar_url: "https://avatars.githubusercontent.com/u/1254113?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohitjha",
    html_url: "https://github.com/rohitjha",
    followers_url: "https://api.github.com/users/rohitjha/followers",
    following_url:
      "https://api.github.com/users/rohitjha/following{/other_user}",
    gists_url: "https://api.github.com/users/rohitjha/gists{/gist_id}",
    starred_url: "https://api.github.com/users/rohitjha/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohitjha/subscriptions",
    organizations_url: "https://api.github.com/users/rohitjha/orgs",
    repos_url: "https://api.github.com/users/rohitjha/repos",
    events_url: "https://api.github.com/users/rohitjha/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohitjha/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "Rohitohlyan66",
    id: 42198187,
    node_id: "MDQ6VXNlcjQyMTk4MTg3",
    avatar_url: "https://avatars.githubusercontent.com/u/42198187?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Rohitohlyan66",
    html_url: "https://github.com/Rohitohlyan66",
    followers_url: "https://api.github.com/users/Rohitohlyan66/followers",
    following_url:
      "https://api.github.com/users/Rohitohlyan66/following{/other_user}",
    gists_url: "https://api.github.com/users/Rohitohlyan66/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/Rohitohlyan66/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/Rohitohlyan66/subscriptions",
    organizations_url: "https://api.github.com/users/Rohitohlyan66/orgs",
    repos_url: "https://api.github.com/users/Rohitohlyan66/repos",
    events_url: "https://api.github.com/users/Rohitohlyan66/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/Rohitohlyan66/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "Rohithgilla12",
    id: 19389850,
    node_id: "MDQ6VXNlcjE5Mzg5ODUw",
    avatar_url: "https://avatars.githubusercontent.com/u/19389850?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Rohithgilla12",
    html_url: "https://github.com/Rohithgilla12",
    followers_url: "https://api.github.com/users/Rohithgilla12/followers",
    following_url:
      "https://api.github.com/users/Rohithgilla12/following{/other_user}",
    gists_url: "https://api.github.com/users/Rohithgilla12/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/Rohithgilla12/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/Rohithgilla12/subscriptions",
    organizations_url: "https://api.github.com/users/Rohithgilla12/orgs",
    repos_url: "https://api.github.com/users/Rohithgilla12/repos",
    events_url: "https://api.github.com/users/Rohithgilla12/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/Rohithgilla12/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rowhit",
    id: 4926941,
    node_id: "MDQ6VXNlcjQ5MjY5NDE=",
    avatar_url: "https://avatars.githubusercontent.com/u/4926941?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rowhit",
    html_url: "https://github.com/rowhit",
    followers_url: "https://api.github.com/users/rowhit/followers",
    following_url: "https://api.github.com/users/rowhit/following{/other_user}",
    gists_url: "https://api.github.com/users/rowhit/gists{/gist_id}",
    starred_url: "https://api.github.com/users/rowhit/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rowhit/subscriptions",
    organizations_url: "https://api.github.com/users/rowhit/orgs",
    repos_url: "https://api.github.com/users/rowhit/repos",
    events_url: "https://api.github.com/users/rowhit/events{/privacy}",
    received_events_url: "https://api.github.com/users/rowhit/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohitk-singh",
    id: 1108318,
    node_id: "MDQ6VXNlcjExMDgzMTg=",
    avatar_url: "https://avatars.githubusercontent.com/u/1108318?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohitk-singh",
    html_url: "https://github.com/rohitk-singh",
    followers_url: "https://api.github.com/users/rohitk-singh/followers",
    following_url:
      "https://api.github.com/users/rohitk-singh/following{/other_user}",
    gists_url: "https://api.github.com/users/rohitk-singh/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohitk-singh/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/rohitk-singh/subscriptions",
    organizations_url: "https://api.github.com/users/rohitk-singh/orgs",
    repos_url: "https://api.github.com/users/rohitk-singh/repos",
    events_url: "https://api.github.com/users/rohitk-singh/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohitk-singh/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "rohit-gohri",
    id: 31949290,
    node_id: "MDQ6VXNlcjMxOTQ5Mjkw",
    avatar_url: "https://avatars.githubusercontent.com/u/31949290?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rohit-gohri",
    html_url: "https://github.com/rohit-gohri",
    followers_url: "https://api.github.com/users/rohit-gohri/followers",
    following_url:
      "https://api.github.com/users/rohit-gohri/following{/other_user}",
    gists_url: "https://api.github.com/users/rohit-gohri/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/rohit-gohri/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rohit-gohri/subscriptions",
    organizations_url: "https://api.github.com/users/rohit-gohri/orgs",
    repos_url: "https://api.github.com/users/rohit-gohri/repos",
    events_url: "https://api.github.com/users/rohit-gohri/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/rohit-gohri/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
];
