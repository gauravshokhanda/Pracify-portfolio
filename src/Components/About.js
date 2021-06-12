import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Hello,  I am Gaurav Shokhanda I am self Taught Webdeveloper.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Gaurav Shokhanda" },
    { id: 2, title: "Email:", text: "gauravshokanda2@gmail.com" },
    { id: 3, title: "Phone:", text: "+917017684236" },
    { id: 4, title: "Linkedin", text: "gauravshokhanda" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/gs.jpg" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                I have got much experience working with front-end coding HTML5 / CSS3/JAVASCRIPT/ReactjsFront-end coding is my main specialization at the moment. My goal is to provide pixel-perfect, responsive, semantic, valid, fast, and clean code.
              </div>
            
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;