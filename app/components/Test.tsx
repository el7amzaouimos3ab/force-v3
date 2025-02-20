'use client';
import React from 'react'
import { ReactLenis } from 'lenis/react';
import PartnersSection from './PartnersSection';
import ServicesSection from './ServicesSection';

export default function Test() {


  return (
    <ReactLenis root>
    <main>
      <article>
        

        <section className='grid place-content-center h-screen sticky top-0 overflow-hidden'>
          <PartnersSection />
        </section>
        <section className=' w-full  grid place-content-center sticky top-0'>
          <ServicesSection />
        </section>
      </article>
    </main>
  </ReactLenis>
  )
}
