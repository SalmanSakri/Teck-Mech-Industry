import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion/dist/framer-motion'
import "./style/ImgSlider.css"

const Img = () => {
    const images = [
        { src: "images/bgc.png", alt: 'Image 2' },
        { src: "images/bgf.png", alt: 'Image 2' },
        { src: "images/bgp.png", alt: 'Image 1' },
    ];
    return (
        <section>
            <Carousel
                autoPlay
                interval={2000} // Set the interval between slides (in milliseconds)
                infiniteLoop
                showThumbs={false} // Disable thumbnail navigation
                showStatus={false} // Disable status indicator
                showArrows={true} // Disable arrow navigation
            >
                {
                    images.map((image, index) => (
                        <div key={index} className='slider-container'>
                            <motion.img
                                src={image.src} 
                                alt={image.alt}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                            {/* <h3></h3> */}
                        </div>
                    ))
                }



            </Carousel>
            </section>
    )
}

export default Img