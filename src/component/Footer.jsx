import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail, MdFacebook } from "react-icons/md";
import { RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";
import { HiArrowSmRight } from "react-icons/hi";
import "../style/Footer.css"
const Footer = () => {
  return (
    <section>
      <footer>
        <div className="top">
          <div className="pages">
            <ul>
              <h3>Contact Us</h3>
              <address>
                D/102, Gulshan-E-Faiz,
                <br />
                Opp.Lords Plaza Hotel,
                <br />
                Near Railway Station,
                <br />
                GIDC Ankleshwar-393002 Bharuch,
                <br />
                Gujarat, India..
                <br />
                <br />
                <abbr title="Phone">Tel : </abbr>
                +91 8898550808
                <br />
                <abbr title="Email">Email : </abbr>
                info@techmechindustry.com
                <br />
                <abbr title="Email">Email : </abbr>
                sales@techmechindustry.com
              </address>
            </ul>

            <ul className='footer-ul'>
              <h3>Our Products</h3>
              <li className='footer-list'>
                <i><HiArrowSmRight /></i>
                <Link to="/">Multi Spring Seal</Link >
              </li>
              <li>
                <i><HiArrowSmRight /> </i>
                <Link to="/">Sing Coil Spring Seal</Link >
              </li>
              <li>
                <i><HiArrowSmRight /></i>
                <Link to="/">Reverse Balance Seal</Link >
              </li>
              <li>
                <i><HiArrowSmRight /></i>
                <Link to="/">PTFE Bellow Seals</Link >
              </li>
              <li>
                <i><HiArrowSmRight /></i>

                <Link to="/">High Pressure Seals</Link > </li>
              <li>
                <i><HiArrowSmRight /></i>
                <Link to="/">Slury Seals</Link >
              </li>
            </ul>

            <ul className='footer-ul'>
              <h3>About Us</h3>
              <li><i><HiArrowSmRight /> </i><Link to="/">Home</Link ></li>
              <li>
                <i><HiArrowSmRight /></i>
                <Link to="/">About</Link >
              </li>
              <li>
                <i><HiArrowSmRight /></i>
                <Link to="/">Certification</Link >
              </li>
              <li>
                <i><HiArrowSmRight /></i>
                <Link to="/">Products</Link >
              </li>
            </ul>
          </div>
        </div>
        <div className="social">
          <i><MdEmail /> </i>
          <i><MdFacebook /></i>
          <i><RiInstagramFill /></i>
          <i><RiLinkedinBoxFill /></i>
          <i><RiTwitterFill /></i>
        </div>
        <div className="info">
          {/* <div className="legal">
            <Link to="/">Terms & Conditions</Link ><Link to="/">Privacy Policy</Link >
          </div> */}
          <div className="copyright">All Rights Reserved &copy; 2023 | Techmechindustry</div>
        </div>
      </footer>
    </section>
  )
}

export default Footer