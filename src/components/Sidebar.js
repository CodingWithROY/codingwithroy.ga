import React, { useState } from 'react'
import "./Sidebar.css"

const Sidebar = () => {

    const [hidden, setHidden] = useState('flex')

    const handleClose = () => {
        setHidden(!hidden);
    }

    return (
        <>
            <div onClick={handleClose}>
                {hidden ? <i className="sidebarIcon1 sidebarIcon fa-solid fa-caret-left fa-xl"></i> : <i className="sidebarIcon2 sidebarIcon fa-solid fa-caret-right fa-xl"></i>}
            </div>
            {hidden ? <aside className='sidebar'>
                <div className="sidebarHeading">
                    <div className="sidebarList">
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/overview">Overview</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/flow">Flow</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/installation">Installation</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/hello">Hello</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/variables">Variablesx</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/comments">Comments</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/datatype">DataType</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/token">Token</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/operator">Operator</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/priority">Priority</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/decisionmaking">Decision&nbsp;Making</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/looping">Looping</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/nestedloops">Nested&nbsp;Loops</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/jumping">Jumping</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/overview">Overview</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/overview">Overview</a>
                        </p>
                        <p className='sidebarItems'>
                            <a className='sidebarItemsLink' href="/learn/overview">Overview</a>
                        </p>
                        
                    </div>
                </div>
            </aside> :
                <aside className="hidden">
                    {null}
                </aside>
            }
        </>
    )
}

export default Sidebar