'use client'
import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
// import 'swiper/css/navigation'
import style from './testimonials.module.scss'

const testimonialsData = [
    {
        review: "Must Buy Product! I sprayed it on my T-Shirt and after 3 days it was still smelling fresh!",
        name: "Muhammad Sabeeh Ul Hassan",
        perfume: "Royal Oud"
    },
    {
        review: "Long lasting fragrance, totally worth the price. Highly recommended!",
        name: "Ali Raza",
        perfume: "Wild Essence"
    },
    {
        review: "Long lasting fragrance, totally worth the price. Highly recommended!",
        name: "Umer Ejaz",
        perfume: "Peak Breeze"
    },
    {
        review: "Packaging + smell both are premium. Loved it!",
        name: "Usman Khan",
        perfume: "Dream"
    }
]

const Testimonials = () => {
    return (
        <>
            <div className={style.wrapper}>
                <h2 className={style.heading}>Customers are saying</h2>
            </div>

            <div className={style.main_star}>
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={style.stars}><LiaStarSolid /></span>
                ))}
                <span className={style.rating}>4.73</span>
                <span className={style.sm_star}><LiaStarSolid /></span>
                <span className={style.rating}>(493)</span>
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                navigation
                autoplay={{ delay: 4000 }}
                loop={true}
                className={style.testimonialSwiper}
            >
                {testimonialsData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={style.testimonials}>
                            <div className={style.quotes}>
                                <RiDoubleQuotesR />
                            </div>

                            <div className={style.review}>
                                <p>{item.review}</p>
                            </div>

                            <div className={style.review_stars}>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={style.stars2}><LiaStarSolid /></span>
                                ))}
                            </div>

                            <div className={style.name}>
                                <p>{item.name}</p>
                            </div>

                            <div className={style.perfume_name}>
                                <p>{item.perfume}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Testimonials
