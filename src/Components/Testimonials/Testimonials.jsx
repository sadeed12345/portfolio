import React from 'react'
import './Testimonials.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/gio.jpeg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/robin.jpeg'
import profilePic4 from '../../img/dirk.jpeg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {

const clients = [
{
    img: profilePic1,
    review:
    "Sadeed has been an incredible asset to our project. He handled both the front-end and back-end development with ease, delivering a seamless and responsive web application. Not only did he complete the project ahead of schedule, but he also provided valuable insights to improve the functionality. Highly recommend working with him!."
},
{
    img: profilePic2,
    review:
    "Working with Sadeed was a great experience. As a full-stack developer, he efficiently managed the entire project from design to deployment. His attention to detail and dedication to ensuring the code was clean and scalable stood out. Communication was clear, and he was always available to answer questions. Looking forward to working together again."
},
{
    img: profilePic3,
    review:
    "sadeed went above and beyond in developing our web platform. His ability to seamlessly integrate the front-end design with the back-end systems using React and Python made the project a success. He took the time to understand our business needs and translated them into a user-friendly and highly functional application. I would definitely hire him again."
},
{
    img: profilePic4,
    review:
    "Sadeed delivered exceptional results for our e-commerce platform, ensuring that both the user interface and server-side logic were flawlessly executed. His expertise in database management and API integration was top-notch. The project was completed on time and exceeded expectations."
}
]

  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me..</span>
            <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background:"skyblue"}}></div>
        </div>
        {/*slider */}
        <Swiper modules={[Pagination]} slidesPerView={1} pagination={{clickable:true}}>
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src= {client.img} alt="" />
                        <span>{client.review}</span>
                        </div> 
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials