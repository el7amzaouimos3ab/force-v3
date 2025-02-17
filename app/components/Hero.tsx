// components/Hero.tsx
'use client';

import Image from "next/image";
import React, { useEffect, useState, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import VideoModale from "./VideoModale";


gsap.registerPlugin(ScrollTrigger);


const Hero: React.FC = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);


    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

  useEffect(() => {

    // ScrollTrigger to darken the section on scroll
    gsap.fromTo(
      '.hero-section', // Target the section with the class 'hero-section'
      { opacity: 1 }, // Initial opacity (fully visible)
      {
        opacity: 0, // Final opacity (darken the section)
        scrollTrigger: {
          trigger: '.hero-section', // Trigger the effect when the section comes into view
          start: 'top top', // Trigger when the top of the section hits the top of the viewport
          end: 'bottom top', // End when the bottom of the section hits the top of the viewport
          scrub: true, // Makes the animation tie to the scroll position
          markers: false, // Set to true for debugging to see the start/end markers
        },
      }
    );
  }, []);

  return (
    <section className="hero-section relative w-full h-full">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src="/videos/Force3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>

      {/* Text Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
          <Image 
            src="/logos/01.gif" // You can also use import to get a local image.
            alt="work 1" 
            width={500} 
            height={500}
            unoptimized // Disable image optimization for GIFs
            className="w-[250px] md:w-full"
 
          />
        <button ref={triggerButtonRef} className="bg-white px-6 py-2 mt-20 md:mt-1 text-black hover:bg-gray-400 transition-all duration-300" onClick={openModal} >
          اضغط وابدأ الرحلة   
        </button>

         
        
      </div>
      {/* Modal Component */}
      < VideoModale isOpen={isModalOpen} onClose={closeModal} triggerButtonRef={triggerButtonRef} />

    </section>
  );
};

export default Hero;
