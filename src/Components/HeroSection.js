import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import Button from "./Users/harshsahcdeva/Desktop/demo/newes/src/Button.js";
const HeroSection=({myData})=>{
const {name}=myData;
    return (
    <Wrapper>
        <div className="container">
            <div className="grid grid-two-column">
               <div className="hero-section-data">
                <p className="intro-data">Welcome To</p>
                <h1>{name}</h1>
                <p>
                 HELLO, WELCOME TO MY WEBSITE,<br/>
                 KAISE HO AAP?????<br/>
                 ARE YOU READY FOR FUN<br/>
                 JUST ZOOOOOP THROUGH MY WHOLE WEBSITE
                </p>
                <NavLink>
                    {/* <Button>shop now</Button> */}
                </NavLink>
                </div>
                <div className="hero-section-image">
                    <figure>
                        {/* <img 
                        src="images/hero.jpg"
                         alt="hero-section-photo"
                         className="img-style"
                        /> */}
                    </figure>
                </div>
               </div>
            </div>
    </Wrapper>
    );
};
const Wrapper=styled.section`
padding:12rem 0;
import { NavLink } from "react-router-dom";

 img{
    min-width:50rem;
    height:50rem;
} 
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: stretch;
  }

.hero-section-data{
p{
    margin:2rem 0;
}
h1{
    text-transform:capitalize;
    font-weight:bold;
    display:inline-block;
}
.intro-data
{
    margin-bottom:0;
}
}
.hero-section-image{
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
}

figure{
    position:relative;
    &::after{
        content:"";
        width:60%;
        height:80%;
        background-color:rgba(81,56,238,0.4);
        position:absolute;
        left:50%;
        top:-5rem;
        z-index:-1;
    }
}
.img-style{
    width:100%;
    height:auto;
}
@media(max-width:${({theme})=>theme.media}){
    .grid{
        gap:10rem;
    }

figure::after
{
    content:"";
    width:50%;
    height:100%;
    left:0;
    top:10%;
    background-color:rgba(81,56,238,0.4);
}
}
`;
export default HeroSection;