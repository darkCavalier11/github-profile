import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./CardMain.css";

function CardMain({ data, favDisabled, remDisabled }) {
  const user = JSON.parse(localStorage.getItem("user"));
  
  const addFav = (e) => {
    e.preventDefault();
  };
  const removeFav = (e) => {
    e.preventDefault();
  };
  if (user) {
    favDisabled = false;
    remDisabled = false;
    if (user.savedProfiles.indexOf(data) != -1) {
      favDisabled = true;
    }
    if (user.savedProfiles.indexOf(data) == -1) {
      remDisabled = true;
    }
  }
  return (
    <div className="cardmain">
      <div className="cardmain__container">
        <Avatar src={data.avatar_url}></Avatar>
        <div>
          <span>Username</span> : {data.login}
        </div>
        <div>
          <span>URL : </span>
          {data.url}
        </div>
        <div>
          <span>Repos : </span>
          {data["public_repos"] || "None"}
        </div>
        <div>
          <span>Followers : </span>
          {data.followers || "0"}
        </div>
        <div>
          <span>Following : </span>
          {data.following || "0"}
        </div>
        <button onClick={addFav} disabled={favDisabled}>
          Add to Favourites
        </button>
        <button onClick={removeFav} disabled={remDisabled}>
          Remove from Favourites
        </button>
      </div>
    </div>
  );
}

export default CardMain;
