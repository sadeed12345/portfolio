import React from 'react'
import './Works.css'
import Fenris from '../../img/images.jpeg'
import Aqua from '../../img/aqua.png'
import Brib from '../../img/brib.jpeg'
import Etools from '../../img/etools.png'
// import Facebook from '../../img/Facebook.png'
import {themeContext} from '../../Context'
import {useContext} from "react"
import {motion} from 'framer-motion'

const Works = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="works">
        <div className="awesome">
            <span  style={{color: darkMode? 'white':''}}>Works for All these</span>
            <span>Brands & Clients</span>
            <span>FENRIS is your contact for complete solutions in amateur and professional sports. <br /> Aqua Security is the pioneer in securing containerized cloud native applications from development to production.
             <br />brib, Your Partner in Design, Development, Sourcing, and Management. <br />Etools ,We help you grow your dispatch business to the next level</span>
            
             <button 
                className='button i-button' 
                onClick={() => window.open('https://calendly.com/sadeed1999-xam9/30min', '_blank')}
                >
                Hire Me
                </button>
            
            <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>
        {/*right side*/}
        <div className="w-right">
            <motion.div 
            
            initial={{rotate:45}}
              whileInView={{rotate:0}} 
              viewport={{margin:'-40px'}}
              transition={{duration:3.5, type:'spring'}}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Fenris} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Aqua} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Brib} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Etools} alt="" />
                </div>
                {/* <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div> */}
            </motion.div>
            <div className="w-backCircle blueCircle">

            </div>
            <div className="w-backCircle yellowCircle">
                
            </div>
        </div>
    </div>
  )
}

export default Works