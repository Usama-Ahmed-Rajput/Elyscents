import React from 'react'
import style from './about_us.module.scss'

const About_us = () => {
  return (
   <>
   <div>
    <h1 className={style.main_heading}>About us</h1>
   </div>

   <div className={style.address}>
    <p>Address: A219 block 3 KDA Market Gulshan e Iqbal Near Flourish Salon Karachi </p>
    <p>WhatsApp Us: +92 3012546333 </p>
    <p>Customer Support: helloelyscents@gmail.com </p>
    <p>UAE address: 248,0,LOOTAH BLDG 0 Diera DXB </p>
   </div>

   <div>
    <h2 className={style.sub_heading}>Send us a message or email us at <br /> helloelyscents@gmail.com</h2>
   </div>

   <div className={style.contact}>
      <form className={style.form}>
        
        <div className={style.row}>
          <div className={style.field}>
            <label>NAME</label>
            <input type="text" />
          </div>

          <div className={style.field}>
            <label>EMAIL</label>
            <input type="email" />
          </div>
        </div>

        <div className={style.field}>
          <label>MESSAGE</label>
          <textarea></textarea>
        </div>

        <button type="submit" className={style.btn}>
          SEND
        </button>

      </form>
    </div>

    <div className={style.hCaptcha}>
      <p>This site is protected by hCaptcha and the hCaptcha Privacy Policy and Terms of Service apply.</p>
    </div>
   </>
  )
}

export default About_us
