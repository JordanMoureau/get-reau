import React from "react";
import { motion } from "framer-motion";
import "./loader.css";

export default function Loader() {
  // Variants for dots animation
  const dotVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  // Transition for dots animation
  const dotTransition = {
    repeat: Infinity,
    repeatType: "loop",
    duration: 0.6,
    ease: "linear",
  };

  return (
    <div className="loader-container">
      <div className="loader-box">
        <Star />
        <motion.h1 className="loading-text">
          Loading
          <motion.span
            className="dot"
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ ...dotTransition, delay: 0 }}
          >
            .
          </motion.span>
          <motion.span
            className="dot"
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ ...dotTransition, delay: 0.2 }}
          >
            .
          </motion.span>
          <motion.span
            className="dot"
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ ...dotTransition, delay: 0.4 }}
          >
            .
          </motion.span>
        </motion.h1>
      </div>
    </div>
  );
}

function Star() {
  return (
    <motion.svg
      id="uuid-124d2dcb-6a85-432c-9cdb-5a40896487f9"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.23 18.45"
      animate={{ y: [0, -20, 0] }} // Bounce effect
      transition={{
        duration: 2, // Total duration of the bounce animation
        repeat: Infinity, // Repeat the animation infinitely
        repeatType: "loop", // Loop the bounce animation
        ease: "easeInOut", // Smooth transition
      }}
    >
      <path
        d="m10.55,1.1l1.66,3.36,3.71.54c.96.14,1.35,1.32.65,2l-2.68,2.62.63,3.7c.16.96-.84,1.69-1.7,1.24l-3.32-1.74-3.32,1.74c-.86.45-1.87-.28-1.7-1.24l.63-3.7-2.68-2.62c-.7-.68-.31-1.86.65-2l3.71-.54,1.66-3.36c.43-.87,1.68-.87,2.11,0Z"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".9"
      />
      <line
        x1="4.65"
        y1="2.39"
        x2="2.71"
        y2=".45"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <line
        x1="13.93"
        y1="2.39"
        x2="15.87"
        y2=".45"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <line
        x1="19.16"
        y1="10.92"
        x2="16.52"
        y2="10.18"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <line
        x1=".07"
        y1="11.28"
        x2="2.71"
        y2="10.55"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <line
        x1="9.49"
        y1="15.71"
        x2="9.46"
        y2="18.45"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
    </motion.svg>
  );
}
