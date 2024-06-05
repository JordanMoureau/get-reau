import stars from "../media/stars.png";
import { useState, useEffect, useRef } from "react";
import TopNav from "./TopNav.js";

import { motion, useInView, AnimatePresence } from "framer-motion";

// import { useInView } from "react-intersection-observer";

import backgroundImage from "../background-hero.png";

const serviceArray = [
  "Digital Marketing",
  "Seo Optimization",
  "Full Service Websites",
  "Ad Campaigns",
  "Custom Apps",
  "Shopify Templates",
  "Wordpress themes",
  "Star Power",
];

//const colors = ["#7293cd", "#ed6121", "#fc935c", "#d7b42d"];

export default function Header() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (count < serviceArray.length - 1) {
        setCount((c) => c + 1);
      } else {
        setCount((c) => (c = 0));
      }
    }, 3500);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <header
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <TopNav />

        <div className="hero">
          <div
            className="starbreak"
            style={{ backgroundImage: `url(${stars})` }}
          ></div>
          <h1>
            <span className="blue">R</span>
            <span className="red">E</span>
            <span className="pink">A</span>
            <span className="yellow">U </span>
            <span className="blue">A</span>
            <span className="red">G</span>
            <span className="pink">E</span>
            <span className="yellow">N</span>
            <span className="blue">C</span>
            <span className="red">Y</span>
          </h1>
          <div className="sub-head-flasher">
            <h2>{serviceArray[count]}</h2>
          </div>
          <div
            className="starbreak"
            style={{ backgroundImage: `url(${stars})` }}
          ></div>
        </div>
      </header>
      <div className="marquee">Need a website? Get Reau</div>

      <div
        ref={ref}
        style={{
          height: !isInView ? "0" : "200px",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="slideout-info"
      >
        <p>
          A full service creative agency specializing in refined web prescences
          for small businesses with the added bonus of being actually
          affordable.
        </p>
      </div>
    </>
  );
}

// style={{ overflow: "hidden" }}
// initial={{ height: 0 }}
// animate={{ height: "auto" }}
// transition={{ stiffness: 100, duration: 3 }}
// exit={{ height: 0 }}
// key={"container"}
