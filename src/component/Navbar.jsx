import React, { useEffect, useState } from "react";
import "../style/Navbar.css"
import { MdEmail, MdFacebook, MdLightMode } from "react-icons/md";
import { RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";
const Navbar = () => {

  // light-dark mode start

  const [theme, setTheme] = useState("light-theme");
  const changeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme top-section-dark");
    } else {
      setTheme("light-theme")
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // light-dark mode end


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='top-section' style={{ backgroundColor: theme === "light-theme" ? "black" : "white" }} >
        <div className="email">
          <ul className='email-box'>
            <li>
              <a href="">
                <span className='email-center' style={{ color: theme === "light-theme" ? "white" : "black" }}>
                  <MdEmail />
                </span>
              </a>
            </li>
            <li><a href=""> <span className='text-center' style={{ color: theme === "light-theme" ? "white" : "black" }}>info@techmechindustry.com</span></a></li>
          </ul>
        </div>
        <div className="top-social">
          <ul className='social-box'>
            <li><a href=""><span style={{ color: theme === "light-theme" ? "white" : "black" }}><MdFacebook /></span></a></li>
            <li><a href=""><span style={{ color: theme === "light-theme" ? "white" : "black" }}><RiInstagramFill /></span></a></li>
            <li><a href=""><span style={{ color: theme === "light-theme" ? "white" : "black" }} ><RiLinkedinBoxFill /></span></a></li>
            <li><a href=""><span style={{ color: theme === "light-theme" ? "white" : "black" }}><RiTwitterFill /></span></a></li>
          </ul>
        </div>

        <div className="darkMode">
          <ul className='darkMode-container'>
            <li><span style={{ color: theme === "light-theme" ? "white" : "black" }}><MdLightMode onClick={() => changeTheme()} /></span></li>
          </ul>
        </div>
      </div>

      <div className="nav-section">
        <nav>
          <div className="nav">
            <div className="logo">
              <img src="images/logotm.png" alt="logo" />
            </div>
            <div className="nav-container">
              <ul className="nav-box">
                <li><a style={{ color: theme === "light-theme" ? "black" : "white" }} href="">Home</a></li>
                <li><a style={{ color: theme === "light-theme" ? "black" : "white" }} href="">Contact</a></li>
                <li><a style={{ color: theme === "light-theme" ? "black" : "white" }} href="">Product</a></li>
                <li><a style={{ color: theme === "light-theme" ? "black" : "white" }} href="">certification</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar