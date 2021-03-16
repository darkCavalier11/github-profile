import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./CardMain.css";

function CardMain({ data, favDisabled, remDisabled }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const addFav = (e) => {
    e.preventDefault();
    if(user.savedProfiles.length == 0)
      user.savedProfiles.push(data);
    for (let i = 0; i < user.savedProfiles.length; i++) {
      if (data.id == user.savedProfiles[i].id) {
        break;
      }
      if (i == user.savedProfiles.length - 1) {
        user.savedProfiles.push(data);
      }
    }
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user.savedProfiles);
  };
  const removeFav = (e) => {
    e.preventDefault();
    for (let i = 0; i < user.savedProfiles.length; i++) {
      if (data.id == user.savedProfiles[i].id) {
        user.savedProfiles.splice(i, 1);
      }
    }
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user.savedProfiles);
  };
  if (user) {
    favDisabled = false;
    remDisabled = true;
    for (let i = 0; i < user.savedProfiles.length; i++) {
      if (user.savedProfiles[i].id == data.id) {
        favDisabled = true;
        remDisabled = false;
      }
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
