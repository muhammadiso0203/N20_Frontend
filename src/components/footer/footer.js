import React from 'react'
import "./footer.scss"
import robot from "../../assets/Group 396.svg"
import email from "../../assets/Group 72.svg"
import telephone from "../../assets/Group 71.svg"
import location from "../../assets/Group 71 (1).svg"
import facebooks from "../../assets/Vector.svg"
import instagram from "../../assets/Group 81.svg"
import twitter from "../../assets/Vector (1).svg"
import linkedin from "../../assets/Group 82.svg"
import youtube from "../../assets/Group 80.png"
import dunyo from "../../assets/Group 73.svg"
import vektor from "../../assets/Vector.png"


function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className='footer__rapper'>
                    <div className="footer__wrapper">
                        <img src={robot} alt="" />
                        <h1>Artificial Intelligence</h1>
                        <h4>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</h4>
                        <div className='footer__email'>
                            <img src={email} alt="" />
                            <p>Company@gmail.com.com</p>
                        </div>
                        <div className='footer__telephone'>
                            <img src={telephone} alt="" />
                            <p>Phone: (064) 332-1233</p>
                        </div>
                        <div className='footer__location'>
                            <img src={location} alt="" />
                            <p>450 Wall Street, USA, New York</p>
                        </div>
                    </div>
                    <div className='footer__information'>
                        <h1>INFORMATION</h1>
                        <p>New Collection</p>
                        <p>About Store</p>
                        <p>Contact Us</p>
                        <p>Latest News</p>
                        <p>Our Sitemap</p>
                        <p>Orders History</p>
                    </div>
                    <div className='footer__menu'>
                        <h1>FOOTER MENU</h1>
                        <p>Instagram profile</p>
                        <p>New Collection</p>
                        <p>Contact Us</p>
                        <p>Latest News</p>
                        <p>Terms & Conditions</p>
                        <p>Purchase Theme</p>
                    </div>
                    <div className='footer__links'>
                        <h1>USEFUL LINKS</h1>
                        <p>Instagram profile</p>
                        <p>New Collection</p>
                        <p>Contact Us</p>
                        <p>Latest News</p>
                        <p>Terms & Conditions</p>
                        <p>Purchase Theme</p>
                    </div>
                    <div className="footer__store">
                        <h1>ABOUT THE STORE</h1>
                        <p className='footer__pp'>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
                        <p className='footer__p'>www.company.com</p>
                        <div className='footer__icon'>
                            <img src={facebooks} alt="" />
                            <img src={instagram} alt="" />
                            <img src={twitter} alt="" />
                            <img src={linkedin} alt="" />
                            <img src={youtube} alt="" />
                        </div>
                        <div className='footer__english'>
                            <img src={dunyo} alt="" />
                            <h3>English</h3>
                            <img src={vektor} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer