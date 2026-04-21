"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import style from "./oud_collection.module.scss";
import Link from "next/link";
import { oud_products } from "@/share-component/api/oud.json";

type IProductsType = {
  name: string;
  cut_price: number;
  real_price: number;
  src: string;
  src1: string;
};

const Oud_collection = () => {
  const [hoverIndex, setHoverIndex] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [product, setProduct] = useState<IProductsType[]>([]);

  useEffect(() => {
    setProduct(oud_products);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CartItem = (value: any, index: number) => (
    <div className={style.perfume_item} key={index}>
      <Link href={`/product_detail/${value.slug}`}>
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
  );
  return (
    <>
      <div className={style.wrapper}>
        <h2 className={style.heading}>Oud Collection</h2>
      </div>

      {!isMobile && (
        <div className={style.perfumes}>
          {product.map((value: IProductsType, index: number) =>
            CartItem(value, index),
          )}
        </div>
      )}

      {isMobile && (
        <Swiper slidesPerView={1.2} spaceBetween={15}>
          {product.map((value: IProductsType, index: number) => (
            <SwiperSlide key={index}>{CartItem(value, index)}</SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className={style.view_all_btn}>
        <Link href="/oud_collection">
          <button>VIEW ALL</button>
        </Link>
      </div>
    </>
  );
};

export default Oud_collection;
