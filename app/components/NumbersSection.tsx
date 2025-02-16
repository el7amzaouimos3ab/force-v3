'use client';
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const NumbersSection = () => {
  useEffect(() => {

    const numbers = document.querySelectorAll(".number");

    numbers.forEach((num) => {
      const targetValue = num.getAttribute("data-target");

      // Initialize GSAP animation for each number
      gsap.fromTo(
        num,
        {
          opacity: 0.8,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: num,
            start: "bottom 80%", // Start counting when the number is near 80% of the viewport height
            end: "top 30%", // End when the top of the number reaches 30% of the viewport height
            scrub: 1, // Smooth scrolling effect
            onEnter: () => {
              gsap.to(num, {
                innerHTML: targetValue,
                duration: 1, // Duration for counting animation
                ease: "power1.out",
                snap: { innerHTML: 1 }, // Snap values to whole numbers
                onUpdate: () => {
                  // Ensure the number is treated as a string for innerHTML
                  num.innerHTML = Math.ceil(Number(num.innerHTML)).toString(); // Ensure whole numbers and convert to string
                },
              });
            },
          },
        }
      );
    });


    gsap.fromTo('.leter',{
        opacity:0,
    },{
        opacity: 1,
          scrollTrigger: {
            trigger: ".leter",
            start: "top 80%", // Start counting when the number is near 80% of the viewport height
            end: "top 30%", // End when the top of the number reaches 30% of the viewport height
            scrub: 1,}
    });


    gsap.fromTo('.leter2',{
        opacity:0,
    },{
        opacity: 1,
          scrollTrigger: {
            trigger: ".leter2",
            start: "top 80%", // Start counting when the number is near 80% of the viewport height
            end: "top 30%", // End when the top of the number reaches 30% of the viewport height
            scrub: 1,}
    });

  }, []);

  return (
    <>

    <section className="numbers-section h-[100%] bg-[#C13C27]">

    <div className="grid grid-cols-1 md:grid-cols-3 h-1/2">
      {/* Grid Item 1 */}
      <div className="relative flex flex-col items-center justify-center text-center p-10 border-item-1">
        
        <div className="flex number-container text-center">
            <h1 className="leter text-6xl text-white">M</h1>
            <div className="number text-6xl text-white" data-target="35">0</div>
            <h1 className="leter text-6xl text-white">,</h1>
            <div className="number text-6xl text-white" data-target="17">0</div>
        </div>
        
      <h2 className="text-white "> اصنع تأثيرًا جريئًا </h2>
        
      </div>

      {/* Grid Item 2 */}
      <div className="relative flex flex-col items-center justify-center text-center p-10 border-item-1">
        
        <div className="flex number-container text-center">
            <h1 className="leter text-6xl text-white">M</h1>
            <div className="number text-6xl text-white" data-target="100000">0</div>
        </div>
        
      <h2 className="text-white "> اصنع تأثيرًا جريئًا </h2>
        
      </div>

      {/* Grid Item 3 */}
      <div className="relative flex flex-col items-center justify-center text-center p-10 border-item-1">
        
        <div className="flex number-container text-center">
            <h1 className="leter text-6xl text-white">M</h1>
            <div className="number text-6xl text-white" data-target="100000">0</div>
        </div>
        
      <h2 className="text-white "> اصنع تأثيرًا جريئًا </h2>
        
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 h-1/2">
      {/* Grid Item 1 */}
      <div className="relative flex flex-col items-center justify-center text-center p-10 border-item">
        
        <div className="flex number-container text-center">
            <h1 className="leter2 text-6xl text-white">M</h1>
            <div className="number text-6xl text-white" data-target="100000">0</div>
        </div>
        
      <h2 className="text-white "> اصنع تأثيرًا جريئًا </h2>
        
      </div>

      {/* Grid Item 2 */}
      <div className="relative flex flex-col items-center justify-center text-center p-10 border-item">
        
        <div className="flex number-container text-center">
            <h1 className="leter2 text-6xl text-white">M</h1>
            <div className="number text-6xl text-white" data-target="300.000">0</div>
        </div>
        
      <h2 className="text-white "> اصنع تأثيرًا جريئًا </h2>
        
      </div>

      {/* Grid Item 3 */}
      <div className="relative flex flex-col items-center justify-center text-center p-10 border-item">
        
        <div className="flex number-container text-center">
            <h1 className="leter2 text-6xl text-white">M</h1>
            <div className="number text-6xl text-white" data-target="300">0</div>
        </div>
        
      <h2 className="text-white "> اصنع تأثيرًا جريئًا </h2>
        
      </div>
    </div>


  </section>
  </>
  );
};

export default NumbersSection;
