import React from 'react'
import rasm from "../../assets/9 1.png"
import "./hero.scss"
import polygon from "../../assets/Polygon 1.svg"
import icon1 from "../../assets/Group 400.svg"
import icon2 from "../../assets/Group 401.svg"
import icon3 from "../../assets/Group 402.svg"
import icon4 from "../../assets/Group 403.svg"


function Hero() {
    return (
        <section className='hero'>
            <div className='container'>
                <div className="hero__title">
                    <div className='hero__content'>
                        <h6>Next genaretion platform</h6>
                        <h1>Artificial intelligence & Syber security</h1>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        <div className='hero__btn'>
                            <button className='hero_btn'>Get Started</button>
                            <button className='hero_btn'><img src={polygon} alt="" />Watch Video</button>
                        </div>
                    </div>
                    <div className='hero__img'>
                        <img src={rasm} alt="" />
                    </div>
                </div>

                <div className='hero__icon'>
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                    <img src={icon4} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero