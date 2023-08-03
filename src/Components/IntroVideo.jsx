import React from "react";
import video from "../assets/ecommerce.mp4"
const IntroVideo=()=>{
return (
<div className="intro">
    <video src={video} muted autostart autoPlay loop controlsList="nodownload"></video>
    <div></div>
</div>
);
};
export default IntroVideo;