import React from 'react'
import styled from "styled-components";
import  Button  from './Button.js';
const Errorpage = () => {
  return (
    <Wrapper>
      <div className="container">
      <h2>404</h2>
      <h3>UH! OH YOU ARE LOST</h3>
      <Button>Go Back to Home</Button>
      </div>
    </Wrapper>
  );
};
const Wrapper=styled.section`
.container{
    padding:2rem 0;
    text-align:center;
    h2{  
    font-weight:300;
    justify-content: center;
    font-size:10rem;
    margin-top:4rem;
    }
    h3{
        font-weight:200;
    font-size:4rem;
    margin-bottom:2rem;
    }
}
`;

export default Errorpage
