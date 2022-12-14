import React from 'react'
import "./About.css"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import rohit from "../images/rohit.jpg"
import prashant from "../images/prashant.jpg"

const About = () => {
  return (
    <>
      <Navbar />
      <div className="aboutMain">
        <div className="aboutTop">
          <h1 className="aboutMainHeading">
            About CodingWithROY
          </h1>
          {/* <p className='aboutDetail'>Come help us build the education the world deserves.</p> */}
        </div>
        <div className="aboutMiddle">
          <div className="aboutMiddleLeft">
            <h1 className="aboutHeading">
              Our History
            </h1>
            <p className='aboutDetail'>When we started Codecademy, our goal was to give anyone in the world the ability to learn the skills they’d need to succeed in the 21st century. We set out to create a new, interactive way of learning — making it engaging, flexible, and accessible for as many people as possible. Since then, we have helped millions of people worldwide unlock modern technical skills and reach their full potential through code.</p>
          </div>
          <div className="aboutMiddleRight">
            <h1 className="aboutHeading">
              Our Mission
            </h1>
            <p className='aboutDetail'>We want to create a world where anyone can build something meaningful with technology, and everyone has the learning tools, resources, and opportunities to do so. Code contains a world of possibilities — all that’s required is the curiosity and drive to learn. At Codecademy, we are committed to empowering all people, regardless of where they are in their coding journeys, to continue to learn, grow, and make an impact on the world around them.</p>
          </div>
        </div>
        <div className="aboutBottom">
          <h1 className='aboutHeading'>Our Team</h1>
          <div className='aboutBottomImages'>
            <div>
              <img src={rohit} alt="Rohit" width="200px" className='aboutImages'/>
              <h3>Web Devloper</h3>
              <p>Senior Content Manager</p>
            </div>
            <div>
              <img src={prashant} alt="Prashant" width="200px" className='aboutImages'/>
              <h3>Web Devloper</h3>
              <p>Senior Creative Director</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About