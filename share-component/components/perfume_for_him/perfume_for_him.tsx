"use client";
import React, {useState}  from 'react'
import style from './perfume_for_him.module.scss'
const Perfume_for_him = () => {
    const [hoverIndex, setHoverIndex] = useState<any>(null)
    let products = [
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
        }
    ];
    return (
        <>
            <div className={style.wrapper}>
                <h2 className={style.heading}>Perfume For Him</h2>
            </div>
            
            <div className={style.perfumes}>
                {products.map((value, index) => (
                    <div className={style.perfume_item} key={index}>
                        <img src={hoverIndex === index ? value.src1 : value.src}
                        onMouseEnter={()=> setHoverIndex(index)}
                        onMouseLeave={()=> setHoverIndex(null)}
                        alt="" />
                        <h3 className={style.deal_names}>{value.name}</h3>
                        <div>
                            <span className={style.cut_price}>Rs.{value.cut_price}.00</span>
                            <span className={style.real_price}>Rs.{value.real_price}.00</span>
                        </div>
                        <div>
                            <span className={style.save_price}>Save Rs.{value.cut_price - value.real_price}.00</span>
                        </div>
                        <div className={style.cart_btn}><button>Add to Cart</button></div>
                    </div>
                ))}

            </div>

            <div className={style.view_all_btn}><button>VIEW ALL</button></div>

        </>
    )
}

export default Perfume_for_him
