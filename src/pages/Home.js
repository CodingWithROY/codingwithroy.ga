import React from 'react'
// import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "./Home.css"

const Home = () => {
    return (
        <>
            <Navbar />
            <div className={`homeContent`}>
                <div className="homeTop">
                    <p>Learn C Programming</p>
                </div>
                <div className="homeMiddle">
                    <p>With the large number of questions for practice</p>
                </div>
                <div className="homeBottom">
                    <a href="/#" className="homeBtn">Learn Now</a>
                </div>
            </div>
            {/* <div className="faq">
                <Faq />
            </div> */}
            <Footer />
        </>
    )
}

export default Home