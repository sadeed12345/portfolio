import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import FB from '@iconscout/react-unicons/icons/uil-facebook'
import GitHub from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} style={{width:'100%'}} alt="" />
        <div className="f-content">
            <span>sadeed1999@gmail.com</span>
            <div className="f-icons">

               <a href='https://www.instagram.com/rehman_sadee?igsh=MWFqZjQxaWhnMGg3dg%3D%3D&utm_source=qr' target= '_blank' rel="noreferrer"> <Insta color='white' size='3rem' /></a>
               <a href='https://www.facebook.com/sadeed.rehman.10/' target= '_blank' rel="noreferrer"> <FB color='white' size='3rem'/></a>
               <a href='https://github.com/sadeed12345' target= '_blank' rel="noreferrer"> <GitHub color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer