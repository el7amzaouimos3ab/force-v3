'use client';
import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import ServicesSection from './ServicesSection';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Test() {

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the background zoom effect on scroll
    gsap.to(".pattern-bg", {
      scale: 1.5, // More reasonable zoom level (adjust as necessary)
      scrollTrigger: {
        trigger: ".zoom-section", // The section you want to trigger the animation on
        start: "top bottom", // Start when the section hits the top of the viewport
        end: "bottom bottom", // End when the section hits the bottom of the viewport
        scrub: true, // Make the animation smooth as you scroll
        markers: false, // Set to true for debugging the scroll trigger markers
      },
    });

  }, []);

  return (
    <ReactLenis root>
      <main>
          <section className='zoom-section bg-[#3dc1f0] text-black grid place-content-center h-screen sticky top-0 overflow-hidden'>
            <div className='pattern-bg absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:140px_140px]'></div>
            <h1 className='2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%] z-10'>
              رحلتك للنجاح تبدأ من هنا
            </h1>
            <p className='text-2xl px-8 font-semibold text-center mt-6 z-10'>
            نحن في القوة الإبداعية للتسويق لا نعتبرك عميلًا فقط، بل شريكًا حقيقيًا في مسيرتك نحو النجاح. دعنا نضع استراتيجياتنا المتطورة وخبراتنا في خدمتك، لنخلق معًا قصص نجاح ملهمة.
            </p>
          </section>
          <section className='w-full grid place-content-center sticky top-0 rounded-tr-3xl rounded-tl-3xl'>
            <ServicesSection />
          </section>
      </main>
    </ReactLenis>
  );
}
