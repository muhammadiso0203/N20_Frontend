import React from 'react'
import "./dataSciense.scss"
import dataSciense from "../../assets/about 4.png"

function DataSciense() {
    return (
        <section className='dataSciense'>
            <div className='container'>
                <div className="dataSciense__wrapper">
                    <div>
                        <img src={dataSciense} alt="" className='dataSciense__img'/>
                    </div>
                    <div className='dataSciense__title'>
                        <h1>Apply AI, Deep Learning and Data Sciece to solve</h1>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        <div>
                            <button className='dataSciense__btn'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DataSciense