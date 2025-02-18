'use client';
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Three from './Three';
import AbouteModale from "./AbouteModale";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SecondSection: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);  // Create ref for the button

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const texts = gsap.utils.toArray('.bottom-to-top-text1') as HTMLElement[];

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
  }, []);

  return (
    <section id='about' className="relative md:flex md:items-center md:justify-between pt-16 md:h-full">
      {/* Right Div (Text) */}
      <div className="md:w-2/3 text-right">
        <h2 className="bottom-to-top-text1 text-4xl/[1.2] md:text-6xl/[1.2] font-semibold mb-4">
          تعزيز النجاح الرقمي باستخدام <span className='text-blue-600'>حلول التسويق</span> المخصصة.
        </h2>

        <p className="bottom-to-top-text1 text-xl/8 ">
          نؤمن بأن كل مشروع ناجح وقوي في السوق وراءه جُنود مخفية مُتحزمة بـالإبداع والاحترافية والتعاون والابتكار، وهذا سبب من أسباب اختيارنا  لاسم القوة الإبداعية لأننا نملك فريق متكامل، مؤهل، وذو خبرة عالية لديه شغف بأنه يوصل لأبعد نقطة بأفكارك  ويحولها إلى واقع ملموس بالحروف، الصوت، الصورة، والأرقام.
        </p>
        <button
          ref={triggerButtonRef}  // Assign ref to the button so we can get its position
          className="bg-white hover:bg-purple-600 px-6 py-2 text-black mt-20 md:mt-1 transition-all duration-300"
          onClick={openModal}
        >
          اضغط وابدأ الرحلة
        </button>

        {/* Modal Component */}
        <AbouteModale isOpen={isModalOpen} onClose={closeModal} triggerButtonRef={triggerButtonRef} />
      </div>

      {/* Left Div (Logo) */}
      <div className="md:w-1/3 flex justify-center overflow-hidden">
        <Three />
      </div>
    </section>
  );
};

export default SecondSection;
