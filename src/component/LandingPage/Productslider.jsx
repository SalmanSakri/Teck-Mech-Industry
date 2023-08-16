import React, { useEffect, useState } from 'react'
import "./style/Productslider.css"
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
// import Data from "index.json"

const Productslider = () => {

    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
        }
    };
    const [data, setData] = useState([])
    const getData = () => {
        fetch("index.json",
            {
                headers:
                {
                    "content-Type": "application/json",
                    "Accept": "application/json"
                }
            }).then((response) => {
                return response.json()
            }).then((myjson) => {
                console.log(myjson)
                setData(myjson.vales)
            })
    }
    useEffect(() => {
        getData()
    }, [])


    const [seals, setSeals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('index.json'); // Adjust the path as needed
        const data = await response.json();
        setSeals(data.seals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

    return (
        <section className='pro-slider'>

            <div className='pro-slider-heading'>
                <h2>PRODUCTS</h2>
            </div>
            {/* <div className='seal'>
                <h4 className='seal-heading'>1. SEALS</h4>
            </div> */}
            <Carousel additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={2000}
                centerMode={true}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={true}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass="seal-first"
                slidesToSlide={1}
                swipeable
            >
                {
                    data && data.length > 0 && data.map((value) => {
                        return (
                            <div className='pro-slider-top' key={value.id}>
                                <div className='pro-slider-box'  >
                                    <img src={value.img} alt="img" />
                                    <p className='pro-slider-heading'>{value.description} </p>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>

            {/* <div className='vales'>
                <h4 className='vales-heading' >2. VALES</h4>
            </div> */}

            <Carousel additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={true}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={true}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {
                    seals && seals.length > 0 && seals.map((value) => {
                        return (
                            <div className='pro-slider-top'key={value.id}>
                                <div className='pro-slider-box' >
                                    <img src={value.img} alt="img" />
                                    <p className='pro-slider-heading'>{value.description} </p>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </section>
    )
}

export default Productslider