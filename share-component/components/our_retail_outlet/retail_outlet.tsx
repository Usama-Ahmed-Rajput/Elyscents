import React from 'react'
import { BsShop } from "react-icons/bs";
import style from './retail_outlets.module.scss'
const Retail_outlet = () => {
    return (
        <>
            <div className={style.wrapper}>
                <h2 className={style.heading}>Our Retail Outlets</h2>
            </div>

            <div className={style.outlets}>
                <div className={style.main}>
                    <span className={style.icons}><BsShop /></span>
                    <h3 className={style.head}>Mega Outlet</h3>
                    <p className={style.address}>A219 Gulshan Block 3, KDA Market Near to Florish Saloon, Karachi</p>
                </div>

                <div className={style.main}>
                    <span className={style.icons}><BsShop /></span>
                    <h3 className={style.head}>Ocean Mall</h3>
                    <p className={style.address}>Shop no 219, second Floor at Ocean Mall</p>
                </div>

                <div className={style.main}>
                    <span className={style.icons}><BsShop /></span>
                    <h3 className={style.head}>North Walk</h3>
                    <p className={style.address}>Kiosk No.: FF-01 , Phase 1, First Floor NorthWalk Mall Karachi</p>
                </div>
            </div>
        </>
    )
}

export default Retail_outlet
