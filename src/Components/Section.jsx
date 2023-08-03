import React from 'react';
import {motion} from "framer-motion";

const Section = ({
  h3,
  text,
  hasBtn=true,
  btnText,
  imgSrc,
  videosrc,
  imgSize="70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgcolor,
  btnColor}) => {
    const headingoptions = {
      initial:{
        y:"100%",
        opacity:0,
      },
      whileInView:{
        y:"0%",
        opacity:1,
      }
    };
    const textoptions={
      ...headingoptions,
      transition:{
        delay:0.3,
      },
    };
    const buttonoptions={
      initial: {
        y: "100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.3,
        ease: "easeIn",
      },
    };
    const imageoptions={
      initial: {
        scale: 0.1,
        opacity: 0,
      },
      whileInView: {
        scale: 1,
        opacity: 1,
      },
      transition: {
        delay: 0.3,
      },
    }

  return (
<section 
className="section"
style={{ 
backgroundColor,
  }}
>
<div>
      <motion.h3
      style={{
        color:headingColor
      }}
      data-cursorpointer={true}
      {...headingoptions}>
      {h3}   
      </motion.h3>

      <motion.p
       style={{
        color:textColor,
        }}
        data-cursorpointer={true}
        {...textoptions}>
        {text}
        </motion.p>

      {hasBtn && (
        <motion.button style={{ 
        color:btnColor,
        backgroundColor:btnBgcolor,
        }}
        data-cursorpointer={true}
        {...buttonoptions}>
      {btnText}
      </motion.button>
      )}

      <motion.div {...imageoptions}>
      <img
       src={imgSrc} 
       alt="" 
      //  style={{
      //         width: imgSize,
      //       }}
      />
      </motion.div>
</div>
   </section>
  );
};

export default Section