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
    <>
    <section className='pb-10'>
    <div>
        <h1 className='text-white text-4xl md:text-5xl font-medium py-10'>أعمالنا</h1>
      </div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        // Customize breakpoints for different screen sizes
        640: {
          slidesPerView: 1,  // 1 slide on mobile (screen width <= 640px)
        },
        768: {
          slidesPerView: 2,  // 2 slides on tablets (screen width <= 768px)
        },
        1024: {
          slidesPerView: 4,  // 4 slides on desktop (screen width >= 1024px)
        },
      }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      
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
          alt="work 2" 
          width={300} 
          height={300} 
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image 
          src="/works/3.jpeg" // You can also use import to get a local image.
          alt="work 3" 
          width={300} 
          height={300} 
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image 
          src="/works/4.jpeg" // You can also use import to get a local image.
          alt="work 4" 
          width={300} 
          height={300} 
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image 
          src="/works/5.jpeg" // You can also use import to get a local image.
          alt="work 5" 
          width={300} 
          height={300} 
        />
      </SwiperSlide>

    </Swiper>
    </section>
    </>
  );
};

export default ImageSwiper;
