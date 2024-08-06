import { motion } from "framer-motion";

const bounceTransition = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function Info() {
  return (
    <motion.svg
      id="uuid-348ff6fe-cee8-4d60-a771-6cf8ae89c564"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 199.5 75.71"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={bounceTransition}
    >
      <path
        d="m189.53.25H9.97C4.62.25.25,4.62.25,9.97v49.57c0,5.34,4.37,9.72,9.72,9.72h24.68l6.11,6.11,6.11-6.11h142.68c5.34,0,9.72-4.37,9.72-9.72V9.97c0-5.34-4.37-9.72-9.72-9.72Z"
        fill="#fff"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
      <text
        transform="translate(11.54 18.2)"
        fill="#2d1d16"
        fontFamily="Tiny5-Regular, Tiny5"
        fontSize="11"
      >
        <tspan x="0" y="0">
          CLICK OR TAP TO ADD WHAT YOU’LL{" "}
        </tspan>
        <tspan x="0" y="13.2">
          NEED FOR YOUR PROJECT. SEND IT{" "}
        </tspan>
        <tspan x="0" y="26.4">
          AND GET A PROPOSAL EMAILED TO{" "}
        </tspan>
        <tspan x="0" y="39.6">
          YOU WITHIN A WEEK.
        </tspan>
      </text>
    </motion.svg>
  );
}
