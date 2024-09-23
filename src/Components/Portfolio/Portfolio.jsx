import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Fenris from '../../img/fenris.png'
import Quantum from '../../img/quantum.png'
import Etool from '../../img/etool.png'
import Strong from '../../img/strong.png'
import {themeContext} from '../../Context'
import {useContext} from "react"
const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id='Portfolio'>
        {/*Heading*/}
        <span  style={{color: darkMode? 'white':''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/*slider*/}
        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
            <SwiperSlide>
                <img src={Fenris} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Quantum} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Etool} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Strong} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio