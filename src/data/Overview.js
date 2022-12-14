import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Page from '../components/Page'

const Overview = () => {
    return (
        <>
        <Navbar/>
        <Sidebar/>
            <div className="dataContent overflow-auto">
                <div id="introduction" className="mb-10">
                    <h1 className="heading">Introduction</h1>
                    <div className="explain">
                        <div className="py-4" id="what_is_prog">
                            <h2 className="heading2">
                                What is Programming?
                            </h2>
                            <div className="explain">
                                Programming is a way to communicate with computers same as we use languages like Hindi, English or whatever language in we communicate.
                            </div>
                        </div>
                        <div className="py-4" id="why_we_need_prog">
                            <h2 className="heading2">
                                Why we need Programming?
                            </h2>
                            <div className="explain">
                                Computers cannot understand Hindi English so we use programming languages to communicate with computers.
                            </div>
                        </div>
                        <div className="py-4" id="what_is_c">
                            <h2 className="heading2">
                                What is C?
                            </h2>
                            <div className="explain">
                                C is a structured programming language. It was initially developed by Dennis Ritchie in the year 1972. It was developed as a system programming language to write an operating system.
                            </div>
                        </div>
                        <div className="py-4" id="why_to_use_c">
                            <h2 className="heading2">
                                Why to use C?
                            </h2>
                            <div className="explain">
                                <ul className="pl-8">
                                    <li>Many Operating systems are made in c like Windows, Linux etc.</li>
                                    <li>Many Programming languages are also made in c like C++, Python etc.</li>
                                    <li>C has also been used in creating iOS and Android kernels.</li>
                                    <li>C is remarkably close to hardware level so we can manipulate memory.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="py-4" id="how_c_is_diff">
                            <h2 className="heading2">
                                How C is different from another language?
                            </h2>
                            <div className="explain">
                                <ul className="pl-8">
                                    <li>C is a structured programming language which allows a complex program to be broken into simpler programs called functions</li>
                                    <li>It does not allow you to use function overloading(function overloading is the ability to create multiple functions of the same name with different implementations).</li>
                                    <li>It is procedural language it means it simply contain a series of computational steps to be carried out.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Page previous={`operators`} next={`flow`}/>
        </>
    )
}

export default Overview