'use client';
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const NumbersSection: React.FC = () => {
  useEffect(() => {


    const texts = gsap.utils.toArray('.bottom-to-top') as HTMLElement[];


    // GSAP animation with ScrollTrigger
    texts.forEach((texts) => {
    
    gsap.fromTo(
      texts, // target class for the text
      {
        y: 35, // initial position (100px below its final position)
        opacity: 0, // initial opacity (invisible)
      },
      {
        y: 0, // final position (original position)
        opacity: 1, // final opacity (fully visible)
        ease: 'power3.out',
        scrollTrigger: {
          trigger: texts,
          start: 'top bottom', // animation starts when the top of the element is 80% from the top of the viewport
          end: 'bottom bottom', // animation ends when the top of the element reaches 30% of the viewport
          scrub: 1, // smooth scrubbing (animation tied to scroll position)
        },
      }
    );
  });

    

    const numbers = document.querySelectorAll(".number");

    numbers.forEach((num) => {
      const targetValue = num.getAttribute("data-target");

      // Initialize GSAP animation for each number
      gsap.to(
        num,
        {
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



  }, []);

  return (
    <>

    <section id="numbers" className="numbers-section bg-[#C13C27]">

    <div className="bottom-to-top">
        <h1 className='text-white text-4xl md:text-5xl font-medium py-10'>فورس بالأرقام</h1>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-3 ">
      {/* Grid Item 1 */}
      <div className=" relative flex flex-col items-center justify-center text-center py-20 border-item-1">
        
      <div className="bottom-to-top flex number-container text-center">
            <div className="number text-6xl text-white" data-target="40">0</div>
        </div>
        
      <h2 className="bottom-to-top text-white ">عدد الموظفين</h2>
        
      </div>

      {/* Grid Item 2 */}
      <div className="relative flex flex-col items-center justify-center text-center py-20  border-item-1">
        
        <div className="bottom-to-top flex number-container text-center">
            <div className="number text-6xl text-white" data-target="15">0</div>
        </div>
        
      <h2 className="bottom-to-top text-white ">عدد العملاء </h2>
        
      </div>

      {/* Grid Item 3 */}
      <div className="relative flex flex-col items-center justify-center text-center py-20  border-item-1">

        <div className="bottom-to-top flex number-container text-center">
            <h1 className="leter text-6xl text-white">M</h1>
            <div className="number text-6xl text-white" data-target="2">0</div>
            <h1 className="leter text-6xl text-white">,</h1>
            <div className="number text-6xl text-white" data-target="1">0</div>
        </div>
        
      <h2 className="bottom-to-top text-white "> عميل محتمل </h2>
        
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 ">
      {/* Grid Item 1 */}
      <div className="relative flex flex-col items-center justify-center text-center py-20  border-item">
        
        <div className="bottom-to-top flex number-container text-center">
            
            <div className="number text-6xl text-white" data-target="500">0</div>
            <h1 className="leter2 text-6xl text-white">+</h1>

        </div>
        
      <h2 className="bottom-to-top text-white ">المشاريع المنجزة</h2>
        
      </div>

      {/* Grid Item 2 */}
      <div className="relative flex flex-col items-center justify-center text-center py-20  border-item">
        
        <div className="bottom-to-top flex number-container text-center">
            <h1 className="leter2 text-6xl text-white">K</h1>
            <div className="number text-6xl text-white" data-target="300">0</div>
        </div>
        
      <h2 className="bottom-to-top text-white "> عملية تحويل ناجحة </h2>
        
      </div>

      {/* Grid Item 3 */}
      <div className="relative flex flex-col items-center justify-center text-center py-20  border-item">
        
        <div className="bottom-to-top flex number-container text-center">
            <h1 className="leter2 text-6xl text-white">M</h1>
            <div className="number text-6xl text-white" data-target="42">0</div>
        </div>
        
      <h2 className="bottom-to-top text-white ">الإنفاق الإعلاني</h2>
        
      </div>
    </div>


  </section>
  </>
  );
};

export default NumbersSection;
