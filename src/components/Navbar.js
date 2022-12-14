import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import humburger from "../images/humburger.png"
import logo from "../images/logo.png"

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <nav className={`navContainer ${theme}`}>
                <div className="left">
                    <div className="logo">
                        <a href="/" className="mainLogo myHover">
                            <img src={logo} alt="logo" width="50px" />
                        </a>
                    </div>
                </div>
                <div className="between">
                    <div className="navNavigation">
                        <a href="/" className="navLinks myHover">Home</a>
                        <a href="/about" className="navLinks myHover">About</a>
                        <a href="/learn/overview" className="navLinks myHover">Learn</a>
                        <a href="https://blog.royad.ga/" className="navLinks myHover">Blog</a>
                        <a href="/contact" className="navLinks myHover">Contact</a>
                    </div>
                    <img className="navBurger" src={humburger} width="40px" alt="user" onClick={() => setNavbarOpen(!navbarOpen)} />
                    {/* <i className='fa-solid fa-humburger'></i> */}
                    <div className={"navMob" + (navbarOpen ? " block" : " hidden")}>
                        <ul className="navMobUl">
                            <li className="list">
                                <a href="/" className="list-text myHover">Home</a>
                            </li>
                            <li className="list">
                                <a href="/about" className="list-text myHover">About</a>
                            </li>
                            <li className="list">
                                <a href="/learn/overview" className="list-text myHover">Learn</a>
                            </li>
                            <li className="list">
                                <a href="https://blog.royad.ga/" className="list-text myHover">Blog</a>
                            </li>
                            <li className="list">
                                <a href="/contact" className="list-text myHover">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="user">
                        <i className={`fa-solid fa-moon`} onClick={toggleTheme}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar