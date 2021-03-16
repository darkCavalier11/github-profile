import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./CardMain.css";
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function CardMain({ data, favDisabled, remDisabled }) {
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
  const user = JSON.parse(localStorage.getItem("user"));
  const addFav = (e) => {
    e.preventDefault();
    if (!user) {
      setIsFailure(true);
      return;
    }
    if (user.savedProfiles.length == 0) user.savedProfiles.push(data);
    for (let i = 0; i < user.savedProfiles.length; i++) {
      if (data.id == user.savedProfiles[i].id) {
        break;
      }
      if (i == user.savedProfiles.length - 1) {
        user.savedProfiles.push(data);
      }
    }
    setisSuccess(true);
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user.savedProfiles);
  };
  const removeFav = (e) => {
    if (!user) {
      setIsFailure(true);
      return;
    }
    e.preventDefault();
    for (let i = 0; i < user.savedProfiles.length; i++) {
      if (data.id == user.savedProfiles[i].id) {
        user.savedProfiles.splice(i, 1);
        setOpen(true);
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
          <a href={data.url} className="link">
            {data.url}
          </a>
        </div>
        <div>
          <span>id : </span>
          {data.id || "None"}
        </div>
        <div>
          <span>score : </span>
          {data.score || "0"}
        </div>
        <div>
          <span>type : </span>
          {data.type || "0"}
        </div>
        <button onClick={addFav} disabled={favDisabled}>
          Add to Favourites
        </button>
        <button onClick={removeFav} disabled={remDisabled}>
          Remove from Favourites
        </button>
      </div>
      <Snackbar open={open} autoHideDuration={800} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Removed Successfully
        </Alert>
      </Snackbar>
      <Snackbar open={isSuccess} autoHideDuration={600} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Successfully Added
        </Alert>
      </Snackbar>
      <Snackbar open={isFailure} autoHideDuration={600} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Login to add Profiles.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CardMain;
