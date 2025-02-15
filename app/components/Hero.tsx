// components/Hero.tsx
'use client';
import React, { useEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const Hero: React.FC = () => {

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
        <img src="/logos/01.gif" alt="" />
        <button className="bg-white px-6 py-2 text-black hover:bg-gray-400 transition-all duration-300" >
          اضغط وابدأ الرحلة   
        </button>
      </div>


    </section>
  );
};

export default Hero;
