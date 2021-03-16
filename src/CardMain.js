import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./CardMain.css";

function CardMain({ data }) {
  const addFav = (e) => {
    e.preventDefault();
    e.target.style.display = "none";
    console.log("jfff\n");
  };
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
        <button onClick={addFav}>Add to Favourites</button>
        <button>Remove from Favourites</button>
      </div>
    </div>
  );
}

export default CardMain;
