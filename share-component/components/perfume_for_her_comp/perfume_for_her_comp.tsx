"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import style from "./perfume_for_her_comp.module.scss";
import Link from "next/link";
import { perfume_for_her } from "@/share-component/api/perfume_for_her.json";

type IProductsType = {
  name: string;
  cut_price: number;
  real_price: number;
  src: string;
  src1: string;
};

const Perfume_for_her_comp = () => {
  const [hoverIndex, setHoverIndex] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [product, setProduct] = useState<IProductsType[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    setProduct(perfume_for_her);
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

  const sortedProducts = [...product].sort((a, b) => {
    if (sortBy === "az") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "za") {
      return b.name.localeCompare(a.name);
    }

    if (sortBy === "low") {
      return a.real_price - b.real_price;
    }

    if (sortBy === "high") {
      return b.real_price - a.real_price;
    }

    return 0;
  });
  return (
    <>
      <div className={style.top_image}>
        <img
          src="https://elyscents.pk/cdn/shop/files/elyscents-banner.jpg?v=1716647770"
          alt=""
        />
      </div>

      <div className={style.filter_product}>
        <p>{product.length} Products</p>
        <div>
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="az">Alphabetically, A-Z</option>
            <option value="za">Alphabetically, Z-A</option>
            <option value="low">Price, Low to High</option>
            <option value="high">Price, High to Low</option>
          </select>
        </div>
      </div>

      {!isMobile && (
        <div className={style.perfumes}>
          {sortedProducts.map((value: IProductsType, index: number) =>
            CartItem(value, index),
          )}
        </div>
      )}

      {isMobile && (
        <Swiper slidesPerView={1.2} spaceBetween={15}>
          {sortedProducts.map((value: IProductsType, index: number) => (
            <SwiperSlide key={index}>{CartItem(value, index)}</SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Perfume_for_her_comp;
