'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './unisex.module.scss'
import Link from 'next/link'

type IProductsType = {
    name: string,
    cut_price: number,
    real_price: number,
    src: string,
    src1: string
}

const Unisex = () => {

    const [hoverIndex, setHoverIndex] = useState<any>(null);
    const [isMobile, setIsMobile] = useState(false)
    const [product, setProduct] = useState<IProductsType[]>([])
    const [sortBy, setSortBy] = useState('featured')

    useEffect(() => {
        setProduct([
            {
                name: "Exotic Pulse",
                cut_price: 2000,
                real_price: 1799,
                src: "https://elyscents.pk/cdn/shop/files/Exotic_Pulse_ca40f1a2-26bb-4ae9-bab5-29e6182ef259.jpg?v=1760523043&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Exotic-Pulse.jpg?v=1760523043&width=540"
            },
            {
                name: 'Royal Oud',
                cut_price: 2000,
                real_price: 1799,
                src: "https://elyscents.pk/cdn/shop/files/Royal_Oud_32df109e-c80d-4239-8c63-9f9a5a3ac58b.jpg?v=1760522995&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Royal-Oud.jpg?v=1760522995&width=540"
            },
            {
                name: 'Oud Evergreen',
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/Oud_EverGreen.jpg?v=1760523484&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Evergreen.jpg?v=1760523484&width=540"
            },
            {
                name: 'Resham Oud',
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/resham_oud.jpg?v=1760523035&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Resham-Oud.jpg?v=1760523035&width=540"
            },
            {
                name: 'Oud Essence',
                cut_price: 2000,
                real_price: 1799,
                src: "https://elyscents.pk/cdn/shop/files/Oud_Essence.jpg?v=1760523123&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Esscense.jpg?v=1760523123&width=540"
            },
            {
                name: 'Oud Majesty',
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/Oud_majesty.jpg?v=1760523188&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Majesty.jpg?v=1760523200&width=540"
            },
            {
                name: 'Dream Oud',
                cut_price: 2000,
                real_price: 1799,
                src: "https://elyscents.pk/cdn/shop/files/Dream_Oud.jpg?v=1760522968&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Dream-Oud.jpg?v=1760522968&width=540"
            },
            {
                name: 'Smoky Soul',
                cut_price: 2000,
                real_price: 1799,
                src: "https://elyscents.pk/cdn/shop/files/Smoky_soul.jpg?v=1760522972&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Smoky-Soul.jpg?v=1760522972&width=540"
            },
            {
            name: 'Oud Velvet',
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/Oud_Velvet.jpg?v=1760522977&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Velvet.jpg?v=1760522977&width=540"
        }
        ]);
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

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

    const sortedProducts = [...product].sort((a, b) => {
        if (sortBy === 'az') {
            return a.name.localeCompare(b.name)
        }

        if (sortBy === 'za') {
            return b.name.localeCompare(a.name)
        }

        if (sortBy === 'low') {
            return a.real_price - b.real_price
        }

        if (sortBy === 'high') {
            return b.real_price - a.real_price
        }

        return 0
    })

    return (
        <>
            <div className={style.top_image}>
                <img src="https://elyscents.pk/cdn/shop/files/elyscents-banner.jpg?v=1716647770" alt="" />
            </div>

            <div className={style.filter_product}>
                <p>{product.length} Products</p>
                <div>
                    <select onChange={(e) => setSortBy(e.target.value)}>
                        <option value="featured">Featured</option>
                        <option value="az">Alphabetically, A-Z</option>
                        <option value="za">Alphabetically, Z-A</option>
                        <option value="low">Price, Low to High</option>
                        <option value="high">Price, High to Low</option>
                    </select>
                </div>

            </div>

            {!isMobile && (
                <div className={style.perfumes}>
                    {sortedProducts.map((value: IProductsType, index: number) =>
                        CartItem(value, index)
                    )}
                </div>
            )}

            {isMobile && (
                <Swiper slidesPerView={1.2} spaceBetween={15}>
                    {sortedProducts.map((value: IProductsType, index: number) => (
                        <SwiperSlide key={index}>
                            {CartItem(value, index)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    )
}

export default Unisex
