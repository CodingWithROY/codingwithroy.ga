import React from 'react'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Sidebar from '../components/Sidebar'

const Looping = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
        <div className='dataContent'>
                <h1 className="heading text-5xl text-black font-bold py-7 underline">Looping Statements</h1>
                <div className="explain">
                    <div className="pb-4" id="defination_token">
                        <div className="explain tracking-wide">
                            A loop is a sequence of instructions that is continually repeated until a certain condition is reached.
                        </div>
                    </div>
                    <div className="py-4" id="types_of_token">
                        <h2 className="heading2 text-3xl text-black font-semibold py-2">
                            Types of loops
                        </h2>
                        <div className="explain tracking-wide">
                            <ul className="list-disc pl-8">
                                <li>For Loop</li>
                                <li>While Loop</li>
                                <li>Do-while Loop</li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-4" id="keyword">
                        <h3 className="text-xl font-semibold pt-4">For Loop</h3>
                        <div className="explain tracking-wide pt-2">
                            <p>A For Loop is used to repeat a specific block of code a known number of times</p>
                            <div className="explain tracking-wide ">
                                <p>For declaration we follow this syntax</p>
                                <pre className="line-numbers rounded-xl">
                                    <code className={`language-c`}>
                                        {`for(initialization; condition; increment/decrement(or any other expression);){  
    //code to be executed  
}  `}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="py-4" id="identifiers">
                        <h3 className="text-xl font-semibold pt-4">While Loop</h3>
                        <div className="explain tracking-wide pt-2">
                            <p>It is a most basic loop in C programming. It has one control condition, and executes as long the condition is true.  The condition of the loop is tested before the body of the loop is executed, hence it is called an entry controlled loop.</p>
                            <div className="explain tracking-wide ">
                                <p>For declaration we follow this syntax</p>
                                <pre className="line-numbers rounded-xl">
                                    <code className={`language-c`}>
                                        {`initialization
while(condition) {
    statements;
 }`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="py-4" id="constant">
                        <h3 className="text-xl font-semibold pt-4">Do-While Loop</h3>
                        <div className="explain tracking-wide pt-2">
                            <p>C do while loops are very similar to the while loops, but it always executes the code block at least once and furthermore as long as the condition remains true. This is an exit-controlled loop.</p>
                            <div className="explain tracking-wide ">
                                <p>For declaration we follow this syntax</p>
                                <pre className="line-numbers rounded-xl">
                                    <code className={`language-c`}>
                                        {`initialization
do {
    statements;
} while( condition );`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="py-4" id="imp_ques_1">
                            <h2 className="heading2 text-3xl text-black font-semibold py-2">
                                Important Questions
                            </h2>
                            <div className="explain tracking-wide">
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q1. Program to print first 10 natural numbers</p>
                                    <p>Ans.
                                        <div className="explain tracking-wide">
                                            <pre className="line-numbers rounded-xl">
                                                <code className={`language-c`}>
                                                    {`#include<stdio.h>
int main() {

    printf("The first 10 natural numbers are :\n ");
  
    for (int i = 1; i < 11; i++)
    {
      printf("%d\n", i);
    }

    return 0;
}`}
                                                </code>
                                            </pre>
                                        </div>
                                    </p>
                                </div>
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q2. Program to find factorial of a number using loop.</p>
                                    <p>Ans.
                                        <div className="explain tracking-wide">
                                            <pre className="line-numbers rounded-xl">
                                                <code className={`language-c`}>
                                                    {`#include<stdio.h>
int main()
{
    int i,fact=1,number;

    printf("Enter a number: ");
    scanf("%d",&number);

    for(i=1;i<=number;i++)
      fact=fact*i;    
    }

    printf("Factorial of %d is: %d",number,fact);

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
        printf("\nYou can vote");
    }
    else
    {
        printf("\nYou can not vote");
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
                                <div className="pt-2">
                                    <p className="font-semibold text-lg">Q4. Palindrome Number in C</p>
                                    <p>Ans.
                                        <div className="explain tracking-wide">
                                            <pre className="line-numbers rounded-xl">
                                                <code className={`language-c`}>
                                                    {`#include<stdio.h>
int main()    
{    
    int n,r,sum=0,temp;  

    printf("enter the number=");    
    scanf("%d",&n);

    temp=n;    
    while(n>0)    
    {    
        r=n%10;    
        sum=(sum*10)+r;    
        n=n/10;    
    }    
    if(temp==sum){   
        printf("palindrome number ");    
    }
    else{
        printf("not palindrome");   
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
            <Page previous={`decisionmaking`} next={`nestedloops`} />
    </>
  )
}

export default Looping