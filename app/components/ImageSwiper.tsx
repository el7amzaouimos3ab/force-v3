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
        <h1 id='works' className='bottom-to-top-text1 text-white text-4xl md:text-5xl font-medium py-14  px-4 lg:px-8'>أعمالنا</h1>
      </div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
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
      className='w-full h-screen'
      
    >
      <SwiperSlide>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image 
          src="/works/1.PNG" // You can also use import to get a local image.
          alt="work 1" 
          layout="fill" 
          objectFit="cover" 
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>

        <Image 
          src="/works/2.PNG" // You can also use import to get a local image.
          alt="work 2" 
          layout="fill" 
          objectFit="cover" 
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative w-full h-full">

        <Image 
          src="/works/3.JPEG" // You can also use import to get a local image.
          alt="work 3" 
          layout="fill" 
          objectFit="cover" 
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>

        <Image 
          src="/works/4.JPEG" // You can also use import to get a local image.
          alt="work 4" 
          layout="fill" 
          objectFit="cover" 
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>

        <Image 
          src="/works/5.jpeg" // You can also use import to get a local image.
          alt="work 5" 
          layout="fill" 
          objectFit="cover" 
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        />
        </div>
      </SwiperSlide>

    </Swiper>
    </section>
    </>
  );
};

export default ImageSwiper;
