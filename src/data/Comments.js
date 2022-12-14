import React from 'react'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Sidebar from '../components/Sidebar'

const Comments = () => {
    return (
        <>
        <Navbar />
        <Sidebar />
            <div className="dataContent">
                <div id="comments">
                    <h1 className="heading">Comments</h1>
                    <div className="explain">
                        <div className="pb-4" id="defination_comments">
                            <div className="explain">
                                Comments are those lines of code that compiler will ignore or not compile when you run your program.
                            </div></div>
                        <div className="py-4" id="types_of_comments">
                            <h2 className="heading2">
                                Types of comments
                            </h2>
                            <ul className="pl-8">
                                <li>Single-line comments(Used to comment single line)</li>
                                <li>Multi-line comments(Used to comment multiple lines)</li>
                            </ul>
                            <pre className="line-numbers rounded-xl">
                                <code className={`language-c`}>
                                    {`#include<stdio.h> 	// This is a Single-line comment
int main(){
    /* This 
    is 
    a
    Multi-line 
    comment */
    printf(“Hello World”);
    return 0;
}`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
            <Page previous={`variables`} next={`datatype`} />
        </>
    )
}

export default Comments