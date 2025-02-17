import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerButtonRef: React.RefObject<HTMLButtonElement | null>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, triggerButtonRef }) => {
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
        duration: 1,
        x: 0, // Center horizontally
        y: 0, // Center vertically
        scale: 1,
        ease: "power3.out", // Smooth animation easing
      });
    }
  }, [isOpen, triggerButtonRef]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Close modal on outside click
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg h-full w-full"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <h2 className="text-xl font-semibold mb-4">This is a Modal</h2>
        <p className="text-sm mb-4">
          Click outside the modal or the close button to close it.
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={onClose} // Close modal when clicked
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
