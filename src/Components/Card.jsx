import React from "react";
import "../Styles/Card.css";
import { Avatar } from "@mui/material";

export const Card = () => {
  return (
    <div className="card">
      <Avatar />
      <div>Ajinkya Patil</div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"></img>
    </div>
  );
};
