import React from 'react'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Sidebar from '../components/Sidebar'

const Operator = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
        <div className="dataContent">
                <div id="operators">
                    <h1 className="heading">Operators</h1>
                    <div className="explain">
                        <div className="pb-4" id="defination_operators">
                            <div className="explain tracking-wide">
                                An operator is a character that represents a specific mathematical or logical action or process.
                            </div>
                        </div>
                        <div className="py-4" id="types_of_operators">
                            <h2 className="heading2">
                                Types of Operators
                            </h2>
                            <div className="explain tracking-wide">
                                <ul className="pl-8">
                                    <li>Arithmetic Operators</li>
                                    <li>Relational Operators</li>
                                    <li>Logical Operators</li>
                                    <li>Assignment Operators</li>
                                    <li>Bitwise Operators</li>
                                    <li>Increment and Decrement Operators</li>
                                    <ul className="pl-8">
                                        <li>Pre increment and Pre decrement</li>
                                        <li>Post increment and Post decrement</li>
                                    </ul>
                                    <li>Conditional Operator</li>
                                    <li>Special Operators</li>
                                    <li>Types of Special Operators </li>
                                    <ul className="pl-8">
                                        <li>Comma Operator</li>
                                        <li>Sizeof Operator</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className="py-4" id="airthmetic_operators">
                            <h3 className="heading3">Arithmetic Operators</h3>
                            <div className="explain pt-2">
                                <p>An arithmetic operator performs mathematical operations such as addition, subtraction, multiplication, division etc on numerical values (constants and variables).</p>
                                <p>Ex : +, -, *, /, %</p>

                            </div>
                        </div>
                        <div className="py-4" id="relational_operators">
                            <h3 className="heading3">Relational Operators</h3>
                            <div className="explain pt-2">
                                <p>A relational operator checks the relationship between two operands. If the relation is true, it returns 1; if the relation is false, it returns 0. </p>
                                <p>Ex : {`==, >, <, <=, >=, !=`}</p>

                            </div>
                        </div>
                        <div className="py-4" id="logical_operators">
                            <h3 className="heading3">Logical Operators</h3>
                            <div className="explain pt-2">
                                <p> An expression containing logical operator returns either 0 or 1 depending upon whether expression results true or false. Logical operators are commonly used in decision making in C programming.</p>
                                <p>Ex : &&, ||, !</p>

                            </div>
                        </div>
                        <div className="py-4" id="bitwise_operators">
                            <h3 className="heading3">Bitwise Operators</h3>
                            <div className="explain pt-2">
                                <p>During computation, mathematical operations like: addition, subtraction, multiplication, division, etc are converted to bit-level which makes processing faster and saves power.</p>
                                <p>Ex : {`&, |, ~ ,<<, >>`}</p>

                            </div>
                        </div>
                        <div className="py-4" id="increment_decrement__operators">
                            <h3 className="heading3">Increment and Decrement Operators</h3>
                            <div className="explain pt-2">
                                <p>C programming has two operators increment ++ and decrement -- to change the value of an operand (constant or variable) by 1. Increment ++ increases the value by 1 whereas decrement -- decreases the value by 1. These two operators are unary operators, meaning they only operate on a single operand.</p>
                                <p>Ex : int a=10;  //The space between int and a is a white space.</p>
                            </div>
                        </div>
                        <div className="py-4" id="types_increament_decrement_operators">
                            <h3 className="heading3">Types of Increment and Decrement Operators: </h3>
                            <div className="explain pt-2">
                                <ul className="pl-8">
                                    <p><strong>Pre increment pre decrement(++a, --a)</strong> : Before assigning the value to the variable, the value is incremented by one.</p>
                                    <p><strong>Post increment post decrement(a++, a--) </strong>: After assigning the value to the variable, the value is incremented.</p>
                                </ul>
                            </div>
                        </div>
                        <div className="py-4" id="conditional_operators">
                            <h3 className="heading3">Conditional Operator</h3>
                            <div className="explain pt-2">
                                <p>A ternary Operator(?:) is called a conditional operator.</p>
                                <p>Ex : ternary operator (?:).</p>
                            </div>
                        </div>
                        <div className="py-4" id="special_operators">
                            <h3 className="heading3">Special Operators</h3>
                            <div className="explain pt-2">
                                <p>C programming has two operators increment ++ and decrement -- to change the value of an operand (constant or variable) by 1. Increment ++ increases the value by 1 whereas decrement -- decreases the value by 1. These two operators are unary operators, meaning they only operate on a single operand.</p>
                                <p>Ex : int a=10;  //The space between int and a is a white space.</p>
                            </div>
                        </div>
                        <div className="py-4" id="types_special_operators">
                            <h3 className="heading3">Types of Special Operators : </h3>
                            <div className="explain pt-2">
                                <ul className="pl-8">
                                    <p><strong>Comma Operator</strong> : The comma operator is basically a binary operator that initially operates the first available operand, discards the obtained result from it, evaluates the operands present after this, and then returns the result/value accordingly.</p>
                                    <p><strong>Sizeof Operator</strong>: The sizeof is a unary operator that returns the size of data (constants, variables, array, structure, etc).</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Page previous={`token`} next={`priority`} />
    </>
  )
}

export default Operator