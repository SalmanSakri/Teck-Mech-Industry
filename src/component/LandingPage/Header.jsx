import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MdEmail, MdFacebook } from "react-icons/md";
// MdLightMode
import { RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";
const Header = () => {

    // light-dark mode start
    const [theme, setTheme] = useState("light-theme");
    const changeTheme = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme");
        } else {
            setTheme("light-theme")
        }
    }
console.log(changeTheme)
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    // light-dark mode end

    return (
        <section className='Header'>
            <div className='top-section' style={{ backgroundColor: theme === "light-theme" ? "black" : "white" }} >
                <div className="email">
                    <ul className='email-box'>
                        <li>
                            <Link to="/">
                                <span className='email-center' style={{ color: theme === "light-theme" ? "white" : "black" }}>
                                    <MdEmail />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className='text-center' style={{ color: theme === "light-theme" ? "white" : "black" }}>info@techmechindustry.com
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="top-social">
                    <ul className='social-box'>
                        <li>
                            <Link to="/">
                                <span style={{ color: theme === "light-theme" ? "white" : "black" }}>
                                    <MdFacebook />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span style={{ color: theme === "light-theme" ? "white" : "black" }}>
                                    <RiInstagramFill />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span style={{ color: theme === "light-theme" ? "white" : "black" }} >
                                    <RiLinkedinBoxFill />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span style={{ color: theme === "light-theme" ? "white" : "black" }}>
                                    <RiTwitterFill />
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="darkMode">
                    <ul className='darkMode-container'>
                        <li>
                            <span style={{ color: theme === "light-theme" ? "white" : "black" }}>
                                {/* <MdLightMode onClick={() => changeTheme()} /> */}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Header