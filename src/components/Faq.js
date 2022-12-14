import React from 'react'
import "./Faq.css"
import Accordion from './Accordion';

const Faq = () => {
    return (
        <>
            <div className="main">
                <h1>Frequently Asked Questions</h1>
                <Accordion />
            </div>
        </>
    )
}

export default Faq