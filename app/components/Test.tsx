'use client';
import React from 'react'
import { ReactLenis } from 'lenis/react';
import ServicesSection from './ServicesSection';

export default function Test() {


  return (
    <ReactLenis root>
    <main>
      <article>
        

        <section className='grid bg-[#3dc1f0] text-black place-content-center h-screen sticky top-0 overflow-hidden'>
          <h1>fixed section</h1>
        </section>
        <section className=' w-full  grid place-content-center sticky top-0 rounded-tr-3xl rounded-tl-3xl'>
          <ServicesSection />
        </section>
      </article>
    </main>
  </ReactLenis>
  )
}
