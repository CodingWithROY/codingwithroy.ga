import React from 'react'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Sidebar from '../components/Sidebar'

const Variables = () => {
  return (
    <>
    <Navbar/>
    <Sidebar />
        <div className='dataContent'>
                <div id="variables">
                    <h1 className="heading">Variables</h1>
                    <div className="explain">
                        <div className="pb-4" id="defination_var">
                            <div className="explain">
                                <p>A variable is a storage location where we can store values and manipulate that value if needed, same as we have containers to store oil, water, etc.</p>
                            </div>
                            <h2 className="heading2">Different types of variables</h2>
                            <div className="explain">
                                <ul className="pl-8">
                                    <li>For declarating integer variables, we use <b>int</b> keyword.</li>
                                    <li>For declarating float variables, we use <b>float</b> keyword.</li>
                                    <li>For declarating double variables, we use <b>double</b> keyword.</li>
                                    <li>For declarating character variables, we use <b>char</b> keyword.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="py-4" id="declaring_Variable">
                            <h2 className="heading2">Declaration</h2>
                            <div className="explain">
                                <p>For declaration we follow this syntax</p>
                                <pre className="line-numbers rounded-xl">
                                    <code className={`language-c`}>
                                        {`data_type variable_name = variable_value;
//eg:
int a = 8;
float b = 3.2;
double num = 1.232;
char letter = 'C';`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                        <div className="py-4" id="rule_for_decl_var">
                            <h2 className="heading2">Rules for declaring a variable</h2>
                            <div className="explain">
                                <ul className="pl-8">
                                    <li>A variable name contains <b>alphabets, digits, and underscore</b>. eg : num, num1, _num</li>
                                    <li><b>No whitespace</b> is allowed in variable name. eg : num 1 (not a variable name)</li>
                                    <li>It <b>can't start with digits</b>. It can start with alphabet and underscore only. eg : _num, num, num1.</li>
                                    <li>It must not be a <b>reserved keyword</b> or word. eg : int,float,char etc</li>
                                </ul>
                            </div>
                        </div>
                        <div className="py-4" id="local_variable">
                            <h2 className="heading2">Local variables</h2>
                            <div className="explain">
                                <ul className="pl-8">
                                    <li>The variables declared inside a function is known as a local variable.</li>
                                    <li>The scope of local variables is throughout the block, i.e., we can't access a local variable from outside the "block" in which we declared it.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="py-4" id="global_variable">
                            <h2 className="heading2">Global variables</h2>
                            <div className="explain">
                                <ul className="pl-8">
                                    <li>The variables declared outside the function is known as global variables.</li>
                                    <li>The scope of global variables is throughout the file, i.e. all the functions in afile can access it.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="py-4" id="imp_ques_1">
                            <h2 className="heading2">
                                Important Questions
                            </h2>
                            <div className="explain">
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q1. Why int and long are two data types for storing integer values in memory? Is long alone sufficient?</p>
                                    <p>Ans. No, Using 'long' waste our memory space like using 'long' to store no. of students in a single class is wastage of memory and memory is one of the valuable resource of our computer system</p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q2. Identifiers can take alphabets, digits and underscore but when I take 2020_roll as identifier Compiler generates an error message. Kindly tell me why it happened?</p>
                                    <p>Ans. The first character of identifier cannot be digit that is the rule of naming variables, so compiler generates an error message.</p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q3. Character constant should take single character but ‘\n’ and ‘\t’ takes two characters, why?</p>
                                    <p>Ans. All escape sequences like ‘\n and ‘\t’ are special characters preceded by \ .</p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q4. Can we change value of constant defined by #define?</p>
                                    <p>Ans. No, Constant of any type cannot be modified</p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q5. I store my city population in int variable it is 50000 but when I print it was some garbage value why it happened?</p>
                                    <p>Ans. You worked on 16 bit compiler. int take two bytes and can store value in range -32768 to 32767 so 50000 cannot be stored in this variable you can take long to store this value.</p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q6.
                                        <pre className="font-normal line-numbers rounded-xl">
                                            <code className={`language-c`}>
                                                {`char c=125;
c=c+5; 
printf(“%d”,c);
`}
                                            </code>
                                        </pre>
                                        I was expecting it should print error message as 130 is out of char range but it print some garbage negative value, why ?</p>
                                    <p>Ans. That is not a garbage value, when t reaches at 127 it starts from -128 so it print -126</p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q7. Can we use char ch=’12’?</p>
                                    <p>Ans. Yes, we can use but rarely it requires.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Page previous={`hello`} next={`comments`} />
    </>
  )
}

export default Variables