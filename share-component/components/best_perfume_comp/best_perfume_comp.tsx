'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './best_perfume_comp.module.scss'
import Link from 'next/link'

type IProductsType = {
    name: string,
    cut_price: number,
    real_price: number,
    src: string,
    src1: string
}


const Best_perfume_comp = () => {
    const [hoverIndex, setHoverIndex] = useState<any>(null);
    const [isMobile, setIsMobile] = useState(false)
    const [product, setProduct] = useState<IProductsType[]>([])
    const [sortBy, setSortBy] = useState('featured')


    useEffect(() => {

        setProduct([
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
        },
        {
            name: "Dark Raven",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/dark_reven.jpg?v=1760522570&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Dark-Raven.jpg?v=1760522570&width=540"
        },
        {
            name: "Millions Dream",
            cut_price: 2000,
            real_price: 1499,
            src: "https://elyscents.pk/cdn/shop/files/millions_dream_65c1afe3-a24c-461f-8843-9c39a9d23689.jpg?v=1760523648&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Millions-Dream.jpg?v=1760523648&width=540"
        },
        {
            name: "Formel Inspired",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/Formel.jpg?v=1760522782&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Formal.jpg?v=1760522782&width=540"
        },
        {
            name: "After Nine",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/after_9.jpg?v=1760522742&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-After_Nine.jpg?v=1760522742&width=540"
        },
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
            name: "Mystic Pulse",
            cut_price: 2000,
            real_price: 1599,
            src: "https://elyscents.pk/cdn/shop/files/mystic_Pulse.jpg?v=1760523149&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Mystic-Pulse.jpg?v=1760523149&width=540"
        },
        {
            name: 'Oud Essence',
            cut_price: 2000,
            real_price: 1799,
            src: "https://elyscents.pk/cdn/shop/files/Oud_Essence.jpg?v=1760523123&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Esscense.jpg?v=1760523123&width=540"
        },
        {
            name: 'Crystal Oud',
            cut_price: 2100,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/Crystal_Oud.jpg?v=1760523084&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Crystal-Oud.jpg?v=1760523084&width=540"
        },
        {
            name: "Rebel Bloom",
            cut_price: 2100,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/rebel_bloom.jpg?v=1760522809&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Rebel-Bloom.jpg?v=1760522809&width=540"
        },
        {
            name: "She Inspired By Purple Palia",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/She.jpg?v=1760522790&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-She.jpg?v=1760522790&width=540"
        },
        {
            name: "Velina",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/velina_2323b953-0e39-4cdb-899e-bd1faeb68d9d.jpg?v=1760522545&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscent-Velina.jpg?v=1760522545&width=540"
        },
        {
            name: "Sitara",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/sitara.jpg?v=1760522786&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Sitara.jpg?v=1760522786&width=540"
        },
        {
            name: "Berry Grace",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/berry_grace.jpg?v=1760522656&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Beryy-Grace.jpg?v=1760522656&width=540"
        },
        {
            name: "Ripe Muse",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/ripe_muse.jpg?v=1760522794&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Ripe-Muse.jpg?v=1760522794&width=540"
        },
        {
            name: "Prestor",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/prestor.jpg?v=1760522742&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Prestor.jpg?v=1760522742&width=540"
        },
        {
            name: "Ignitic",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/ignitic.jpg?v=1760522778&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Ignite.jpg?v=1760522778&width=540"
        },
        {
            name: "Lafure",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/lafure.jpg?v=1760522745&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-lafure.jpg?v=1760522745&width=540"
        },
        {
            name: "Astral",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/astral.jpg?v=1760522559&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Astral.jpg?v=1760522559&width=540"
        },
        {
            name: "Mystbin",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/mystbin.jpg?v=1760522742&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Mystbin.jpg?v=1760522742&width=540"
        },

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
                    {sortedProducts.map((value, index) => (
                        <SwiperSlide key={index}>
                            {CartItem(value, index)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}


        </>
    )
}

export default Best_perfume_comp
