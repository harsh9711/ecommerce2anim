import React from 'react'
import freshTopic3Img from "../assets/bggg.png"
import freshTopic2Img from "../assets/B.png"
import Footer from '/Users/harshsahcdeva/Desktop/demo/newes/src/Components/Footer.jsx';
import IntroVideo from "./IntroVideo"
import { useEffect } from 'react';
import Misc from "/Users/harshsahcdeva/Desktop/demo/newes/src/Components/Misc.jsx"
import freshTopicImg from "../assets/st.png";
import Section from "./Section";
import data from "../data/data1.json"
import "../Styles/App.scss";
import "../Styles/intro.scss";
import "../Styles/section.scss";
import "../Styles/MediaQuery.scss";
import "../Styles/Misc.scss";


const yellow= "#fff100",
pink= "#ed1e79";
// red= "#d20120",
// white= "#fff",
// brown= "#6d3d0f";

const Home = () => { 
   const {freshTopic,freshTopic2,tedTalks}=data;
  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

     const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  }; 
    useEffect(() => {
      window.addEventListener("mousemove", dotCursor);
      return () => {
        window.removeEventListener("mousemove", dotCursor);
      };
    }, []);
  // const data={
  //   name:"HS STORE"
  // };
  return (
    <div>
    {/* <p>Lorem</p> */}
         <IntroVideo/> 
      {/* fresh topic  */}
     <Section 
      h3={freshTopic.heading} 
      text={freshTopic.text} 
      btnText={freshTopic.btn}
      imgSrc={freshTopicImg}
      imgSize={"100%"}
      backgroundColor={pink}
      headingColor={yellow}
      textColor={yellow}
      btnBgcolor={yellow}
      btnColor={pink}
      />
      {/* ///2nd */}
       <Section 
      h3={freshTopic2.heading} 
      text={freshTopic2.text} 
      btnText={freshTopic2.btn}
      imgSrc={freshTopic2Img}
      backgroundColor={pink}
      headingColor={yellow}
      textColor={yellow}
      btnBgcolor={yellow}
      btnColor={pink}
      />
      {/* 3rd  */}
       <Section 
      h3={tedTalks.heading} 
      text={tedTalks.text} 
      imgSize={"30%"}
      btnText={tedTalks.btn}
      imgSrc={freshTopic3Img}
      backgroundColor={pink}
      headingColor={yellow}
      textColor={yellow}
      btnBgcolor={yellow}
      btnColor={pink}
      /> 
       <Section 
      h3={tedTalks.heading} 
      text={tedTalks.text} 
      imgSize={"30%"}
      btnText={tedTalks.btn}
      imgSrc={freshTopic3Img}
      backgroundColor={pink}
      headingColor={yellow}
      textColor={yellow}
      btnBgcolor={yellow}
      btnColor={pink}
      hasBtn={false}
      />  
     <Footer/>
      <Misc/> 
    </div>
  
  );
};

export default Home
