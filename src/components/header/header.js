import React from 'react'
import "./header.scss"
import rasm from "../../assets/Group 397.svg"
function Header() {
    return (
        <header className='header'>

            <nav className="container header__wrapper">
                <div className="header__logo">
                      <img src={rasm} alt="" />
                </div>
              
                <ul className='header__ul'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Contact</li>
                </ul>
                <button className='header__btn'>Sign in</button>
            </nav>
        </header>
    )
}

export default Header