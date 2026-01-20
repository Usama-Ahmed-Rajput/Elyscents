'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './new_arrivals.module.scss'
import Link from 'next/link'

type IProductsType = {
    name: string,
    cut_price: number,
    real_price: number,
    src: string,
    src1: string
}

const New_arrivals = () => {
    const [hoverIndex, setHoverIndex] = useState<any>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [product, setProduct] = useState<IProductsType[]>([])
    const [sortBy, setSortBy] = useState('featured')

    useEffect(() => {

        setProduct([
            {
                name: "Formel",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/Formel.jpg?v=1760522782&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Formal.jpg?v=1760522782&width=540"
            },
            {
                name: "Velina",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/velina_2323b953-0e39-4cdb-899e-bd1faeb68d9d.jpg?v=1760522545&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscent-Velina.jpg?v=1760522545&width=540"
            },
            {
                name: "Astral",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/astral.jpg?v=1760522559&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Astral.jpg?v=1760522559&width=540"
            },
            {
                name: "Dark Raven",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/dark_reven.jpg?v=1760522570&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Dark-Raven.jpg?v=1760522570&width=540"
            },
            {
                name: "Prestor",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/prestor.jpg?v=1760522742&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Prestor.jpg?v=1760522742&width=540"
            },
            {
                name: "Mystbin",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/mystbin.jpg?v=1760522742&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Mystbin.jpg?v=1760522742&width=540"
            },
            {
                name: "After Nine",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/after_9.jpg?v=1760522742&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-After_Nine.jpg?v=1760522742&width=540"
            },
            {
                name: "Lafure",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/lafure.jpg?v=1760522745&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-lafure.jpg?v=1760522745&width=540"
            },
            {
            name: "Zarak",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/zarak.jpg?v=1760522773&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Zarak.jpg?v=1760522773&width=540"
        },
            {
            name: "Ignitic",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/ignitic.jpg?v=1760522778&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Ignite.jpg?v=1760522778&width=540"
        },
            {
            name: "Sitara",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/sitara.jpg?v=1760522786&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Sitara.jpg?v=1760522786&width=540"
        },
            {
            name: "She Inspired By Purple Palia",
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/She.jpg?v=1760522790&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-She.jpg?v=1760522790&width=540"
        },
        {
                name: "Ripe Muse",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/ripe_muse.jpg?v=1760522794&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Ripe-Muse.jpg?v=1760522794&width=540"
            },
            {
                name: "Rebel Bloom",
                cut_price: 2100,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/rebel_bloom.jpg?v=1760522809&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Rebel-Bloom.jpg?v=1760522809&width=540"
            },
            {
                name: "Berry Grace",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/berry_grace.jpg?v=1760522656&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Beryy-Grace.jpg?v=1760522656&width=540"
            },
            {
                name: 'Falling Star',
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/falling_star.jpg?v=1760523149&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Falling-Star.jpg?v=1760523149&width=540"
            },
            {
                name: 'Oud Majesty',
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/Oud_majesty.jpg?v=1760523188&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Majesty.jpg?v=1760523200&width=540"
            },
             {
                name: "Open",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/Open_d29bfdc6-3390-42ee-8a6c-9f1b8da5ddc2.jpg?v=1760523270&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Open.jpg?v=1760523270&width=540"
            },
            {
                name: "Island",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/island_1bc2ccb2-efe7-44c8-80d8-c01c9f6a7d0a.jpg?v=1760523770&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Island.jpg?v=1760523770&width=540"
            },
            {
                name: 'Freedom',
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/freedom_384392bf-834f-46cf-851c-4abc64b9cbd1.jpg?v=1760523715&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Freedom.jpg?v=1760523715&width=540"
            },
            {
                name: "Extreme",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/Extreme_89124fd2-8267-4ef3-8ce9-a3cf3c91a622.jpg?v=1760523534&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Extreme.jpg?v=1760523534&width=540"
            },
            
           {
                name: "Avenue",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/avenue_56e5ac6a-19c7-4953-851a-b35b912071b1.jpg?v=1760523319&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Avenue.jpg?v=1760523319&width=540"
            },
            {
                name: "Athens",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/athens_5bc2ae46-d37b-4f70-83c2-4b5df614fb95.jpg?v=1760522955&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Athens.jpg?v=1760522955&width=540"
            },
            
            {
                name: "Adventure",
                cut_price: 2000,
                real_price: 1899,
                src: "https://elyscents.pk/cdn/shop/files/adventure_8dd77233-f9ec-4b00-98f0-d13c44ca7b35.jpg?v=1760522999&width=1080",
                src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Adventure.jpg?v=1760522999&width=540"
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

export default New_arrivals
