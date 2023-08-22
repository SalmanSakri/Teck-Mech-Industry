import React from 'react'
import Header from '../LandingPage/Header'
import Navbar from '../Navbar'
import Dropdown from '../Dropdown'
import "./MultiSpringSeal.css"
const MultiSpringSeal = () => {
    return (
        <section>
            <Header />
            <Navbar />
            <Dropdown />
            <h2 className='product-heading'>Multi Spring Seal</h2>
            <div className='grid-container'>
                <div className='grid-item item1'>
                    <h4>TYPE VT-9/VT-9W</h4>
                    <p>Type VT-9/VT-9W are multi spring, pusher type unbalanced seals used for universal application. The seal are compact in desing suiting all types of rotating equipments, Pumps and Mixers.Drive lugs in the retainer will provide torque transmission and reduce slippage on shaft and sleeve. A snap ring holds all components together, helping in easy installation. The parts are interchangeable, VT-9 can be converted to VT-9W by just changing the seal ring and the secondary member.</p>
                </div>
                <div className='grid-item item2'>
                    <h4>TYPE VT-9B/VT-9WB</h4>
                    <p>TYPE VT-9B/VT-9WB mechanical seal are multi spring pusher type balanced seals suitable for high pressure application.</p>
                </div>
                <div className='grid-item item3'>
                    <img src="Productimg/TMS001.png" alt="MultiSpringSeal" />
                </div>

            </div>
            <div className='product-img-container'>
                <img src="Productimg/MultiSpringSealinternel.png" alt="MultiSpringSeal" />
            </div>
            <div className='product-point-conatainer'>
                <div className='product-point-box'>
                    <h4><span>1 </span> Seal Characteristics </h4>
                    <ul>
                        <li>Sing seal. </li>
                        <li>Unbalanced.</li>
                        <li>Independent of direction.</li>
                    </ul>
                </div>

                <div className='product-point-box'>
                    <h4><span>2 </span> Application </h4>
                    <ul>
                        <li>General Chemicals.</li>
                        <li>PetroChemicals.</li>
                        <li>Refineries.</li>
                        <li>Light Hydrocarbons, Water.</li>
                    </ul>
                </div>

                <div className='product-point-box'>
                    <h4><span>3 </span>Performance Range </h4>
                    <ul>
                        <li>Shaft Diameter <span>d1 : </span>18...100mm.</li>
                        <li>Pressure <span>p : </span>10 bar (max).</li>
                        <li>Temperature <span>t : </span>-20...240C.</li>
                        <li>Velocity <span>v : </span>20 m/sec.</li>
                    </ul>
                </div>

                <div className='product-point-box'>
                    <h4> <span>4 </span>Materials</h4>
                    <ul>
                        <li>Seal Faces:carbon, SiC, Tung. Carbide.</li>
                        <li>Metal Parts : SS316,Hastelloy-C,Alloy 20.</li>
                        <li>O-Ring:Elastomers/PTFE Wedge.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MultiSpringSeal