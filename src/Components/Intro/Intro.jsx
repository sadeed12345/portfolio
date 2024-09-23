import React from 'react'
import './Intro.css';
import Github from '../../img/github.png'
import Linkdein from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {themeContext} from '../../Context'
import {useContext} from 'react'
import {motion} from 'framer-motion'

const Intro = () => {

    const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='intro'>
        <div className="i-left">
        
        </div>
        <div className="i-name">
            <span style={{color: darkMode? 'white': ''}}>Hey! I Am</span>
            <span>Sadeed Ur Rehman</span>
            <span>Senior Software developer with high level of experience in backend and development, producing the 
                Quality work. </span>
                <button 
                className='button i-button' 
                onClick={() => window.open('https://calendly.com/sadeed1999-xam9/30min', '_blank')}
                >
                Hire Me
                </button>

                <div className="i-icons">
                    <a href="https://github.com/sadeed12345" target='_blank'><img src={Github} alt=""/></a>
                    <a href="https://www.linkedin.com/in/sadeed-rehman-92b88a20a/" target='_blank'><img src={Linkdein} alt=""/></a>
                    <a href="https://www.instagram.com/rehman_sadee?igsh=MWFqZjQxaWhnMGg3dg%3D%3D&utm_source=qr" target='_blank'><img src={ Instagram} alt=""/></a>
                    
                </div>
        </div>
       <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" style={{width:"35%", borderRadius:100, marginTop:100, marginLeft:30}}/>
            <motion.img
            initial={{left: '-36%'}}
            whileInView={{left: '-24%'}}
            transition={{transition}}
            src={glassesimoji} alt="" />
            <motion.div 
            initial={{top: '-4%', left: '74%'}}
            whileInView={{left: '68%'}}
            transition={{transition}}
            style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={Crown} txt1='Backend' txt2='Developer'/>
            </motion.div>
            <motion.div
            initial={{left: '9%', top: '18%'}}
            whileInView={{left: '0rem'}}
            transition={{transition}}
            style={{top: '18rem', left: '0rem', marginTop:200, marginLeft:-100}}>
                <FloatingDiv image={thumbup} txt1='Hackathon' />
            </motion.div>
            {/*blur divs*/}
            <div className="blur" style={{background: "rgb(238 210 255)"}}> </div>
            <div className="blur" style={{background: "rgb(193 245 255)", top:"17rem", width:"21rem", height:"11rem",left:"-9rem"}}></div>
       </div>
    </div>
  )
}

export default Intro