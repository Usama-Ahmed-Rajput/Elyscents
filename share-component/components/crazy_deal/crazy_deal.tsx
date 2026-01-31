'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from "./crazy_deal.module.scss";
import Link from 'next/link';

type IProductsType = {
  id : number,
  name : string,
  cut_price : number,
  real_price : number,
  src : string,
  src1 : string
}

const Crazy_deal = () => {
  const [hoverIndex, setHoverIndex] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false)
  const [product, setProduct] = useState<IProductsType[]>([])


  useEffect(()=>{
    
    setProduct ([
    {
      id : 1,
      name: "6x Mega Deal",
      cut_price: 11400,
      real_price: 8399,
      src: "https://elyscents.pk/cdn/shop/files/SKU.jpg?v=1764765674&width=1800",
      src1: "https://elyscents.pk/cdn/shop/files/SKU.jpg?v=1764765674&width=1800"
    },
    {
      id : 2,
      name: "4x Perfume Bundle",
      cut_price: 7596,
      real_price: 5599,
      src: "https://elyscents.pk/cdn/shop/files/4_perfume_new_1.jpg?v=1764960763&width=1800",
      src1: "https://elyscents.pk/cdn/shop/files/4_perfume_new_1.jpg?v=1764960763&width=1800"
    },
    {
      id : 3,
      name: "3x Perfume Bundle",
      cut_price: 5700,
      real_price: 4444,
      src: "https://elyscents.pk/cdn/shop/files/3_perfume_Deal.jpg?v=1760181185&width=1080",
      src1: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=540"
    },
    {
      id : 4,
      name: "The Perfect Duo",
      cut_price: 3700,
      real_price: 2999,
      src: "https://elyscents.pk/cdn/shop/files/perfect_Duo_2.0.jpg?v=1760428407&width=540",
      src1: "https://elyscents.pk/cdn/shop/files/perfect_Duo_2.0.jpg?v=1760428407&width=540"
    },
    {
      id : 5,
      name: "Oud Duo Combo",
      cut_price: 3900,
      real_price: 3199,
      src: "https://elyscents.pk/cdn/shop/files/ouddeal_1.jpg?v=1766596989&width=540",
      src1: "https://elyscents.pk/cdn/shop/files/ouddeal_1.jpg?v=1766596989&width=540"
    },
    {
      id : 6,
      name: "Top 3 Best Sellers",
      cut_price: 5600,
      real_price: 4400,
      src: "https://elyscents.pk/cdn/shop/files/image_5.png?v=1763039447&width=540",
      src1: "https://elyscents.pk/cdn/shop/files/image_5.png?v=1763039447&width=540"
    },
    {
      id : 7,
      name: "Office Deal",
      cut_price: 5700,
      real_price: 4400,
      src: "https://elyscents.pk/cdn/shop/files/officedeal.jpg?v=1765439449&width=540",
      src1: "https://elyscents.pk/cdn/shop/files/officedeal.jpg?v=1765439449&width=540"
    },
    {
      id : 8,
      name: "Tester Box",
      cut_price: 1250,
      real_price: 990,
      src: "https://elyscents.pk/cdn/shop/files/testerbox1_1800x1800.jpg?v=1760517576",
      src1: "https://elyscents.pk/cdn/shop/files/testerbox2.jpg?v=1760517577&width=540"
    }
  ]);
  },[])

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
    <Link href="/product_detail?id=1">
      <img
        src={hoverIndex === index ? value.src1 : value.src}
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(null)}
        alt=""
        />
        </Link>

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
  return (
    <>
      <div className={style.wrapper}>
        <h2 className={style.heading}>Crazy deal</h2>
      </div>

      {!isMobile && (
        <div className={style.perfumes}>
          {product.map((value:IProductsType, index:number) =>
            CartItem(value, index)
          )}
        </div>
      )}

      {isMobile && (
        <Swiper slidesPerView={1.2} spaceBetween={15}>
          {product.map((value:IProductsType, index:number) => (
            <SwiperSlide key={index}>
              {CartItem(value, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className={style.view_all_btn}><Link href="/crazy_deals"><button>VIEW ALL</button></Link></div>

    </>
  );
};

export default Crazy_deal;
