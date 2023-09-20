import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion/dist/framer-motion'
import "./style/ImgSlider.css"
const Img = () => {
    const [data, setData] = useState([])
    const getData = () => {
        fetch("index.json", {
            headers:
            {
                "content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => {
            return response.json()})
            .then((myjson) => {
            console.log(myjson)
            localStorage.setItem('ImgData', JSON.stringify(myjson.img));
             setData(myjson.img)
            console.log(localStorage)
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
          });
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <section>
            <Carousel
                autoPlay={true}
                interval={2000} // Set the interval between slides (in milliseconds)
                infiniteLoop
                showThumbs={false} // Disable thumbnail navigation
                showStatus={false} // Disable status indicator
                showArrows={true} // Disable arrow navigation
            >
               

                {
                    data.map((value, index) => (
                        <div key={index} className='slider-container'>
                            <motion.img
                                src={value.img}
                                alt={value.alt}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                            <div className='slider-container-header'>
                                <h3 className='slider-container-header-list'>
                                    {value.heading}
                                </h3>
                            </div>

                        </div>
                    ))
                }




            </Carousel>
        </section>
    )
}

export default Img