import React from "react";
import {
  FaGithub,
  FaComment,
  FaCamera,
  FaCloud,
  FaMusic,
  FaSearchDollar,
} from "react-icons/fa";
const Portfolio = () => {
  const [header] = React.useState({
    mainHeader: "Portfolio",
    text:
      "Here are my projects.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Twitter Clone",
      link: "https://codepen.io/senid_db/pen/pKrbBQ",
      text:
        "Making Twiiter-Clone with ReactJS and FireBase Having The Functionality To Post a Picture",
    },
    {
      id: 2,
      icon: <FaComment className="commonIcons" />,
      heading: "Chat-Application",
      text:
        "In This web-app you can login with google acount and chat with anyone you want and you can share images as well",
    },
    {
      id: 3,
      icon: <FaCamera className="commonIcons" />,
      heading:" Video-call-app",
      text:
        "In this app you can video chat with other person this is made with the help of WEB-RTC ",
    },
    {
      id: 4,
      icon: <FaCloud className="commonIcons" />,
      heading: "Weather-app",
      text:
        "This is a weather in which you can Check the weather of all over the Word",
    },
    {
      id: 5,
      icon: <FaMusic className="commonIcons" />,
      heading: "Spotify-clone",
      text:
        "Make the Spotify-clone With the help of Spotify -Api with Login authentication",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "Random-Advice",
      text:
        "Make a Web-app Which can give you a random advice Evertime",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}

                  
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>

                   
                </div>
              </div>
            ))}
          </div>
           <div class="one" >
                    <a href="https://github.com/gauravshokhanda?tab=repositories" target="_blank"><button class="round-stroke">GitHub-links</button></a>
                     
                    </div>
        </div>
      </div>
    </div>

  );
};

export default Portfolio;