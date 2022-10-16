import React from "react";
import logo from "../Images/logo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <section className="left-navbar">
        <img src={logo}></img>
      </section>
      <section className="right-navbar">
        <div>Tracks</div>
        <div>Fees</div>
        <div>FAQ's</div>
        {/* <button>Log In</button> */}
      </section>
    </div>
  );
};
