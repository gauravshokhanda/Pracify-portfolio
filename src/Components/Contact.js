import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <h1>  Follow Me On My Socials Given Below</h1>
              
              <ul  className="contactCircles">
                <a href="https://www.instagram.com/gauravshokhanda/"><li>
                  <FaInstagram className="contactIcon" />

                </li></a>
               
                 <a href="https://twitter.com/grvshokhanda"><li>
                  <FaTwitter className="contactIcon" />
                </li> </a>
                <a href="https://www.linkedin.com/in/gaurav-shokanda-b5ba12194/">
                <li>
                  <FaLinkedin className="contactIcon" />
                </li>
                </a>
                <a href="https://github.com/gauravshokhanda">
                <li>
                  <FaGithub className="contactIcon" />
                </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;