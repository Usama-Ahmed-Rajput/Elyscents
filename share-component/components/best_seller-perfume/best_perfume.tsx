'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './best_perfume.module.scss'
const Best_perfume = () => {
    const [hoverIndex, setHoverIndex] = useState<any>(null);
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    let products = [
        {
            name: 'Royal Oud',
            cut_price: 2000,
            real_price: 1799,
            src: "https://elyscents.pk/cdn/shop/files/Royal_Oud_32df109e-c80d-4239-8c63-9f9a5a3ac58b.jpg?v=1760522995&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Royal-Oud.jpg?v=1760522995&width=540"
        },
        {
            name: "Salsa Spirit",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/Salsa_Spirit_40a4eff5-1c16-4bf3-97ad-bcec31a39ded.jpg?v=1760523136&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Salsa-Spirit.jpg?v=1760523136&width=540"
        },
        {
            name: "Zarak",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/zarak.jpg?v=1760522773&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Zarak.jpg?v=1760522773&width=540"
        },
        {
            name: "Exotic Pulse",
            cut_price: 2000,
            real_price: 1799,
            src: "https://elyscents.pk/cdn/shop/files/Exotic_Pulse_ca40f1a2-26bb-4ae9-bab5-29e6182ef259.jpg?v=1760523043&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Exotic-Pulse.jpg?v=1760523043&width=540"
        },
        {
            name: "Wild Essence",
            cut_price: 2100,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/wild_Essence_121a55f5-0fa0-4e3f-9284-ff361b4feda5.jpg?v=1760523219&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Wild-Esscense.jpg?v=1760523219&width=540"
        },
        {
            name: "Peak Breeze",
            cut_price: 2000,
            real_price: 1699,
            src: "https://elyscents.pk/cdn/shop/files/Peak_Breeze_ebff756b-2f75-4d81-bb82-fb443abad2ea.jpg?v=1760523055&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/ELyscents-Peak-Breeze.jpg?v=1760523055&width=540"
        },
        {
            name: "Apex",
            cut_price: 2000,
            real_price: 1599,
            src: "https://elyscents.pk/cdn/shop/files/APEX_d166e803-4b99-4f5b-a2e3-1dc62e38ba21.jpg?v=1760523306&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Apex.jpg?v=1760523306&width=540"
        },
        {
            name: "Green Elixir",
            cut_price: 2000,
            real_price: 1799,
            src: "https://elyscents.pk/cdn/shop/files/Green_Elixer.jpg?v=1760523069&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Green-Elixir.jpg?v=1760523069&width=540"
        }

    ];
    const CartItem = (value: any, index: number) => (
        <div className={style.perfume_item} key={index}>
            <img
                src={hoverIndex === index ? value.src1 : value.src}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                alt=""
            />

            <h3 className={style.deal_names}>{value.name}</h3>

            <div>
                <span className={style.cut_price}>Rs.{value.cut_price}.00</span>
                <span className={style.real_price}>Rs.{value.real_price}.00</span>
            </div>

            <div>
                <span className={style.save_price}>
                    Save Rs.{value.cut_price - value.real_price}.00
                </span>
            </div>

            <div className={style.cart_btn}>
                <button>Add to Cart</button>
            </div>
        </div>
    )

    return (
        <>
           
            <div className={style.wrapper}>
                <h2 className={style.heading}>BEST SELLERS PERFUMES</h2>
            </div>

            {!isMobile && (
                <div className={style.perfumes}>
                    {products.map((value, index) =>
                        CartItem(value, index)
                    )}
                </div>
            )}

            {isMobile && (
                <Swiper slidesPerView={1.2} spaceBetween={15}>
                    {products.map((value, index) => (
                        <SwiperSlide key={index}>
                            {CartItem(value, index)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}



            <div className={style.view_all_btn}><button>VIEW ALL</button></div>

        </>
    )
}

export default Best_perfume
