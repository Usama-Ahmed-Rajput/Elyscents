"use client";
import React from 'react';
import style from './main_image.module.scss';

import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://elyscents.pk/cdn/shop/files/Outlet_banner01.jpg?v=1760516605&width=1920",
  "https://elyscents.pk/cdn/shop/files/royal_oud_Banner.jpg?v=1760593492&width=1920",
  "https://elyscents.pk/cdn/shop/files/Salsa_spirit_Banner.jpg?v=1760593491&width=1920",
  "https://elyscents.pk/cdn/shop/files/zarak_Banner.jpg?v=1760593493&width=1920",
];

const Main_image = () => {
  return (
    <>
    <div className={style.image_container}>
      
      <Swiper
        modules={[Pagination, Autoplay
        ]}
        slidesPerView={1}
        loop={true}
        speed={400}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`banner-${index}`} className={style.banner_img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default Main_image;
