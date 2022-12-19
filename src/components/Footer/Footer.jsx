import React from 'react'
import "./Footer.scss";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footerFull">

<hr />
      <div className="footer">
        <div className="top">
          <div className="item">
            <h5>More</h5>
            <span>Cookies</span>
            <span>Terms & Conditions</span>
          </div>
          <div className="item">
            <h5>Links</h5>
            <span><Link to="/">Home</Link></span>
            <span>FAQS</span>
          </div>
          <div className="item">
            <h5>Join us</h5>
            <span>
              Reviews
            </span>
            <span>
              Blog
            </span>
            <span>
              Join Gapnet
            </span>
          </div>
          <div className="item">
            <h5>Contact</h5>
            <span>
              +55 600 000 000
            </span>
            <span>
              gapnet@gapnet.com
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="copyright">
              <span>© Copyright {new Date().getFullYear()}</span>
              <span> designed by </span>
              <a href="https://www.linkedin.com/in/mherrevi/">
                <span> Miguel Herrera </span>
              </a>
              <span> All Rights Reserved</span>
            </span>
          </div>
              </div>
      </div>
    </div>
  );
}

export default Footer;
