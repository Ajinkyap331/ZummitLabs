import React from "react";
import { PopupButton } from "@typeform/embed-react";

export const MainArea = () => {
  return (
    <div className="main-area">
      <section className="left-main">
        <div style={{ fontWeight: 600, fontSize: "1.5rem" }}>
          ₹ 0 Effective Fee
        </div>
        <div className="dream-job" style={{ fontWeight: 600}}>
          Land your dream{" "}
          <div style={{ color: "#48BF84", display: "inline-block" }}>
            Internship/ Job
          </div>
        </div>
        <div style={{ fontWeight: 500, fontSize: "1.1rem" }}>
          Get trained, work on live projects and get hired in 12 Weeks
        </div>
        <div className="main-btn-container">
          <PopupButton
            id="DiK3oTff"
            style={{ fontSize: 20 }}
            className="register-for-free-btn"
          >
            Register for Free
          </PopupButton>
          <PopupButton
            id="DiK3oTff"
            style={{ fontSize: 20 }}
            className="register-for-free-btn2"
          >
            Explore Tracks
          </PopupButton>
        </div>
        <div style={{ color: "#48BF84", fontSize: "0.875rem" }}>
          Registration Closing: 8:00 PM, 10th October, 2022
        </div>
      </section>
      <section className="right-main">
        <img src="https://thumbs.dreamstime.com/b/group-happy-friends-mountains-sunset-raised-arms-stands-against-having-fun-119895082.jpg"></img>
      </section>
    </div>
  );
};
