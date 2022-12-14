import React from 'react'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Sidebar from '../components/Sidebar'

const Installation = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className='dataContent'>
                <div id="installation">
                    <h1 className="heading">Installation</h1>
                    <div className="explain">
                        <div className="py-4" id="installing_vscode">
                            <h2 className="heading2">
                                Installing VS Code and Compiler for C
                            </h2>
                            <div className="explain">
                                <ul className="pl-8">
                                    <li> Go to https://code.visualstudio.com/ or simply type vs code in the search bar of your browser and download it.</li>
                                    <li> Run the setup, Accept the agreement, select all tasks given in the setup and click on next.</li>
                                    <li> Click on Install.</li>
                                    <li> Now again go to your browser and search for MinGW and open this website https://sourceforge.net/projects/mingw/, Click on download and download it.</li>
                                    <li> Run the MinGW setup and click on install</li>
                                    <li> Select the default directory I.e. C:/MinGW and click on continue.</li>
                                    <li> It starts downloading some packages do not cancel them. It may take some time. After the packages download is complete then click on continue.</li>
                                    <li> Select 2nd and 5th packages I.e. mingw32-base and mingw-gcc-g++</li>
                                    <li> Click on Installation on the top left corner and then go to Apply Changes and then again click on apply.</li>
                                    <li> It downloads some packages again. After it completes then click on close</li>
                                    <li> Now search for edit the system environment variable, a dialogue box appears to click on Environment Variable in the bottom right.</li>
                                    <li> Now Under Environment Variable select path and click on edit.</li>
                                    <li> Click on new and paste this “C:\MinGW\bin”.</li>
                                    <li> Now open Terminal or PowerShell and type gcc if your terminal or PowerShell showing this output means you are ready to go.<br /><br />
                                        “gcc: fatal error: no input files<br />
                                        compilation terminated.”
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="py-4" id="how_to_run_c_prog">
                            <h2 className="heading2">
                                How to run a C program?
                            </h2>
                            <div className="explain">
                                <ul className="pl-8">
                                    <li> Write your code and save your file with the “.c” extension. Ex: hello.c</li>
                                    <li> Click on Terminal on top and then click on New Terminal.</li>
                                    <li> Now, Type gcc .\yourfilename.c , Ex : gcc .\hello.c</li>
                                    <li> A new file created with the name a.exe</li>
                                    <li> Again type .\a.exe and the program runs.</li>
                                    <li> Again type .\a.exe and the program runs.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Page previous={`flow`} next={`hello`} />
        </>
    )
}

export default Installation