import React from 'react'
import "../Styles/Footer.scss";
const Footer = () => {
  const footerLinks = (element) => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    switch (element) {
      case 0:
        allFooterLinks.forEach((item, index) =>
          index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 1:
        allFooterLinks.forEach((item, index) =>
          index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 2:
        allFooterLinks.forEach((item, index) =>
          index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 3:
        allFooterLinks.forEach((item, index) =>
          index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      default:
        allFooterLinks.forEach((item) => (item.style.opacity = 1));
        break;
    }
  };
  const linkbacktonormal=()=>{
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    allFooterLinks.forEach((item) => (item.style.opacity = 1));
  };
  return (
    <>
      <footer>
        <h1>@ RISHTA WOHI <br/> 
            #SOCH NAYI ?&%!  </h1>
        <aside on onMouseLeave={linkbacktonormal}>
            <a href="/" className="footerLinks" onMouseOver={()=>footerLinks(0)} data-cursorpointermini={true}>
                Home
            </a>
            <a href="/home" className="footerLinks"  onMouseOver={()=>footerLinks(1)} data-cursorpointermini={true}>
               Story
            </a>
            <a href="/products" className="footerLinks"  onMouseOver={()=>footerLinks(2)} data-cursorpointermini={true}>
              Products
            </a>
            <a href="/comapny" className="footerLinks"  onMouseOver={()=>footerLinks(3)} data-cursorpointermini={true}>
              Company
            </a>
         </aside>      
        <div>
        <h1>EMAIL</h1>
        <a href="harsh: info@harsh9711.com">harsh9711@gmail.com</a><br/>
          <a href="franchise: imfo@franchise.com">
          imfo@franchise.com
          </a>
        </div>
        <div>
        <h5>phone</h5>
            <a href="mobile +919711904891">9711904891</a>
        </div>
        <p> copyright  @ 2022 - 23 </p>
      </footer>
      <div className="footer"></div>
    </>
  );
};

export default Footer
