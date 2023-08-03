import React from 'react';
import { BsMouse } from "react-icons/bs";

const Misc = () => {
  return (
    <>
    <div className="cursor"></div>  
    <a href="/" className='logo1'>
        <img src="./images/download.png" alt="logo"  data-cursorpointer={true}/>
    </a> 
    <a href="/franchise" className="franchisebtn"  data-cursorpointer={true}>
        Get products
    </a>
    <BsMouse className="scrolbtn"  data-cursorpointer={true}/>
    </>
  );
};

export default Misc
