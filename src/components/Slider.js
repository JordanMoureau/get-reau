import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Heart from "./Heart";
import "./slider.css";

export default function Slider({ header, images, isLoaded }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(3);

  useEffect(() => {
    function updateImagesPerSlide() {
      if (window.innerWidth < 800) {
        setImagesPerSlide(2);
      } else {
        setImagesPerSlide(3);
      }
    }

    window.addEventListener("resize", updateImagesPerSlide);
    updateImagesPerSlide(); // Initial check

    return () => window.removeEventListener("resize", updateImagesPerSlide);
  }, []);

  function handleNext() {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + imagesPerSlide;
      if (newIndex >= images.length) {
        newIndex = newIndex % images.length;
      }
      return newIndex;
    });
  }

  function handlePrev() {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex - imagesPerSlide;
      if (newIndex < 0) {
        newIndex = images.length + newIndex;
      }
      return newIndex;
    });
  }

  const currentImages = images.slice(
    currentIndex,
    currentIndex + imagesPerSlide
  );

  const slideTransition = {
    type: "spring",
    stiffness: 50,
    duration: 0.5,
    bounce: 0.5,
  };

  return (
    <>
      <div className="photo-slider-header">
        <h2>{header}</h2>
        <div className="photo-slider-header-buttons">
          <svg
            id="uuid-56aa195f-80b0-4060-a63e-8b5506a534dc"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 7.67 10.96"
            onClick={handlePrev}
          >
            <polygon
              points="7.42 .49 .43 5.48 7.42 10.47 7.42 .49"
              fill="#f6915e"
              stroke="#2d1d16"
              strokeMiterlimit="10"
              strokeWidth=".5"
            />
          </svg>
          <svg
            id="uuid-98718cc5-d784-4557-8119-2ab72bb0350a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 7.67 10.96"
            onClick={handleNext}
          >
            <polygon
              points=".25 .49 7.24 5.48 .25 10.47 .25 .49"
              fill="#f6915e"
              stroke="#2d1d16"
              strokeMiterlimit="10"
              strokeWidth=".5"
            />
          </svg>{" "}
        </div>
      </div>

      <div className="photo-slider-container">
        <AnimatePresence initial={false}>
          <div className="menu-items">
            <div className="heart-container">
              <Heart isLoaded={isLoaded} />
            </div>
            <motion.div
              className="photo-slider"
              key={currentIndex}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={slideTransition}
            >
              {currentImages.map((image, index) => (
                <img src={image} key={index} />
              ))}
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </>
  );
}
