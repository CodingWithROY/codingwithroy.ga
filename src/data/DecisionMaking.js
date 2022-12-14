import React from 'react'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Sidebar from '../components/Sidebar'

const DecisionMaking = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
        <div className="dataContent">
                <div id="tokens">
                    <h1 className="heading text-5xl text-black font-bold py-7 underline">Decision Making Statements</h1>
                    <div className="explain">
                        <div className="pb-4" id="defination_token">
                            <div className="explain tracking-wide">
                                Decision making statements allow you to decide the order of execution of specific statements in your program. You can set up a condition and tell the compiler to take a particular action if the condition is met. In case the condition is not met, you can instruct the compiler to execute a different block of code.
                            </div>
                        </div>
                        <div className="py-4" id="keyword">
                            <h2 className="heading2 text-3xl text-black font-semibold py-2">
                                Decision making with if statements
                            </h2>
                            <div className="explain tracking-wide pt-2">
                                <p>The if statement is the simplest example of a decision structure. In an if statement a logical test is made which can evaluate to either true or false. If the result of the test is true, the statements in the if branch are executed.</p>
                            </div>
                        </div>
                        <div className="py-4" id="types_of_token">
                            <h2 className="heading2 text-3xl text-black font-semibold py-2">
                                Types of Decision making with if statements
                            </h2>
                            <div className="explain tracking-wide">
                                <ul className="list-disc pl-8">
                                    <li>Simple if statement</li>
                                    <li>if-else statement</li>
                                    <li>Nested if statement</li>
                                    <li>if-else-if statement (if-else ladder)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="py-4" id="keyword">
                            <h3 className="text-xl font-semibold pt-4">Simple if statement</h3>
                            <div className="explain tracking-wide pt-2">
                                <p>This is the simplest version of decision control statements, which is frequently used in decision making for single condition.</p>
                            </div>
                        </div>
                        <h4 className="text-lg font-semibold pt-4">Syntax of simple if statement</h4>
                        <div className="explain tracking-wide">
                            <pre className="line-numbers rounded-xl">
                                <code className={`language-c`}>
                                    {`if(condition)
{ 
    Statements to be executed;
}`}
                                </code>
                            </pre>
                        </div>
                        <div className="py-4" id="keyword">
                            <h3 className="text-xl font-semibold pt-4">if-else statement</h3>
                            <div className="explain tracking-wide pt-2">
                                <p>In this if-else statement, if the test-expression/condition is true some set of statements will be executed, and if the condition is not true some another set of statements will be executed.</p>
                            </div>
                        </div>
                        <h4 className="text-lg font-semibold pt-4">Syntax of if-else statement</h4>
                        <div className="explain tracking-wide">
                            <pre className="line-numbers rounded-xl">
                                <code className={`language-c`}>
                                    {`if(condition)
{
    Statements to be executed;
}
else
{
    Statements to be executed;
}`}
                                </code>
                            </pre>
                        </div>
                        <div className="py-4" id="keyword">
                            <h3 className="text-xl font-semibold pt-4">Nested if statement</h3>
                            <div className="explain tracking-wide pt-2">
                                <p>Writing ‘if statement’ inside another if statement is called nested if statement.</p>
                            </div>
                        </div>
                        <h4 className="text-lg font-semibold pt-4">Syntax</h4>
                        <div className="explain tracking-wide">
                            <pre className="line-numbers rounded-xl">
                                <code className={`language-c`}>
                                    {`if(condition)
{
    if(condition)
    {
        Statements to be executed;
    }
    else
    {
        Statements to be executed;
    }
}
else
{
    Statements to be executed;
}`}
                                </code>
                            </pre>
                        </div>
                        <div className="py-4" id="keyword">
                            <h3 className="text-xl font-semibold pt-4">if-else-if statement</h3>
                            <div className="explain tracking-wide pt-2">
                                <p>A common programming concept that is based upon nested ifs</p>
                            </div>
                        </div>
                        <h4 className="text-lg font-semibold pt-4">Syntax</h4>
                        <div className="explain tracking-wide">
                            <pre className="line-numbers rounded-xl">
                                <code className={`language-c`}>
                                    {`if(condition)
{
    Statements to be executed;
}
else if
{
    Statements to be executed;
}
else
{
    Statements to be executed;
}`}
                                </code>
                            </pre>
                        </div>
                        <div className="py-4" id="keyword">
                            <h2 className="heading2 text-3xl text-black font-semibold py-2">
                                Decision making with ternary operators
                            </h2>
                            <div className="explain tracking-wide pt-2">
                                <p>Programmers use the ternary operator for decision making in place of longer if and else conditional statements.</p>
                            </div>
                        </div>
                        <div className="explain tracking-wide">
                            <pre className="line-numbers rounded-xl">
                                <code className={`language-c`}>
                                    {`c = (a < b) ? a : b;`}
                                </code>
                            </pre>
                        </div>
                        <div className="py-4" id="keyword">
                            <h2 className="heading2 text-3xl text-black font-semibold py-2">
                                Decision making with switch
                            </h2>
                            <div className="explain tracking-wide pt-2">
                                <p>The control statement that allows us to make a decision effectively from the number of choices is called a switch, or a switch case-default since these three keywords go together to make up the control statement. The expression in switch returns an integral value, which is then compared with different cases. Switch executes that block of code, which matches the case value. If the value does not match with any of the cases, then the default block is executed.</p>
                            </div>
                        </div>
                        <h4 className="text-lg font-semibold pt-4">Syntax</h4>
                        <div className="explain tracking-wide">
                            <pre className="line-numbers rounded-xl">
                                <code className={`language-c`}>
                                    {`switch ( integer/character expression )
{  
    case {choice 1} :  
    Statements to be executed;
     
    case {choice 2} :  
    Statements to be executed;  
     
    case {choice 3} :  
    Statements to be executed; 
     
    default :  
    Statements to be executed;
}`}
                                </code>
                            </pre>
                        </div>
                        <div className="py-4" id="imp_ques_1">
                            <h2 className="heading2 text-3xl text-black font-semibold py-2">
                                Important Questions
                            </h2>
                            <div className="explain tracking-wide">
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q1. Find maximum among three numbers</p>
                                    <p>Ans.
                                        <div className="explain tracking-wide">
                                            <pre className="line-numbers rounded-xl">
                                                <code className={`language-c`}>
                                                    {`#include<stdio.h>
int main()
{
    int a,b,c;

    printf("Enter first number : ");
    scanf("%d",&a);

    printf("Enter second number : ");
    scanf("%d",&b);

    printf("Enter third number : ");
    scanf("%d",&c);

    if(a>b&&a>c){
        printf("A is lagrest");
    }
    else if(b>a&&b>c){
        printf("B is lagrest");
    }
    else{
        printf("C is lagrest");
    }
    return 0;

}`}
                                                </code>
                                            </pre>
                                        </div>
                                    </p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q2. Design a program to check whether a given year is leap year or not using ternary operator</p>
                                    <p>Ans.
                                        <div className="explain tracking-wide">
                                            <pre className="line-numbers rounded-xl">
                                                <code className={`language-c`}>
                                                    {`#include<stdio.h>
int main()
{
    int a;

    printf("Enter a year : ");
    scanf("%d",&a);

    a%4==0&&a%100==0?printf("Its a leap year"):a%4!=0?printf("It is not a leap year"):printf("Leap year");

    return 0;
}`}
                                                </code>
                                            </pre>
                                        </div>
                                    </p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q3. Design a program to read the age of a candidate and determine whether it is eligible for casting his/her own vote.</p>
                                    <p>Ans.
                                        <div className="explain tracking-wide">
                                            <pre className="line-numbers rounded-xl">
                                                <code className={`language-c`}>
                                                    {`#include<stdio.h>
int main()
{
    int age;

    printf("Enter your age : ");
    scanf("%d",&age);

    if (age >= 18)
    {
        return printf("\nYou can vote");
    }
    else
    {
        return printf("\nYou can not vote");
    }

    return 0;
}`}
                                                </code>
                                            </pre>
                                        </div>
                                    </p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q4. C program to read weekday number and print weekday name using switch. This program will read weekday number and printits corresponding week name switch case statement in C language.</p>
                                    <p>Ans.
                                        <div className="explain tracking-wide">
                                            <pre className="line-numbers rounded-xl">
                                                <code className={`language-c`}>
                                                    {`#include<stdio.h>
int main ()
{
    int day;

    printf ("Enter weekday number (0-6): ");
    scanf ("%d",&day);

    switch(day)
    {
        case 0:
            printf("Sunday");
            break;
        case 1:
            printf("Monday");
            break;
        case 2:
            printf("Tuesday");
            break;
        case 3:
            printf("Wednesday");
            break;
        case 4:
            printf("Thursday");
            break;
        case 5:
            printf("Friday");
            break;
        case 6:
            printf("Saturday");
            break;
        default:
            printf("Invalid input");
    }

    return 0;
}`}
                                                </code>
                                            </pre>
                                        </div>
                                    </p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q4. C programto check whether entered number by the user is prime</p>
                                    <p>Ans.
                                        <div className="explain tracking-wide">
                                            <pre className="line-numbers rounded-xl">
                                                <code className={`language-c`}>
                                                    {`#include<stdio.h>
int main()
{
    int n, i, c = 0;
    printf("Enter any number n:");
    scanf("%d", &n);
  
    //logic
    for (i = 1; i <= n; i++) {
        if (n % i == 0) {
           c++;
        }
    }
  
    if (c == 2) {
          printf("n is a Prime number");
    }
    else {
           printf("n is not a Prime number");
    }
    return 0;    
  }`}
                                                </code>
                                            </pre>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Page previous={`priority`} next={`looping`} />
    </>
  )
}

export default DecisionMaking