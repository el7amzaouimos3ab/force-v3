// app/components/ImageSection.tsx
'use client';
import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from "next/image";
import MouseBlurEffect from "./MouseBlurEffect";



const PartnersSection: React.FC = () => {

    const sectionRef = useRef<HTMLDivElement | null>(null); // Reference to the section
      const centerColor = "#d4d7d9"; // Color at the center
      const edgeColor = "#f7fafc";

  useEffect(() => {
    // GSAP animation with ScrollTrigger
    gsap.fromTo(
      '.fade-image', // target the image class
      {
        opacity: 0, // start with the image invisible
      },
      {
        opacity: 1, // make the image fully visible
        duration: 1.5, // duration of the fade-in effect
        scrollTrigger: {
          trigger: '.fade-image', // the image element itself is the trigger
          start: 'top 80%', // when the top of the image reaches 80% from the top of the viewport
          end: 'top 30%', // when the top of the image reaches 30% from the top of the viewport
        },
      }
    );
  }, []);


  // Array to generate image paths
  const images = Array.from({ length: 18 }, (_, i) => `/images/${i + 1}.png`);
 
  return (
    <section id='partners' className="relative bg-[#f7fafc] pb-10  px-4 lg:px-8 overflow-hidden" ref={sectionRef}>
     

      <MouseBlurEffect 
        containerRef={sectionRef} 
        centerColor={centerColor} 
        edgeColor={edgeColor} 
      />

      <div>
        <h1 className='bottom-to-top-text1 text-black text-4xl md:text-5xl font-medium py-10'>شركاؤنا</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4 rtl">
        {/* Loop over the images array and display each image */}
        {images.map((image, index) => (
          <div key={index} className="bottom-to-top-text1 relative overflow-hidden border border-black">
            <Image 
              src={image} // You can also use import to get a local image.
              alt={`Image ${index + 1}`}
              width={615} 
              height={432} 
              className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-transform duration-500 ease-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
