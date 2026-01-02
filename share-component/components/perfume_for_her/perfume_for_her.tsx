'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './perfume_for_her.module.scss'
const Perfume_for_her = () => {
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
            name: 'Rosy Blossom',
            cut_price: 2000,
            real_price: 1699,
            src: "https://elyscents.pk/cdn/shop/files/rosy_Blossom.jpg?v=1760536616&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Rosy-Blossom.jpg?v=1760536616&width=540"
        },
        {
            name: "Flora Fantasy",
            cut_price: 2000,
            real_price: 1599,
            src: "https://elyscents.pk/cdn/shop/files/Flora_Fantasy.jpg?v=1760523186&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Flora-Fantasy.jpg?v=1760523186&width=540"
        },
        {
            name: "Berry Grace",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/berry_grace.jpg?v=1760522656&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Beryy-Grace.jpg?v=1760522656&width=540"
        },
        {
            name: "Mystic Pulse",
            cut_price: 2000,
            real_price: 1599,
            src: "https://elyscents.pk/cdn/shop/files/mystic_Pulse.jpg?v=1760523149&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Mystic-Pulse.jpg?v=1760523149&width=540"
        },
        {
            name: "Rebel Bloom",
            cut_price: 2100,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/rebel_bloom.jpg?v=1760522809&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Rebel-Bloom.jpg?v=1760522809&width=540"
        },
        {
            name: "Floral Muse",
            cut_price: 2000,
            real_price: 1699,
            src: "https://elyscents.pk/cdn/shop/files/Floral_Muse.jpg?v=1760523165&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Floral-Muse.jpg?v=1760523165&width=540"
        },
        {
            name: "Empress Whif",
            cut_price: 2000,
            real_price: 1599,
            src: "https://elyscents.pk/cdn/shop/files/Empress_whiff.jpg?v=1760523195&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Empress-Whiff.jpg?v=1760523195&width=540"
        },
        {
            name: "Velina",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/velina_2323b953-0e39-4cdb-899e-bd1faeb68d9d.jpg?v=1760522545&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscent-Velina.jpg?v=1760522545&width=540"
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
                <h2 className={style.heading}>Perfume For Her</h2>
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

export default Perfume_for_her
