'use client';
import Image from "next/image";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




gsap.registerPlugin(ScrollTrigger);

export default function ZoomingLogo() {

   

  return (
    <>
        
        <section className=' bg-gray-800 flex items-center justify-center w-full h-full'>
                <Image 
                            src="/logos/logoo.svg" // You can also use import to get a local image.
                            alt="Image 1" 
                            width={200} 
                            height={200} 
                            className="logo-logo1"
                          />

        </section>
        
        
    </>
  )
}