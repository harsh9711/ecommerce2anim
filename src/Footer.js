import React from 'react'
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <div className="container">
    <div className="logo">
        <img src="/Users/harshsahcdeva/Desktop/demo/project1/src/assets/download.png"/>
    </div>
    <div className="content">
        <div className="community">
        <h2>Community</h2>
        <li>Github</li>
        <li>Twitter</li>
        <li>Discor</li>
        </div>
        <div className="Documentation">
        <h2>Documentation</h2>
            <li>Fuel Labs Articles</li>
            <li>Medium</li>
            <li>Docs</li>
        </div>
    </div> 
    <div  className="bottom-row">
    <div className="deserved"><h2>2023 © All Rights Reserved</h2></div>
    <div className="labs"><h2>Developed By Composability Labs</h2></div>
    </div>
    </div>
  )
}

export default Footer
