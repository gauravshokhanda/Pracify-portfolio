import React from "react";
import {
  FaFacebookF,
  FaTwitter,
   FaGithub,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Gaurav Shokhanda",
    text:
      "I Have Got much experience working with Front-end and ReactJS.\
    My goal is to provide a pixel perfect, responsive, semantic, valid, fast, and clean code.",
    image: "/images/mam2.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    My Portfolio
                  </a>
                
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;