import stars from "../media/stars.png";
import { useState, useEffect } from "react";

const serviceArray = [
  "Marketing",
  "Seo Optimization",
  "Full Service Websites",
  "Ad Campaigns",
  "Custom Apps",
  "Shopify Templates",
  "Wordpress themes",
];

const colors = ["#7293cd", "#ed6121", "#fc935c", "#d7b42d"];

export default function Header() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (count < 6) {
        setCount((c) => c + 1);
      } else {
        setCount((c) => (c = 0));
      }
    }, 3500);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  return (
    <header>
      <div className="recent-button pushable">
        <span className="front">Recent Projects</span>
      </div>
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
        <div className="marquee">need a website? Get REau </div>
        <div
          className="starbreak"
          style={{ backgroundImage: `url(${stars})` }}
        ></div>
      </div>
    </header>
  );
}
