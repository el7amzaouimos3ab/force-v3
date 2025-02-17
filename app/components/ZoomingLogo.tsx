'use client';
import Image from "next/image";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from "react";




gsap.registerPlugin(ScrollTrigger);

export default function ZoomingLogo() {


  useEffect(()=> {

    
    ScrollTrigger.create({

        trigger: ".main",
        start:"top top",
        end: ()=> `+=${window.innerHeight * 2}`,
        pin: true,

    });

    gsap.to(".logo ",{
      
      scrollTrigger:{
        trigger:".logo",
        start:"top top",
        end: `+=${window.innerHeight }`,
        scrub: true,
      },
      scale:20,
    });


    gsap.to(".text-zoom ",{
      
      scrollTrigger:{
        trigger:".text-zoom",
        start:`+=${window.innerHeight }`,
        end: "top top",
        scrub: true,
      },
      opacity : 1,
      filter: "blur(0px)",
      duration: 0.5,
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