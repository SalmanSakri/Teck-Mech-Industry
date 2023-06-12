import React from 'react'
// import img from "../images/bgc.png"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
const img = () => {
    const images = [
          { src:"../bgc.png", alt: 'Image 2' },
          { src: 'https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg', alt: 'Image 2' },
    { src: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg', alt: 'Image 1' },
    { src: 'https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_1280.jpg', alt: 'Image 3' },
  ];
    return (
        <div>
            <Carousel
                autoPlay
                interval={3000} // Set the interval between slides (in milliseconds)
                infiniteLoop
                showThumbs={false} // Disable thumbnail navigation
                showStatus={false} // Disable status indicator
                showArrows={true} // Disable arrow navigation
            >
                {images.map((image, index) => (
                    <div key={index} className='slider-container'>
                        <motion.img
                            src={image.src}
                            alt={image.alt}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                    </div>
                ))}
            </Carousel></div>
    )
}

export default img