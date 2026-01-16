'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './perfume_for_her_comp.module.scss'
import Link from 'next/link'

type IProductsType = {
    name: string,
    cut_price: number,
    real_price: number,
    src: string,
    src1: string
}


const Perfume_for_her_comp = () => {
    const [hoverIndex, setHoverIndex] = useState<any>(null);
    const [isMobile, setIsMobile] = useState(false)
    const [product, setProduct] = useState<IProductsType[]>([])
    const [sortBy, setSortBy] = useState('featured')


    useEffect(() => {

        setProduct([{
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
        },
        {
            name: "She Inspired By Purple Palia",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/She.jpg?v=1760522790&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-She.jpg?v=1760522790&width=540"
        },
        {
            name: "Sitara",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/sitara.jpg?v=1760522786&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Sitara.jpg?v=1760522786&width=540"
        },
        {
            name: "Ripe Muse",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/ripe_muse.jpg?v=1760522794&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Ripe-Muse.jpg?v=1760522794&width=540"
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

export default Perfume_for_her_comp
