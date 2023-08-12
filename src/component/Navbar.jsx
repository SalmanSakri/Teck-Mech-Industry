import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../style/Navbar.css"

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai'; 
// import PropTypes from "prop-types"
const Navbar = (props) => {
  console.log(props)

  // menu start 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (setIsOpen(!isOpen)) {
      var blur = document.getElementById("blur")
      blur.classList.toggle("active")
    }

  };
  // menu end  

  return (
    <>
      <section className="nav-section">
        <nav>
          <div className="nav">
            <div className="logo">
              <img src="images/logotm.png" alt="logo" />
            </div>

            <div className={isOpen ? "mobile-menu-link " : "nav-container "}>
              <ul className="nav-box">
                <li><Link style={{ color: props.theme === "light-theme" ? "#0c0fb1" : "black" }} to="/">Home</Link></li>
                <li><Link style={{ color: props.theme === "light-theme" ? "white" : "black" }} to="/contact">Contact</Link></li>
                <li>
                  <Link style={{ color: props.theme === "light-theme" ? "black" : "#0c0fb1" }} to="/product">Product</Link>
                </li>
                <li><Link style={{ color: props.theme === "light-theme" ? "black" : "#0c0fb1" }} to="/certification">Certification</Link></li>
              </ul>
            </div>

            <div className="menu">
              <span onClick={toggleMenu} className={isOpen ? "content blurred" : "content"}>
                {
                  isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />
                }

              </span>
            </div>
          </div>
        </nav>
      </section>

    </>
  )
}

export default Navbar