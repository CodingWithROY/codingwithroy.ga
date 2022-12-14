import React from 'react'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Sidebar from '../components/Sidebar'

const Datatype = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
            <div className='dataContent'>
                <div id="data_types">
                    <h1 className="heading">Data Types</h1>
                    <div className="explain">
                        <div className="pb-4" id="defination_data_type">
                            <div className="explain">
                                The data type is a classification of data that specifies which type of data is stored in that particular variable.<br /><br />
                                Ex : int a, char name, float b, double c, etc.<br />
                                Here int is the data type of a. In the same manner char, float and double are data types, and name, b, and c are variables.
                            </div>
                        </div>
                        <div className="py-4" id="format_specifiers">
                            <h2 className="heading2">
                                Format specifiers for data types
                            </h2>
                            
                            <img className="dataImage" src="https://isat.guru/Content/NotesImages/CS/CProg/Theory/datatypes.JPG" alt="DataType" />

                            <pre className="line-numbers rounded-xl">
                                <code className={`language-c`}>
                                    {`//We will discuss these functions in details in upcoming tutorial.
#include<stdio.h>
int main(){
    int a;
    float b;
    char c;
    printf("Enter a number : ");
    scanf("%d", &a);                 // Here %d is format specifier for int
    printf("Enter your 10th percentage : ");
    scanf("%f", &b);                 // Here %f is format specifier for float
    printf("Enter a letter : ");
    scanf("%c", &c);                 // Here %c is format specifier for char
    return 0;
}`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
            <Page previous={`comments`} next={`token`} />
        </>
  )
}

export default Datatype