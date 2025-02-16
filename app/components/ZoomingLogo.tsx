'use client';
import Image from "next/image";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




gsap.registerPlugin(ScrollTrigger);

export default function ZoomingLogo() {




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