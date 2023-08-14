import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react"; 
import styled from "styled-components";
import {Button} from "/Users/harshsahcdeva/Desktop/demo/newes/src/Styles/Button.js";
const Contact = () => 
{
  const {isAuthenticated,user}= useAuth0();
  const Wrapper = styled.section`
    position: relative;
    height: 100vh; /* Set the height to 100vh */

    .map-container {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .common-heading {
  color: hsl(0, 0%, 28%);
  font-size: 50px!important;
  font-weight: bold!important;
  font-family: monospace;
  letter-spacing: 7px!important;
  cursor: pointer;
  text-transform: uppercase;
}
.common-heading{
      justify-content: center;
      text-align: center;
      text-transform:none;
      margin-bottom:2rem;
      text-transform:uppercase;
  background: linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(0, 0%, 100%) 10%, hsl(0, 0%, 30%) 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
    }
    @keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 600px;
  }
  100% {
    background-position: 600px;
  }
}
    .contact-form {
     backgroundColor:grey;
      transition: all 1.5s ease;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2rem;
      background-color: rgba(255, 255, 255, 0); /* Set background color opacity to 0 */
      border-radius: 10px;
      max-width: 30rem;
      width: 80%;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center; /* Center text vertically */
      text-align: center; /* Center text horizontally */

      .contact-inputs {
        display: flex;
    flex-direction: column;
    gap: 1.5rem;    
    .input-group {
      display: flex;
      flex-direction: column;
      align-items: center; /* Center inputs horizontally */
      padding: 1rem; /* Add padding to push inputs inward */     
      input,
      textarea {
        width: 100%;
      max-width: 300px; 
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
        input[placeholder="Username"] {
         text-align: center;
         justify-content: center;
        }
      }
      &.hovered {
        background-color: rgba(255, 255, 255, 0.18);
        transform: scale(3.8);
        top: 45%;
        left: 45%;
        padding: 2rem;
      }
    } 
    }
    }    
  `;
  return(
  <Wrapper>
  <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.680945677201!2d77.05889268818198!3d28.61955615268675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d088f7ac93%3A0x1db406bd94cf6e8e!2sUttam%20Nagar%20East%2C%20Uttam%20Nagar%2C%20Delhi%2C%20110059!5e0!3m2!1sen!2sin!4v1688531988385!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="contact-form">
         <h2 className="common-heading">Contact page</h2>
         
          <form
            action="https://formspree.io/f/mrgwgzkw"
            method="POST"
            className="contact-inputs">    
         <input
              type="text"
              placeholder="Username"
              name="username"
              value={isAuthenticated ? user.name : ""}
              required
              autoComplete="off"
            />
         <input 
         type="email"
         name="Email"
         placeholder="Email"
         autocomplete="off"
         value= {isAuthenticated ? user.email:""}
         required
        />
        <textarea
        name="Message"
        cols="30"
        rows="10"
        required
        autocomplete="off"
        placeholder="Enter Your Message"></textarea>   
        <Button type="submit" value="send">SEND</Button>
         </form>
        </div>
      </div>
    {/* <h2 className="common-heading">Contact page</h2> */}
    {/* </div> */}
  </Wrapper>
  );
};
export default Contact;