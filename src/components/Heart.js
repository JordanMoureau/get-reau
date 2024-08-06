import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Heart({ isLoaded }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="heart">
      <motion.svg
        ref={ref}
        id="uuid-c39b6604-5901-4659-bba3-2b95311d0915"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="3 -5 25 28"
        initial={{ scale: 0 }}
        animate={isLoaded && inView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <motion.path
          d="m22.71,10.2c.58-.72.94-1.64.94-2.65,0-2.33-1.89-4.22-4.22-4.22-1.67,0-3.1.97-3.79,2.37-.69-1.4-2.12-2.37-3.79-2.37-2.33,0-4.22,1.89-4.22,4.22,0,.95.32,1.82.85,2.53h0s.04.05.04.05c.12.16.25.31.4.45l4.36,4.92c1.19,1.25,3.18,1.29,4.43.1l4.65-5c.13-.12.25-.25.36-.39h.01s0-.01,0-.01Z"
          fill="#f6915e"
          stroke="black"
          strokeWidth=".7"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isLoaded && inView ? { opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      </motion.svg>
    </div>
  );
}
