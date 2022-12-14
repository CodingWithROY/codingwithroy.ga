import React from 'react'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Sidebar from '../components/Sidebar'

const Token = () => {
    return (
        <>
        <Navbar />
        <Sidebar />
            <div className='dataContent'>
                <div id="tokens">
                    <h1 className="heading">Tokens</h1>
                    <div className="explain">
                        <div className="pb-4" id="defination_token">
                            <div className="explain">
                                The smallest individual unit in a program is known as a token or a lexical unit.
                            </div>
                        </div>
                        <div className="py-4" id="types_of_token">
                            <h2 className="heading2">
                                Types of Tokens
                            </h2>
                            <div className="explain">
                                <ul className="pl-8">
                                    <li>Keywords</li>
                                    <li>Identifiers</li>
                                    <li>Constants(Literals)</li>
                                    <li>Special Symbols(Punctuation)</li>
                                    <li>White Spaces</li>
                                    <li>Operators</li>
                                </ul>
                            </div>
                        </div>
                        <div className="py-4" id="keyword">
                            <h3 className="heading3">Keywords</h3>
                            <div className="explain pt-2">
                                <p>Keywords are predefined, reserved words used in programming that have special meanings to the compiler.</p>
                                <p>Ex : If, if-else, for, int, float, main, switch</p>

                            </div>
                        </div>
                        <div className="py-4" id="identifiers">
                            <h3 className="heading3">Identifiers</h3>
                            <div className="explain pt-2">
                                <p>Identifiers are the names you give to variables, types, functions, and labels in your program.</p>
                                <p>Ex : int a =  20;</p>

                            </div>
                        </div>
                        <div className="py-4" id="constant">
                            <h3 className="heading3">Constant</h3>
                            <div className="explain pt-2">
                                <p>Constant is an entity that refers to a fixed value of data and which cannot be modified.</p>
                                <p>Ex : const int a = 20;	#define pi 3.14;</p>

                            </div>
                        </div>
                        <div className="py-4" id="special_symbol">
                            <h3 className="heading3">Special symbols</h3>
                            <div className="explain pt-2">
                                <p>Special symbols are those symbols which have some special meaning and typically cannot be used in identifiers.</p>
                                <p>Ex :   \ ,  ; ,  : ,  “ ,  ‘ ,  # etc.</p>

                            </div>
                        </div>
                        <div className="py-4" id="white_space">
                            <h3 className="heading3">White Spaces</h3>
                            <div className="explain pt-2">
                                <p>The empty spaces in program are White Spaces.</p>
                                <p>Ex : int a=10;  //The space between int and a is a white space.</p>

                            </div>
                        </div>
                        <div className="py-4" id="operator">
                            <h3 className="heading3">Operators</h3>
                            <div className="explain pt-2">
                                <p>A character that represents a specific mathematical or logical action or process.</p>
                                <p>Ex : +, -, =, ==, || etc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Page previous={`datatype`} next={`operator`} />
        </>
    )
}

export default Token