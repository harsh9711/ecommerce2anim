import React from "react";
import video from "/Users/harshsahcdeva/Desktop/demo/newes/src/assets/ecom.mp4";
import "../Styles/Intro.css"; // Import your CSS file for styling

const IntroVideo2 = () => {
  return (
    <div className="inz̄tro-container">
      <video
        className="intro-video"
        src={video}
        muted
        autoPlay
        loop
        controlsList="nodownload"
      ></video>
    </div>
  );
};

export default IntroVideo2;
