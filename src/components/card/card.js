import React from 'react'
import "./card.scss"
import card1 from "../../assets/welcome-3 1.svg"
import card2 from "../../assets/welcome-3 1 (1).svg"
import card3 from "../../assets/welcome-3 1 (2).svg"
import card4 from "../../assets/welcome-3 1 (3).svg"
import card5 from "../../assets/welcome-3 1 (4).svg"


function Card() {
  return (
    <section className='card'>
      <div className='card__wrapper'>
        <div className='card__content'>
          <img src={card3} alt="" />
          <h1>Naxly as the Winners in Global Agency Awards</h1>
          <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div className='card__content'>
          <img src={card2} alt="" />
          <h1>Expert Prespective Agency Awards</h1>
          <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div className='card__content'>
          <img src={card3} alt="" />
          <h1>Business Prespective Global Agency Awards</h1>
          <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div className='card__content'>
          <img src={card4} alt="" />
          <h1>Value for Results in Global Agency Awards</h1>
          <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div className='card__content'>
          <img src={card5} alt="" />
          <h1>Global Experience in Agency Awards</h1>
          <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div className='card__content'>
          <img src={card3} alt="" />
          <h1>Value for Results in Global Agency Awards</h1>
          <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div className='card__content'>
          <img src={card2} alt="" />
          <h1>Expert Prespective Agency Awards</h1>
          <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
      </div>
      <div class="card__dots">
        <span class="card__dot card__active"></span>
        <span class="card__dot"></span>
        <span class="card__dot"></span>
      </div>

    </section>
  )
}
export default Card