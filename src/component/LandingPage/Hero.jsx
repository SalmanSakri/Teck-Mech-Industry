import React from 'react'
import "./style/Hero.css"
import { FaDraftingCompass } from "react-icons/fa"
import { GrTechnology,GrBusinessService } from "react-icons/gr"
// GrEmergency
const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero-service" >
                <div className="ak-container">
                    <div className="effect_title">
                        <h3 className='hero-title'>About As</h3>
                        <div className="after-effet1">

                        </div>
                    </div>
                    <div className="service_slider owl-carousel owl-theme owl-loaded">
                        <div className='owl-stage-outer'>
                            <div className='hero-img' >
                                <img src="images/hero.jpg" alt="" />
                                <div className='hero-center'>
                                   <p>Welcome to <span>TECH-MECH INDUSTRY</span> Manufacturing of Mechanical Seal, Shaft, Pumps & Components.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='cards'>
                <div>
                    <div className="row">
                        <div className=" extra">
                            <i className='ihero'><GrTechnology/></i>
                            <h2>Technology</h2>
                            <p>Greater depth of experience and the blending of technological perspective position Tech-Mech
                                technologies to introduce superior technologies and quickly apply these technologies as
                                practical sealing products.</p>
                        </div>

                        <div className="extra">
                            <i className='ihero'><FaDraftingCompass /></i>
                            <h2>Quality</h2>
                            <p> We mean what we say when we taik about quality. Designing and manufacturing seals and
                                auxiliaries that exceeds our customer's expectations is an important part of our dedication of
                                total quality.</p>
                        </div>

                        <div className="extra">
                            <i className='ihero'><GrBusinessService style={{color:"green"}}/></i>
                            <h2>Service </h2>
                            <p> Round the clock and all over india, Tech-Mech staff is available to resolve customer's problems.
                                Our Enginners have great experience and technical knowledge of mechanical seals, support system
                                and rotating equipments, whice enables them to quickly point out the root cause accurately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero