import React from "react";
//import "../../App.css";
import { Button } from "../button/Button";
import "./Hero.css";

function Hero() {
  const h1 = "维克多教育助您屡创佳绩";
  const h2 = "让最顶尖的教师团队成为您的左膀右臂";
  return (
    <div className="hero-container">
      <video src="/videos/turn-page-1080p.mp4" autoPlay loop muted />
      <h1>{h1}</h1>
      <p>{h2}</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          关于我们
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          课程列表
        </Button>
      </div>
    </div>
  );
}

export default Hero;
