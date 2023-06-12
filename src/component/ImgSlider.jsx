import React ,{useState,useEffect}from 'react'
// import { motion } from 'framer-motion';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import "../style/ImgSlider.css"




const ImgSlider = () => {
    const images  = [
        'https://cdn.pixabay.com/photo/2018/08/03/06/59/background-3581188_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/08/03/06/59/background-3581188_1280.jpg',
        // Add more slide URLs here
      ];
      const [index, setIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);
    return (
        <div className="slider-container">
      <AnimatePresence exitBeforeEnter>
        <motion.img
          key={index}
          src={images[index]}
          alt="Slider Image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      
    </div>
    )
}

export default ImgSlider