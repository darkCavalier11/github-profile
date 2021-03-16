import { Avatar, Modal } from "@material-ui/core";
import React, { useState } from "react";
import "./Card.css";
import CardMain from "./CardMain";
function Card({ src, name, data }) {
  const [open, setOpen] = useState(false);
  console.log(data);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  window.onclick = (e) => {
    const modal = document.querySelector(".cardmain");
    if (e.target == modal) {
      modal.style.display = "none";
      handleClose();
    }
  };
  return (
    <div className="card">
      <div className="card__container" onClick={handleOpen}>
        <Avatar src={src}></Avatar>
        <b>{name}</b>
      </div>
      {open ? <CardMain data={data} className="modal"></CardMain> : ""}
    </div>
  );
}

export default Card;
