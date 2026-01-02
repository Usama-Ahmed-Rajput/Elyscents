import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import { RiDoubleQuotesR } from "react-icons/ri";
import style from './testimonials.module.scss'
const Testimonials = () => {
    return (
        <>
            <div className={style.wrapper}>
                <h2 className={style.heading}>Customers are saying</h2>
            </div>
            <div className={style.main_star}>
                <span className={style.stars}><LiaStarSolid /></span>
                <span className={style.stars}><LiaStarSolid /></span>
                <span className={style.stars}><LiaStarSolid /></span>
                <span className={style.stars}><LiaStarSolid /></span>
                <span className={style.stars}><LiaStarSolid /></span>
                <span className={style.rating}>4.73</span>
                <span className={style.sm_star}><LiaStarSolid /></span>
                <span className={style.rating}>(493)</span>
            </div>
            <div className={style.testimonials}>
                <div className={style.quotes}><RiDoubleQuotesR /></div>
                <div className={style.review}>
                    <p>Must Buy Product! I want share my experience I sprayed it on my T-Shirt and went out the room, I came after 3 days and It was Still Smelling the Same as Fresh! I was amazed!</p>
                </div>
                <div className={style.review_stars}>
                    <span className={style.stars2}><LiaStarSolid /></span>
                    <span className={style.stars2}><LiaStarSolid /></span>
                    <span className={style.stars2}><LiaStarSolid /></span>
                    <span className={style.stars2}><LiaStarSolid /></span>
                    <span className={style.stars2}><LiaStarSolid /></span>
                </div>
                <div className={style.name}>
                    <p>Muhammad Sabeeh Ul Hassan</p>
                </div>
                <div className={style.perfume_name}>
                    <p>Royal Oud</p>
                </div>
            </div>
        </>
    )
}

export default Testimonials
