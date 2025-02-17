'use client';
import Image from "next/image";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from "react";




gsap.registerPlugin(ScrollTrigger);

export default function ZoomingLogo() {

  useEffect(()=> {

    if (typeof window !== "undefined") {
      window.scrollTo(0, 0); // Ensure that the page starts at the top after load
    }

    
   // ScrollTrigger for .main
  ScrollTrigger.create({
    trigger: ".main",
    start: "top top",
    end: () => `+=${window.innerHeight *2}`, 
    pin: true,
    scrub: 1, // Smooth scrolling effect
  });

    // ScrollTrigger for .logo
    gsap.to(".logo", {
      scrollTrigger: {
          trigger: ".logo",
          start: "top top", // Start when the top of .logo hits the top of the viewport
          end: `+=${window.innerHeight}`, // End when the scroll position has moved by one viewport height
          scrub: true, // Sync animation with scroll position
      },
      scale: 20, // Scale animation effect
    });


    // ScrollTrigger for .text-zoom
    gsap.to(".text-zoom", {
      scrollTrigger: {
          trigger: ".text-zoom",
          start: `+=${window.innerHeight}`, 
          end: "top 90%", // End when the top of .text-zoom reaches 50% of the viewport height
          scrub: true, // Sync animation with scroll position
      },
      opacity: 1, // Fade in effect
      filter: "blur(0px)", // Remove blur
      duration: 0.5, // Smooth transition
    });
    
   
}, []);

   

  return (
    <>
        
        <section className='main bg-gray-800 flex items-center justify-center w-full h-full overflow-hidden'>
            

            <Image 
              id="logo"
              src="/logos/logoo.svg" // You can also use import to get a local image.
              alt="Image 1" 
              width={200} 
              height={200} 
              className="logo origin-[50%_43%]"
            />

            <div className='absolute flex justify-center items-center text-center'> 
                
                <h1 className='text-zoom text-3xl md:text-4xl w-[95%] md:w-[70%] '>نحن شغوفون بالابتكار والأفكار الرائعة والتنفيذ الذي يجمع كل ذلك في تجربة واحدة جميلة. إذا كنت كذلك، فاتصل بنا أو أرسل لنا بريدًا إلكترونيًا للبدء. </h1>
            
            </div>

        </section>
        
        
    </>
  )
}