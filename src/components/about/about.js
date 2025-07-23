import React from 'react'
import about from "../../assets/about3 1.png"
import "./about.scss"

function About() {
  return (
    <section className='about'>
        <div className='container'>
            <div className="about__wrapper">
                <div className="about__content">
                    <h1>What our clients say about our awesome solutions</h1>
                    <p>To take a trivial example, which of us ever undertakes <br />laborious physical exercise, except to obtain some <br /> advantage from it who do not know.</p>
                    <p>Lorem ipsum is placeholder text commonly used in the <br />graphic, print, and publishing .</p>
                    <p>Lorem ipsum is placeholder previewing layouts and visual <br />mockups.</p>
                    <p>Lorem ipsum is placeholder text commonly used in the <br />graphic, print, and publishing industries for <br /> previewing layouts and visual mockups.</p>
                </div>
                <div className='about__img'>
                    <img src={about} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About