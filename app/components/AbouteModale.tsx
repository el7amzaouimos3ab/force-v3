import React, { useEffect, useRef } from "react";
import gsap from "gsap";

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
       

      </div>
    </div>
  );
};

export default AbouteModale;
