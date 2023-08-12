import React from 'react'
// import "../style/"
import Header from './Header'
import Navbar from '../Navbar';
import Img from './Img'
import Certification from './Certification';
import Hero from "./Hero"
import Productslider from "./Productslider"
const Landindpage = () => {
    return (
        <div>
            <Header />
            <Navbar/>
            <Img />
            <Hero />
            <Certification />
            <Productslider />
        </div>
    )
}

export default Landindpage