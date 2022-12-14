import React from 'react'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Sidebar from '../components/Sidebar'

const Hello = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
        <div className=" dataContent mt-10 ">
            <div id="hello">
                <h1 className="heading text-5xl text-black font-bold py-7 underline">Hello World</h1>
                <div className="explain">
                    <div className="py-4" id="hello_world_program">
                        <h2 className="heading2 text-3xl text-black font-semibold py-2">
                            Hello World Program in C
                        </h2>
                        <div className="explain tracking-wide">
                            <pre className="line-numbers rounded-xl">
                                <code className={`language-c`}>
                                    {`#include<stdio.h>                 //Header File or Pre-processing directive
int main(){                       //Main Function starts from here 
printf(“Hello World”);        //Print or give output Hello World
return 0;                     //Main Function returning nothing/null/zero 
}                                 //Main Function ends here`}
                                </code>
                            </pre>
                        </div>
                        <h3 className="text-xl font-semibold pt-4">Explain</h3>
                        <div className="explain tracking-wide">
                            <ul className="list-disc pl-8">
                                <li>Every C program starts with main function and execute statements/instructions given to function.</li>
                                <li>Every statement ends with a semi-colon(;).</li>
                                <li>C language is case sensitive means we have to take care of the use of capital and small letters.</li>
                                <li>It executes the instruction from top to bottom or as written in the instructions.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-4" id="imp_ques_1">
                        <h2 className="heading2 text-3xl text-black font-semibold py-2">
                            Important Questions
                        </h2>
                        <div className="explain tracking-wide">
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q1. What are pre-processor directive ?</p>
                                <p>Ans. Pre procesor directive tells the C preprocessor to include the contents of the file specified in program to the compiler and then continue with the rest of the original file.</p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q2. What is the structure of C Program ?</p>
                                <span>Ans. <ul className="list-disc pl-12">
                                    <li>Documentation Section(Comments)</li>
                                    <li>Link Section(Header files)</li>
                                    <li>Definition Section(Defining)</li>
                                    <li>Global Declaration Section(Global declarations)</li>
                                    <li>Main Function Section(Main functions</li>
                                    <li>Sub-Program Section(User-defined functions)</li>
                                </ul>
                                </span>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q3. Why &(ampersand) is used with variables in scanf() but not in printf() ?</p>
                                <p>Ans. Printf() is a function in which variables are passed via <b>call by value</b> method but in scanf() variables are passed via <b>call by reference.</b></p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q4. Can we define our own header files ?</p>
                                <p>Ans. Yes, we can create our own header files .Include it in “ “ (Double Quotes) like <b>#include "codingwithroy.h"</b></p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q5. Can header files include main() function ?</p>
                                <p>Ans. No, header files are always included into C programs and one program cannot have two main functions.</p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q6. I read two int values using scanf() statement I provide space in two %d then it did not read the values properly , why ?</p>
                                <p>Ans. Space is not allowed in two format specifiers while using scanf() statement it tries to assign second value to space and store garbage value in the second variable .So, avoid space in format specifiers.</p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q6. Is indentation mandatory?</p>
                                <p>Ans. No, indentation is not mandatory but to make program easy to read and understand use indentation into your programs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Page previous={`installation`} next={`variables`} />
    </>
  )
}

export default Hello