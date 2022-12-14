import React from 'react'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Sidebar from '../components/Sidebar'

const Priority = () => {
    return (
        <>
        <Navbar/>
        <Sidebar/>
            <div className="dataContent">
                <div id="tokens">
                    <h1 className="heading text-5xl text-black font-bold py-7 underline">Priority</h1>
                    <div className="explain">
                        <div className="py-4" id="keyword">
                            <h3 className="text-xl font-semibold pt-4">Precedence</h3>
                            <div className="explain tracking-wide pt-2">
                                <p>It represents the evaluation of expression starts from "what" operator. Precedence determines which operator is performed first in an expression with more than one operators with different precedence.</p>

                            </div>
                        </div>
                        <div className="py-4" id="keyword">
                            <h3 className="text-xl font-semibold pt-4">Associativity</h3>
                            <div className="explain tracking-wide pt-2">
                                <p>It represents which operator should be evaluated first if an expression is containing more than one operator with same priority. Associativity can be either Left to Right or Right to Left.</p>
                                <p>Ex :  ‘*’ and ‘/’ have same precedence and their associativity is Left to Right, so the expression “100 / 10 * 10” is treated as “(100 / 10) * 10”.</p>
                            </div>
                        </div>
                        <div className="py-4" id="imp_ques_1">
                            <h2 className="heading2 text-3xl text-black font-semibold py-2">
                                Important Questions
                            </h2>
                            <div className="explain tracking-wide">
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q1. What is the difference between precedence and associativity?</p>
                                    <p>Ans. Operator precedence determines which operator is performed first in an expression with more than one operators with different precedence. Operators Associativity is used when two operators of same precedence appear in an expression. Associativity can be either Left to Right or Right to Left.</p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q2. All operators with the same precedence have same associativity?</p>
                                    <p>Ans. Yes, this is necessary, otherwise, there won’t be any way for the compiler to decide evaluation order of expressions which have two operators of same precedence and different associativity. For example + and – have the same associativity.</p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q3. Precedence and associativity of postfix ++ and prefix ++ are different?</p>
                                    <p>Ans. Precedence of postfix ++ is more than prefix ++, their associativity is also different. Associativity  of postfix ++ is left to right and associativity of prefix ++ is right to left.</p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q5. Which operator has lowest priority?</p>
                                    <p>Ans.  , (comma) operator has lowest priority. Operator precedence determines the grouping of terms in an expression and decides how an expression is evaluated.</p>
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
            <Page previous={`operator`} next={`decisionmaking`} />
        </>
    )
}

export default Priority