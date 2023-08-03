import React from 'react'
import "../Styles/Firstslide.css"
const Firstslide = ({myData}) => {
  const {name}=myData;
  return (
    <div className="container">
    <div className="container-1">
     <p>Welcome to </p>    
      <h1>{name}</h1>
      <p> HELLO,WELCOME TO MY WEBSITE,<br/>
          KAISE HO AAP  SAB ???????????<br/>
          ARE YOU READY FOR FUN<br/>
          JUST ZOOOOOP THROUGH MY WHOLE WEBSITE
      </p>   
      </div>

    </div>
  );
};

export default Firstslide
