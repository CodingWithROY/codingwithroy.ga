import React from 'react'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Sidebar from '../components/Sidebar'

const Jumping = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
        <div className="dataContent">
                <h1 className="heading text-5xl text-black font-bold py-7 underline">Jumping Statements</h1>
                <div className="explain">
                    <div className="pb-4" id="defination_token">
                        <div className="explain tracking-wide">
                            Jump statements in C are used to interrupt the flow of the program or escape a particular section of the program.
                        </div>
                    </div>
                    <div className="py-4" id="types_of_token">
                        <h2 className="heading2 text-3xl text-black font-semibold py-2">
                            Types of Jumping statements
                        </h2>
                        <div className="explain tracking-wide">
                            <ul className="list-disc pl-8">
                                <li>Break</li>
                                <li>Continue</li>
                                <li>Goto</li>
                                <li>Return</li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-4" id="keyword">
                        <div className="explain tracking-wide ">
                            <p>Syntax of break</p>
                            <pre className="line-numbers rounded-xl">
                                <code className={`language-c`}>
                                    {`#include <stdio.h>  
int main()
{
    int i;

    for(i=1;i<=15;i++)
    {
        printf("%d\n",i);
        if(i==10)
        break;
    }
    
    return 0;
}`}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="py-4" id="keyword">
                        <div className="explain tracking-wide ">
                            <p>Syntax of continue</p>
                            <pre className="line-numbers rounded-xl">
                                <code className={`language-c`}>
                                    {`#include <stdio.h>  
int main()
{
    int i,j;
    for(i=1;i<3;i++)
    {
        for(j=1;j<5;j++)
        {
            if(j==2)
            continue;
            printf("%d\n",j);
        }
    }
    return 0;
}`}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="py-4" id="keyword">
                        <div className="explain tracking-wide ">
                            <p>Syntax of goto</p>
                            <pre className="line-numbers rounded-xl">
                                <code className={`language-c`}>
                                    {`#include <stdio.h>  
int main()
{
    int i,j;
    for(i=1;i<5;i++)
    {
        if(i==2)
        goto there;
        printf("%d\n",i);
    }
    there:
        printf("Two");
    return 0;
}`}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="py-4" id="keyword">
                        <div className="explain tracking-wide ">
                            <p>Syntax of return</p>
                            <pre className="line-numbers rounded-xl">
                                <code className={`language-c`}>
                                    {`#include <stdio.h>  
char func(int ascii)
{
    return ((char)ascii);
    }
    int main()
    {
        int ascii;
        char ch;
        printf("Enter any ascii value in decimal: \n");
        scanf("%d",&ascii);
        ch=func(ascii);
        printf("The character is : %c",ch);
    return 0;
}`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
            <Page previous={`nestedloops`} next={`overview`} />
    </>
  )
}

export default Jumping