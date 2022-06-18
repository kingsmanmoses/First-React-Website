import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import "../../App.css";
import { Button } from "../button/Button";
import "./herosection.css";
import MyVideo from "../../vid/video.mp4";

function Herosction() {
  return (
    <div className="hero-container">
      <video src={MyVideo} autoPlay loop muted></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <FaPlayCircle className="fa-play" />
        </Button>
      </div>
    </div>
  );
}

export default Herosction;
