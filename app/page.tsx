import Hero from "./components/Hero";
import ReactLenis from "lenis/react";
import SecondSection from "./components/SecondSection";
import PartnersSection from "./components/PartnersSection";
import ServicesSection from "./components/ServicesSection";
import ImageSwiper from "./components/ImageSwiper";
import NumbersSection from "./components/NumbersSection";
import ZoomingLogo from "./components/ZoomingLogo";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <SecondSection />
        <PartnersSection />
        <ServicesSection />
        <ImageSwiper/>
        <NumbersSection />
        <ZoomingLogo />
      </ReactLenis>
    </>
  );
}
