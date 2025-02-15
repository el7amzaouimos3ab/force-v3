// app/components/ImageSection.tsx
'use client';
import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from "next/image";


const PartnersSection: React.FC = () => {

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
  const images = Array.from({ length: 21 }, (_, i) => `/images/${i + 1}.png`);

  return (
    <section className="px-8 py-16 bg-gray-100">
      <div className="fade-image grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 rtl">
        {/* Loop over the images array and display each image */}
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden border border-black">
            <Image 
                      src={image} // You can also use import to get a local image.
                      alt={`Image ${index + 1}`}
                      width={500} 
                      height={300} 
                      className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110"
                    />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
