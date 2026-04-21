import React from 'react'
import style from './new_year_special.module.scss'

const New_year_special = () => {
    return (
        <>
            <div className={style.main_img}>
                <img src="https://elyscents.pk/cdn/shop/files/facebook_cover_3.jpg?v=1766830584&width=1920" alt="" />
            </div>

            <div className={style.orng_sec}>
                <h2>🎉New Year Special: Buy 1 Get 2nd at Half Price 🎉</h2>
                <p>Limited time — <span>Dec 27 to 3rd Jan</span>. Don’t miss the New Year Deal! 💥</p>
            </div>
        </>
    )
}

export default New_year_special
