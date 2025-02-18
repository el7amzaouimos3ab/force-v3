// Importing React and Next.js related modules
import React from "react";
import ReactLenis from "lenis/react";

// Importing components for different sections of the page
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SecondSection from "./components/SecondSection";
import PartnersSection from "./components/PartnersSection";
import ServicesSection from "./components/ServicesSection";
import ImageSwiper from "./components/ImageSwiper";
import NumbersSection from "./components/NumbersSection";
import ZoomingLogo from "./components/ZoomingLogo";
import ContactSection from "./components/ContactSection";
import { Footer } from "./components/Footer";




export default function Home() {
  return (
    <>

      <ReactLenis root>
        {/* Navigation Bar */}
        <Nav />
        
        {/* Hero Section (First section on the page) */}
        <Hero />
        
        {/* Second Section (Can be a showcase or any other content) */}
        <SecondSection />
        
        {/* Partners Section (Showcase of partners or collaborators) */}
        <PartnersSection />
        
        {/* Services Section (Overview of the services you offer) */}
        <ServicesSection />
        
        {/* Image Swiper (Showcase images with a swiper or carousel) */}
        <ImageSwiper/>
        
        {/* Numbers Section (Showcase important statistics, numbers, etc.) */}
        <NumbersSection />
        
        {/* Zooming Logo (A cool animation or effect on your logo) */}
        <ZoomingLogo />
        
        {/* Contact Section (Form or contact details) */}
        <ContactSection />
        
        {/* Footer (Footer of the page with additional information or links) */}
        <Footer />
      </ReactLenis> 
    </>
  );
}
