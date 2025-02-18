import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    triggerButtonRef: React.RefObject<HTMLButtonElement | null>;
  }
  
  const AbouteModale: React.FC<ModalProps> = ({ isOpen, onClose, triggerButtonRef }) => {
    const modalRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (isOpen && modalRef.current && triggerButtonRef.current) {
        const buttonRect = triggerButtonRef.current.getBoundingClientRect();
        const modalRect = modalRef.current.getBoundingClientRect();
  
        // Set initial position for the modal to zoom in from the button
        gsap.set(modalRef.current, {
          x: buttonRect.left + buttonRect.width / 2 - modalRect.width / 2,
          y: buttonRect.top + buttonRect.height / 2 - modalRect.height / 2,
          
          scale: 0,
        });
  
        // Animate the modal into its final position and scale
        gsap.to(modalRef.current, {
          duration: 0.9,
          backgroundColor: "#000",
          x: 0, // Center horizontally
          y: 0, // Center vertically
          scale: 1,
          width: "auto", // Allow it to expand
          height: "auto", // Allow it to expand
          ease: "expo.in", // Smooth animation easing
          
        });
      }
    }, [isOpen, triggerButtonRef]);
  
    if (!isOpen) return null;

  return (
    <div
      className=" aboutSection fixed inset-0 bg-gray-400 bg-opacity-90 flex justify-center items-center z-[999999]"
      ref={modalRef}
      onClick={onClose} // Close modal on outside click
    >
      <div
        className="bg-purple-600 shadow-lg h-full w-full relative overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
        style={{ direction: "ltr" }} // Force left-to-right layout to ensure scrollbar appears on the right
      >
        {/* Scrollable content area */}
        <div className="relative w-full h-full overflow-y-auto p-4 text-white">
          
            <div className="grid grid-cols-1 md:grid-cols-3 space-y-6 md:space-y-0">
                    {/* Grid Item 1 */}
                    <div className="relative flex flex-col items-center text-center md:p-5 border-item ">
                      
                      <Image 
                        src="/abouts/STRATEGY.gif" // You can also use import to get a local image.
                        alt="Image 2" 
                        width={100} 
                        height={100} 
                        className="bottom-to-top-text object-cover mb-4"
                      />
                      <p className="bottom-to-top-text text-white mb-4">المشهد الرقمي مزدحم. نحن نضمن أن علامتك التجارية لا تكتفي بالبقاء بل تزدهر. تألق مع التسويق الدقيق الذي يجعلك الخيار الأفضل.</p>
                      
                    </div>


                    {/* Grid Item 2 */}
                    <div className="relative flex flex-col items-center text-center md:p-5 border-item">
                      <Image 
                        src="/abouts/MESSAGE.gif" // You can also use import to get a local image.
                        alt="Image 1" 
                        width={100} 
                        height={100} 
                        className="bottom-to-top-text object-cover mb-4"
                      />
                      <p className="bottom-to-top-text text-white mb-4">نساعدك على رسم هوية مميزة في سوقك. حلول جريئة وإبداعية تضمن أن علامتك التجارية تترك انطباعًا لا يُنسى.</p>
                      
                    </div>

                    {/* Grid Item 2 */}
                    <div className="relative flex flex-col items-center text-center md:p-5 border-item">
                      <Image 
                        src="/abouts/MESSAGE.gif" // You can also use import to get a local image.
                        alt="Image 1" 
                        width={100} 
                        height={100} 
                        className="bottom-to-top-text object-cover mb-4"
                      />
                      <p className="bottom-to-top-text text-white mb-4">نساعدك على رسم هوية مميزة في سوقك. حلول جريئة وإبداعية تضمن أن علامتك التجارية تترك انطباعًا لا يُنسى.</p>
                      
                    </div>
            
                    {/* Grid Item 3 */}
                    <div className="relative flex flex-col items-center text-center md:p-5 border-item">
                      <Image 
                        src="/abouts/VISION.gif" // You can also use import to get a local image.
                        alt="Image 1" 
                        width={100} 
                        height={100} 
                        className="bottom-to-top-text object-cover mb-4"
                      />
                      <p className="bottom-to-top-text text-white mb-4">تعاون معنا لاكتشاف التكتيكات والأدوات والمنصات المناسبة التي تدفع عملك إلى الأمام وتضعك على مسار النجاح المستدام.</p>
                      
                    </div>
                  </div>
        </div>

        {/* Close button positioned at the top-right corner */}
       
        <button onClick={onClose} className="text-3xl text-white cursor-pointer absolute top-4 left-4 px-4 py-2"> X </button>

      </div>
    </div>
  );
};

export default AbouteModale;
