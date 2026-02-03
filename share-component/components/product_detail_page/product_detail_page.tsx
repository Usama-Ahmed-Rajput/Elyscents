'use client'
import { useState } from 'react'
import style from './product_detail_page.module.scss'
import { FaStar } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { FaCircleDot, FaChevronUp } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

const Product_detail_page = () => {
  const [open, setOpen] = useState(false)
  const [usama, setUsama] = useState(false)

  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");

  // console.log(id)

  return (
    <>

      <div className={style.main_cont}>
        <div className={style.conatiner}>
          <div className={style.image_container}>
            <img src="https://elyscents.pk/cdn/shop/files/SKU.jpg?v=1764765674&width=1080" alt="img" className={style.mn_image} />
          </div>
          <div className={style.text_cont}>
            <h1>6X MEGA DEAL</h1>
            <div className={style.star_cont}>
              <span className={style.star_icon}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span>5 reviews</span>
            </div>
            <div className={style.pricing_sec}>
              <p className={style.orignal_price}>Rs.11,400.00</p>
              <p>Rs.8,399.00</p>
              <span>Save Rs.3,001.00</span>
            </div>
            <div className={style.free_deliver_sec}>
              🛍️ <strong>Buy Any 2 Perfumes</strong> & <strong>FREE Delivery</strong> Get — Automatically Applied at Checkout.
            </div>

            <div className={style.shiping_details}>
              <span><CiGift />FREE gift packing with every order</span>
              <span><TbWorld />14 Days easy return</span>
              <span className={style.green_dot}><FaCircleDot />In stock, ready to ship</span>
            </div>
            <div className={style.perfumes_options}>
              <label htmlFor="perfume1" className={style.lable_txt}>PERFUME 1</label>
              <select id="perfume1">
                <option>ZARAK INSPIRED BY AZZARO WANTED</option>
                <option>WILD ESSENCE - INSPIRED BY DIOR</option>
                <option>SALSA SPIRIT - INPIRED BY CREED</option>
                <option>ROYAL OUD</option>
                <option>PEAK BREEZE - INSPIRED BY SILVER</option>
                <option>GREEN ELIXIR - INSPIRED BY ISSEY MIYAKE</option>
                <option>EXOTIC PULSE</option>
                <option>APEX INSPIRED BY DUNHILL</option>
              </select>
              <label htmlFor="perfume2" className={style.lable_txt}>PERFUME 2</label>
              <select id="perfume1">
                <option>ZARAK INSPIRED BY AZZARO WANTED</option>
                <option>WILD ESSENCE - INSPIRED BY DIOR</option>
                <option>SALSA SPIRIT - INPIRED BY CREED</option>
                <option>ROYAL OUD</option>
                <option>PEAK BREEZE - INSPIRED BY SILVER</option>
                <option>GREEN ELIXIR - INSPIRED BY ISSEY MIYAKE</option>
                <option>EXOTIC PULSE</option>
                <option>APEX INSPIRED BY DUNHILL</option>
              </select>
              <label htmlFor="perfume3" className={style.lable_txt}>PERFUME 3</label>
              <select id="perfume1">
                <option>ZARAK INSPIRED BY AZZARO WANTED</option>
                <option>WILD ESSENCE - INSPIRED BY DIOR</option>
                <option>SALSA SPIRIT - INPIRED BY CREED</option>
                <option>ROYAL OUD</option>
                <option>PEAK BREEZE - INSPIRED BY SILVER</option>
                <option>GREEN ELIXIR - INSPIRED BY ISSEY MIYAKE</option>
                <option>EXOTIC PULSE</option>
                <option>APEX INSPIRED BY DUNHILL</option>
              </select>
              <label htmlFor="perfume4" className={style.lable_txt}>PERFUME 4</label>
              <select id="perfume1">
                <option>ZARAK INSPIRED BY AZZARO WANTED</option>
                <option>WILD ESSENCE - INSPIRED BY DIOR</option>
                <option>SALSA SPIRIT - INPIRED BY CREED</option>
                <option>ROYAL OUD</option>
                <option>PEAK BREEZE - INSPIRED BY SILVER</option>
                <option>GREEN ELIXIR - INSPIRED BY ISSEY MIYAKE</option>
                <option>EXOTIC PULSE</option>
                <option>APEX INSPIRED BY DUNHILL</option>
              </select>
              <label htmlFor="perfume5" className={style.lable_txt}>PERFUME 5</label>
              <select id="perfume1">
                <option>ZARAK INSPIRED BY AZZARO WANTED</option>
                <option>WILD ESSENCE - INSPIRED BY DIOR</option>
                <option>SALSA SPIRIT - INPIRED BY CREED</option>
                <option>ROYAL OUD</option>
                <option>PEAK BREEZE - INSPIRED BY SILVER</option>
                <option>GREEN ELIXIR - INSPIRED BY ISSEY MIYAKE</option>
                <option>EXOTIC PULSE</option>
                <option>APEX INSPIRED BY DUNHILL</option>
              </select>
              <label htmlFor="perfume6" className={style.lable_txt}>PERFUME 6</label>
              <select id="perfume1">
                <option>ZARAK INSPIRED BY AZZARO WANTED</option>
                <option>WILD ESSENCE - INSPIRED BY DIOR</option>
                <option>SALSA SPIRIT - INPIRED BY CREED</option>
                <option>ROYAL OUD</option>
                <option>PEAK BREEZE - INSPIRED BY SILVER</option>
                <option>GREEN ELIXIR - INSPIRED BY ISSEY MIYAKE</option>
                <option>EXOTIC PULSE</option>
                <option>APEX INSPIRED BY DUNHILL</option>
              </select>
            </div>
            <div className={style.add_btns}>
              <button className={style.add_to_cart_btn}>ADD TO CART</button>
              <button className={style.buy_now_btn}>BUY IT NOW</button>
            </div>
            <div className={style.why_thiss__sec}>
              <p>Experience luxury like never before with our Exclusive 6x Perfume Bundle.</p>
              <p>This deal includes six premium fragrances, each crafted to last long, smell rich, and make you stand out everywhere you go.</p>
              <p>Whether you love bold, fresh, or timeless scents, this bundle lets you mix and match your favorites without breaking the bank.</p>
            </div>

            <div className={style.information_cont}>

              <h2>Confidence, compliments & class — all in one bundle.</h2>

              <div className={`${style.accordion_item} ${open ? style.active : ''}`}>
                <div className={style.accordion_title} onClick={() => setOpen(!open)}>
                  <h3>SHIPPING INFORMATION</h3>
                  <span className={`${style.icon} ${open ? style.rotate : ''}`}><FaChevronUp /></span>
                </div>
                <div className={`${style.accordion_content} ${open ? style.active : ''}`}>
                  <ul>
                    <li>
                      <strong>What are the Delivery charges?</strong>
                      <p>The delivery charges are Rs 200</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <strong>When will my order be delivered?</strong>
                      <p>For Karachi - 2-3 working days.</p>
                      <p>Outside Karachi - 3-5 working days.</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`${style.accordion_item} ${usama ? style.active : ''}`}>
                <div
                  className={style.accordion_title}
                  onClick={() => setUsama(!usama)}
                >
                  <h3>ASK A QUESTION</h3>
                  <span className={`${style.icon} ${usama ? style.rotate : ''}`}>
                    <FaChevronUp />
                  </span>
                </div>

                <div className={`${style.accordion_content2} ${usama ? style.active : ''}`}>
                  <form className={style.ask_form}>

                    <div className={style.form_row}>
                      <div className={style.form_group}>
                        <label>NAME</label>
                        <input type="text" placeholder="Your Name" />
                      </div>

                      <div className={style.form_group}>
                        <label>EMAIL</label>
                        <input type="email" placeholder="Your Email" />
                      </div>
                    </div>

                    <div className={style.form_group}>
                      <label>MESSAGE</label>
                      <textarea placeholder="Write your question here..." />
                    </div>

                    <button type="submit" className={style.send_btn}>
                      SEND
                    </button>

                    <p className={style.captcha_text}>
                      This site is protected by hCaptcha and the hCaptcha Privacy Policy and
                      Terms of Service apply.
                    </p>

                  </form>
                </div>
              </div>
            </div>
            <div className={style.social}>
              <span className={style.icon_title}><FaFacebook />Share</span>
              <span className={style.icon_title}><FaTwitter />Tweet</span>
              <span className={style.icon_title}><FaPinterest />Pin it</span>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Product_detail_page
