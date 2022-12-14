import React from 'react'
import "./Contact.css"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import logo from "../images/logo.png"

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contactMain">
        <section className="contactSection">
          <div className="container flex justify-center items-center">
            <div className="card">
              <div className="contactCard">Ask me Anything!</div>
              <img src={logo} alt="Logo" className="contactImage" style={{ borderRadius: "100%" }} />
              <div className="contactCard">contact.royad@gmail.com</div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Contact