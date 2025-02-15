// app/components/ImageSwiper.tsx
'use client';
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from "next/image";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImageSwiper: React.FC = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Image 
          src="/works/1.png" // You can also use import to get a local image.
          alt="work 1" 
          width={300} 
          height={300} 
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image 
          src="/works/2.png" // You can also use import to get a local image.
          alt="work 1" 
          width={300} 
          height={300} 
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image 
          src="/works/3.jpeg" // You can also use import to get a local image.
          alt="work 1" 
          width={300} 
          height={300} 
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image 
          src="/works/4.jpeg" // You can also use import to get a local image.
          alt="work 1" 
          width={300} 
          height={300} 
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image 
          src="/works/5.jpeg" // You can also use import to get a local image.
          alt="work 1" 
          width={300} 
          height={300} 
        />
      </SwiperSlide>

    </Swiper>
  );
};

export default ImageSwiper;
