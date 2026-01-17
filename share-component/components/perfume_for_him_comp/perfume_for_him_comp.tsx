'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './perfume_for_him_comp.module.scss'
import Link from 'next/link'

type IProductsType = {
    name: string,
    cut_price: number,
    real_price: number,
    src: string,
    src1: string
}


const Perfume_for_him_comp = () => {
    const [hoverIndex, setHoverIndex] = useState<any>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [product, setProduct] = useState<IProductsType[]>([])
    const [sortBy, setSortBy] = useState('featured')


    useEffect(() => {

        setProduct([
            {
                name: "Dream",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/Dreame.jpg?v=1760523421&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Dream.jpg?v=1760523421&width=540"
            },
            {
                name: "Formel",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/Formel.jpg?v=1760522782&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Formal.jpg?v=1760522782&width=540"
            },
            {
                name: "Fiery Tobacco",
                cut_price: 2000,
                real_price: 1699,
                src: "https://elyscents.pk/cdn/shop/files/fiery_tobacco.jpg?v=1760523091&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Fiery-Tobaco.jpg?v=1760523091&width=540"
            },
            {
                name: "Dark Raven",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/dark_reven.jpg?v=1760522570&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Dark-Raven.jpg?v=1760522570&width=540"
            }, {
                name: "Royal Oud",
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
                name: "Peak Breeze",
                cut_price: 2000,
                real_price: 1699,
                src: "https://elyscents.pk/cdn/shop/files/Peak_Breeze_ebff756b-2f75-4d81-bb82-fb443abad2ea.jpg?v=1760523055&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/ELyscents-Peak-Breeze.jpg?v=1760523055&width=540"
            },
            {
                name: "Extreme",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/Extreme_89124fd2-8267-4ef3-8ce9-a3cf3c91a622.jpg?v=1760523534&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Extreme.jpg?v=1760523534&width=540"
            },
            {
                name: "Apex",
                cut_price: 2000,
                real_price: 1599,
                src: "https://elyscents.pk/cdn/shop/files/APEX_d166e803-4b99-4f5b-a2e3-1dc62e38ba21.jpg?v=1760523306&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Apex.jpg?v=1760523306&width=540"
            },
            {
                name: "Avenue",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/avenue_56e5ac6a-19c7-4953-851a-b35b912071b1.jpg?v=1760523319&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Avenue.jpg?v=1760523319&width=540"
            },
            {
                name: "Deep Calm",
                cut_price: 2000,
                real_price: 1699,
                src: "https://elyscents.pk/cdn/shop/files/Deep_Clam.jpg?v=1760523211&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Deep-Calm.jpg?v=1760523211&width=540"
            },
            {
                name: "Exotic Pulse",
                cut_price: 2000,
                real_price: 1799,
                src: "https://elyscents.pk/cdn/shop/files/Exotic_Pulse_ca40f1a2-26bb-4ae9-bab5-29e6182ef259.jpg?v=1760523043&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Exotic-Pulse.jpg?v=1760523043&width=540"
            },
            {
                name: "Adventure",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/adventure_8dd77233-f9ec-4b00-98f0-d13c44ca7b35.jpg?v=1760522999&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Adventure.jpg?v=1760522999&width=540"
            },
            {
                name: "After Nine",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/after_9.jpg?v=1760522742&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-After_Nine.jpg?v=1760522742&width=540"
            },
            {
                name: "Astral",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/astral.jpg?v=1760522559&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Astral.jpg?v=1760522559&width=540"
            },
            {
                name: "Athens",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/athens_5bc2ae46-d37b-4f70-83c2-4b5df614fb95.jpg?v=1760522955&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Athens.jpg?v=1760522955&width=540"
            },
            {
                name: "Crown",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/Crown_cc39f2f9-59a4-47a5-a753-288e234079bc.jpg?v=1760523370&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Crown.jpg?v=1760523370&width=540"
            },
            {
                name: 'Crystal Oud',
                cut_price: 2100,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/Crystal_Oud.jpg?v=1760523084&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Crystal-Oud.jpg?v=1760523084&width=540"
            },
            {
                name: 'Dream Oud',
                cut_price: 2000,
                real_price: 1799,
                src: "https://elyscents.pk/cdn/shop/files/Dream_Oud.jpg?v=1760522968&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Dream-Oud.jpg?v=1760522968&width=540"
            },
            {
                name: 'Falling Star',
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/falling_star.jpg?v=1760523149&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Falling-Star.jpg?v=1760523149&width=540"
            },
            {
                name: 'Freedom',
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/freedom_384392bf-834f-46cf-851c-4abc64b9cbd1.jpg?v=1760523715&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Freedom.jpg?v=1760523715&width=540"
            },
            {
                name: "Green Elixir",
                cut_price: 2000,
                real_price: 1799,
                src: "https://elyscents.pk/cdn/shop/files/Green_Elixer.jpg?v=1760523069&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Green-Elixir.jpg?v=1760523069&width=540"
            },
            {
                name: "Icy Stream",
                cut_price: 2000,
                real_price: 1699,
                src: "https://elyscents.pk/cdn/shop/files/Icy_Stream.jpg?v=1760523116&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Icy-Stream.jpg?v=1760523116&width=540"
            },
            {
                name: "Ignitic",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/ignitic.jpg?v=1760522778&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Ignite.jpg?v=1760522778&width=540"
            },
            {
                name: "Island",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/island_1bc2ccb2-efe7-44c8-80d8-c01c9f6a7d0a.jpg?v=1760523770&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Island.jpg?v=1760523770&width=540"
            },
            {
                name: "Lafure",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/lafure.jpg?v=1760522745&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-lafure.jpg?v=1760522745&width=540"
            },
            {
                name: "Leathery Path",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/leathry_path.jpg?v=1760523824&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Leathery-Path.jpg?v=1760523824&width=540"
            },
            {
                name: "Millions Dream",
                cut_price: 2000,
                real_price: 1499,
                src: "https://elyscents.pk/cdn/shop/files/millions_dream_65c1afe3-a24c-461f-8843-9c39a9d23689.jpg?v=1760523648&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Millions-Dream.jpg?v=1760523648&width=540"
            },
            {
                name: "Mystbin",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/mystbin.jpg?v=1760522742&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Mystbin.jpg?v=1760522742&width=540"
            },
            {
                name: "Open",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/Open_d29bfdc6-3390-42ee-8a6c-9f1b8da5ddc2.jpg?v=1760523270&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Open.jpg?v=1760523270&width=540"
            },
            {
                name: 'Oud Essence',
                cut_price: 2000,
                real_price: 1799,
                src: "https://elyscents.pk/cdn/shop/files/Oud_Essence.jpg?v=1760523123&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Esscense.jpg?v=1760523123&width=540"
            },
            {
                name: 'Oud Evergreen',
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/Oud_EverGreen.jpg?v=1760523484&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Evergreen.jpg?v=1760523484&width=540"
            },
            {
                name: 'Oud Majesty',
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/Oud_majesty.jpg?v=1760523188&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Majesty.jpg?v=1760523200&width=540"
            },
            {
            name: 'Oud Velvet',
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/Oud_Velvet.jpg?v=1760522977&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Velvet.jpg?v=1760522977&width=540"
        },
        {
            name: "Prestor",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/prestor.jpg?v=1760522742&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Prestor.jpg?v=1760522742&width=540"
        },
        {
            name: 'Resham Oud',
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/resham_oud.jpg?v=1760523035&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Resham-Oud.jpg?v=1760523035&width=540"
        },
        {
            name: 'Rugged Leather',
            cut_price: 2000,
            real_price: 1799,
            src: "https://elyscents.pk/cdn/shop/files/Rugged_Leather.jpg?v=1760523036&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Rugged-Leather.jpg?v=1760523036&width=540"
        },
        {
            name: 'Smoky Soul',
            cut_price: 2000,
            real_price: 1799,
            src: "https://elyscents.pk/cdn/shop/files/Smoky_soul.jpg?v=1760522972&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Smoky-Soul.jpg?v=1760522972&width=540"
        },
        {
            name: 'Wild Current',
            cut_price: 2000,
            real_price: 1799,
            src: "https://elyscents.pk/cdn/shop/files/Smoky_soul.jpg?v=1760522972&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Wild-Current.jpg?v=1760523104&width=540"
        },
         {
            name: "Wild Essence",
            cut_price: 2100,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/wild_Essence_121a55f5-0fa0-4e3f-9284-ff361b4feda5.jpg?v=1760523219&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Wild-Esscense.jpg?v=1760523219&width=540"
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

export default Perfume_for_him_comp
