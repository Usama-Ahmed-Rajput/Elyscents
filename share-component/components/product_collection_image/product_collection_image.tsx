import React from 'react'
import style from './product_collection.module.scss'
const Product_collection_image = () => {
    return (
        <>
            <div className={style.wrapper}>
                <h2 className={style.heading}>OUR PRODUCT COLLECTIONS</h2>
            </div>
            <div className={style.collection_images}>
             <div className={style.images}><img src="https://elyscents.pk/cdn/shop/collections/4.jpg?v=1760593987&width=540" alt="Zarak" /></div> 
             <div className={style.images}><img src="https://elyscents.pk/cdn/shop/collections/perfume_for_men.jpg?v=1760593925&width=540" alt="Salsa Sprit" /></div>
                <div className={style.images}><img src="https://elyscents.pk/cdn/shop/collections/women_profile.jpg?v=1760593894&width=540" alt="Flora Fantasy" /></div>
                <div className={style.images}><img src="https://elyscents.pk/cdn/shop/collections/unisex_01.jpg?v=1760594011&width=540" alt="Royal Oud" /></div>
            </div>
        </>
    )
}

export default Product_collection_image
