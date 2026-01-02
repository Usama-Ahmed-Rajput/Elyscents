"use client";
import React, {useState} from 'react'
import style from './oud_collection.module.scss'
const Oud_collection = () => {
    const [hoverIndex, setHoverIndex] = useState<any>(null)
    let products = [
        {
            name: 'Oud Majesty',
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/Oud_majesty.jpg?v=1760523188&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Majesty.jpg?v=1760523200&width=540"
        },
        {
            name: 'Oud Essence',
            cut_price: 2000,
            real_price: 1799,
            src: "https://elyscents.pk/cdn/shop/files/Oud_Essence.jpg?v=1760523123&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Esscense.jpg?v=1760523123&width=540"
        },
        {
            name: 'Dream Oud',
            cut_price: 2000,
            real_price: 1799,
            src: "https://elyscents.pk/cdn/shop/files/Dream_Oud.jpg?v=1760522968&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Dream-Oud.jpg?v=1760522968&width=540"
        },
        {
            name: 'Oud Velvet',
            cut_price: 2000,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/Oud_Velvet.jpg?v=1760522977&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Velvet.jpg?v=1760522977&width=540"
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
            name: 'Crystal Oud',
            cut_price: 2100,
            real_price: 1899,
            src: "https://elyscents.pk/cdn/shop/files/Crystal_Oud.jpg?v=1760523084&width=1080",
            src1: "https://elyscents.pk/cdn/shop/files/Elyscents-Crystal-Oud.jpg?v=1760523084&width=540"
        }
    ];
    return (
        <>
            <div className={style.wrapper}>
                <h2 className={style.heading}>Oud Collection</h2>
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

export default Oud_collection
