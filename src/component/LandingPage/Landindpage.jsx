import React from 'react'
// import "../style/"
import Header from './Header'
import Navbar from '../Navbar';
import Img from './Img'
import Certification from './Certification';
import Hero from "./Hero"
import Productslider from "./Productslider"
// import Material from "./Material"
const Landindpage = () => {
    return (
        <div>
            <Header />
            <Navbar/>
            <Img />
            <Hero />
            <Certification />
            <Productslider />
            {/* <Material/> */}
        </div>
    )
}

export default Landindpage