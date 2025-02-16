'use client';
import Image from "next/image";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react'




gsap.registerPlugin(ScrollTrigger);

export default function ZoomingLogo() {

useEffect(()=> {

    
    

    ScrollTrigger.create({

        trigger: ".main",
        start:"top top",
        end: ()=> `+=${innerHeight * 2}`,
        pin: true,
        pinSpacing: true,

    })

    


   gsap.to(".logo-logo", {
      scrollTrigger: {
        trigger: ".logo-logo", // This triggers the effect when the logo enters the viewport
        start: "top top", // Trigger when top of the logo hits the bottom of the viewport
        end: `+=${window.innerHeight }`, // End when top of the logo reaches top of the viewport
        scrub: true, // Makes the animation smooth with scrolling

    },
    ease: "none",
    scale: 25, // Scale the logo to 25x its size (adjust as needed)
    });

    gsap.to(".final-section", {
        scrollTrigger: {
          trigger: ".final-section", // This triggers the effect when the logo enters the viewport
          start: `+=${window.innerHeight }`, // Trigger when top of the logo hits the bottom of the viewport
          end: `top top`, // End when top of the logo reaches top of the viewport
          scrub: true, // Makes the animation smooth with scrolling
  
      },
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.5,
      });



}, []);


  return (
    <>
        
        <section className='section main'>
            <div className="main-content w-full-h-full">
                <div className="logo w-full-h-full">
                <Image 
                            src="/logos/logoo.svg" // You can also use import to get a local image.
                            alt="Image 1" 
                            width={100} 
                            height={100} 
                            className="logo-logo"
                          />
                </div>
            </div>

            <div className='flex final-section justify-center items-center text-center'> 
                
                <h1 className='text-4xl w-[70%]'>نحن شغوفون بالابتكار والأفكار الرائعة والتنفيذ الذي يجمع كل ذلك في تجربة واحدة جميلة. إذا كنت كذلك، فاتصل بنا أو أرسل لنا بريدًا إلكترونيًا للبدء. </h1>
            
            </div>

        </section>
        
        
    </>
  )
}