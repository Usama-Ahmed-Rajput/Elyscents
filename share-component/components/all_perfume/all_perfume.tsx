import React from 'react'
import style from './all_perfume.module.scss'
import Link from 'next/link'
const All_perfume = () => {
    return (
        <>
            <div className={style.top_image}>
                <img src="https://elyscents.pk/cdn/shop/files/elyscents-banner.jpg?v=1716647770" alt="" />
            </div>

            <div className={style.images}>
              <Link href="/perfume_for_him"><img src="https://elyscents.pk/cdn/shop/files/Dreame.jpg?v=1760523421&width=540" alt="Men Perfumes" /></Link>
                <Link href="/perfume_for_her"><img src="https://elyscents.pk/cdn/shop/files/rosy_Blossom.jpg?v=1760536616&width=1080" alt="Women Perfumes" /></Link>
                <Link href="/unisex"><img src="https://elyscents.pk/cdn/shop/collections/unisex_01.jpg?v=1760594011&width=540" alt="Unisex" /></Link>
                <Link href="/oud_collection"><img src="https://elyscents.pk/cdn/shop/files/Oud_majesty.jpg?v=1760523188&width=1080" alt="Oud Collection" /></Link>
                <Link href="/best_selling"><img src="https://elyscents.pk/cdn/shop/files/Salsa_Spirit_40a4eff5-1c16-4bf3-97ad-bcec31a39ded.jpg?v=1760523136&width=1080" alt="Best Seller Perfume" /></Link>
                <Link href="/new_arrivals"><img src="https://elyscents.pk/cdn/shop/collections/4.jpg?v=1760593987&width=540" alt="New Arrivals" /></Link>
                <Link href="/crazy_deals"><img src="https://elyscents.pk/cdn/shop/files/4_perfume_new_1.jpg?v=1764960763&width=540" alt="Crazy Deals" /></Link>
            </div>
        </>
    )
}

export default All_perfume
