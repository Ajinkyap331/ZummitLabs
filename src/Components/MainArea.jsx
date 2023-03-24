import React from "react";
import { PopupButton } from "@typeform/embed-react";
import MainRightImage from "../Images/main-right-image.png";

export const MainArea = () => {
  return (
    <div className="main-area">
      <section className="left-main">
        {/* <div style={{ fontWeight: 600, fontSize: "1.5rem" }}>
          ₹ 0 Effective Fee
        </div> */}
        <div className="dream-job" style={{ fontWeight: 600 }}>
          Hire best talent{" "}
          <div
            style={{
              color: "#48BF84",
              display: "inline-block",
              color: "#8685cc",
            }}
          >
            Quickly
          </div>
        </div>
        <div style={{ fontWeight: 500, fontSize: "1.1rem" }}>
          Quality Candidates, trained to precision and ready to be hire
        </div>
        <div className="main-btn-container">
          <PopupButton
            id="DiK3oTff"
            style={{ fontSize: 20 }}
            className="register-for-free-btn"
          >
            Contact for hiring
          </PopupButton>
          {/* <PopupButton
            id="DiK3oTff"
            style={{ fontSize: 20 }}
            className="register-for-free-btn2"
          >
            Explore Tracks
          </PopupButton> */}
        </div>
        {/* <div style={{ color: "#8685cc", fontSize: "0.875rem" }}>
          Registration Closing: 8:00 PM, 10th October, 2022
        </div> */}
      </section>
      <section className="right-main">
        <img src={MainRightImage}></img>
      </section>
    </div>
  );
};
