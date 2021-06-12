import React from "react";
import {Link} from "react-scroll";
import { FaAlignJustify } from "react-icons/fa";
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/logo1.png" alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
             <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            > 

                   <li>
                <a href="">Home</a>
              </li>

            </Link>
             
             <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            > 

                   <li>
                <a href="">Portfolio</a>
              </li>

            </Link>
              <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            > 

                  <li>
                <a href="">About</a>
              </li>

            </Link>

              <Link
              activeClass="active"
              to="prices"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            > 

                   <li>
                <a href="">Skills</a>
              </li>

            </Link>
              <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            > 

                   <li>
                <a href="">Contact</a>
              </li>

            </Link>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;