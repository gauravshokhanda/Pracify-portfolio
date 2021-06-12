import React from "react";

const Skills = () => {
  const [header] = React.useState({
    mainHeader: "SKILLS",
   
    
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "HTML",
     
    },
    {
      id: 2,
      heading: "CSS",
     
    },
    {
      id: 3,
      heading: "JAVASCRIPT",
      
    },
     {
      id: 4,
      heading: "REACTJS",
     
    },
     {
      id: 5,
      heading: "REDUX",
      
    },
     {
      id: 6,
      heading: "FIREBASE",
     
    },
  ]);
  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
         
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">{prices.heading}
                </div>                                              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;