import "./howwedo.css";
import { useState } from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import NewLove from "../media/newlove.png";
import Bookish from "../media/bookish.png";
import BookishTwo from "../media/bookishtwo.png";

import RetroPlayer from "../components/RetroPlayer";
import ThisIsHow from "../media/thisishowwedo.mp3";
import Slider from "../components/Slider";

import comphotoone from "../media/comphotoone.png";
import comphototwo from "../media/comphototwo.png";
import comphotothree from "../media/comphotothree.png";
import comphotofour from "../media/comphotofour.png";
import comphotofive from "../media/comphotofive.jpg";
import comphotosix from "../media/comphotosix.jpg";
import comphotoseven from "../media/compnine.jpg";
import comphotoeight from "../media/compeight.jpg";
import comphotonine from "../media/compseven.png";

import appone from "../media/stardate-01.png";
import apptwo from "../media/stardate-02.png";
import appthree from "../media/stardate-03.png";
import appfour from "../media/stardate-04.png";
import appfive from "../media/stardate-05.png";

import Star from "../components/Star";

const photos = [
  comphototwo,
  comphotothree,
  comphotofour,
  comphotosix,
  comphotofive,
  comphotonine,
  comphotoeight,
  comphotoone,
  comphotoseven,
];

const app = [appone, apptwo, appthree, appfour, appfive, appone];

const webservices = [
  "Web Design",
  "E-commerce site",
  "wordpress site",
  "seo",
  "ongoing site Maintenance",
  "custom build",
];

function HowWeDo({ isLoaded }) {
  return (
    <div className="how-we-do">
      <div className="how-we-do-main rainbows">
        <div className="how-header">
          <div className="how-offset">how we do</div>
          <div className="how">how we do</div>
        </div>

        <div className="how-serv">
          <div className="serv">
            <h2>Services we offer</h2>
            <p>
              We'll Reau Reau your small business boat with full-service
              websites, product and branding photography, ROI-driven marketing
              campaigns, and custom apps.
              <br />
              <br />
              What makes us special? Our multi-layer marketing strategies &
              willingness to work on any platform.
            </p>
            <div className="serv-player">
              <RetroPlayer
                title={"This is How we do"}
                artist={"Katy Perry"}
                song={ThisIsHow}
                marginTop={"20px"}
                color="#85a5d6"
                shadow="#7291ca"
              />
            </div>
          </div>

          <img src={NewLove} />
        </div>
        <div className="photo-slider-container-main">
          <Slider
            header="Commercial Photography"
            images={photos}
            width={"30%"}
            isLoaded={isLoaded}
          />
        </div>

        <div className="web-builds-section">
          <div className="web-builds">
            <img src={Bookish} />
            <div className="serv">
              <div className="builds-row">
                <Star isLoaded={isLoaded} /> <h2>Web Builds</h2>
              </div>
              <p>
                Prepare to be asked "where'd you get that website?!" a lot.
                We're just saying. It'll happen. <br />
                <br />
                Our sites are hand crafted, hand built and infused with a whole
                lot of you.
                <br />
                We work with Shopify, Squarespace, WordPress, and more. We'll
                solve problems anytime, anywhere. We're just an email or a phone
                call away.
              </p>
              <div className="bubble-box">
                <Bubbles />
              </div>
            </div>
          </div>

          <div className="web-builds">
            <div className="serv-line-up">
              <div className="serv-line-up-col">
                <div className="serv-row">
                  <Star isLoaded={isLoaded} /> <h2>Responsive</h2>
                </div>
                <div className="serv-row">
                  <Star isLoaded={isLoaded} delay={2} /> <h2>Optimized</h2>
                </div>
                <div className="serv-row">
                  <Star isLoaded={isLoaded} delay={3} /> <h2>Brand Specific</h2>
                </div>
                <div className="serv-row">
                  <Star isLoaded={isLoaded} delay={4} />{" "}
                  <h2>Relevant Designs</h2>
                </div>
                <Link to="/buildaproject">
                  <div className="build-a-button">
                    Build a project
                    <Star isLoaded={isLoaded} />
                  </div>
                </Link>
              </div>
              <img src={BookishTwo} className="hide" />
            </div>
          </div>
        </div>

        <div className="photo-slider-container-main-app">
          <Slider header="Custom built apps" images={app} isLoaded={isLoaded} />
        </div>
        <div className="how-campaigns">
          <Accordion />
          <div className="how-campaigns-blurb">
            <p>
              you wanna know what it's like running a campaign with us? <br />{" "}
              <br />
              it's like that feeling when you know all your amazon returns are
              made or finding money in a coat pocket.
            </p>
            <Star isLoaded={isLoaded} />
          </div>
        </div>
      </div>
      <div className="how-button">
        <Link to="/connect">
          <button>
            <div className="offset">Work with us.</div>
            <div className="main-text">Work with us.</div>
          </button>
        </Link>
      </div>
    </div>
  );
}

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleToggle(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  const campaigns = [
    "We dig deep and we find those pain points, leveraging them to grow your business.",
    "You're more than one-size-fits-all marketing solutions.",
    "Level up your ROI. Lets grow your business.",
    "Experience working with a team that's always one step ahead of trends.",
    "Don't just keep up-Get ahead. Expert feedback, in-depth research, measurable, impactful results.",
  ];

  return (
    <div className="accordion">
      <div className="main">
        <div className="killer-campaigns">Killer Campaigns</div>
      </div>
      {campaigns.map((campaign, index) => (
        <AccordionItem
          key={index}
          index={index}
          isActive={activeIndex === index}
          onToggle={handleToggle}
          campaign={campaign}
        />
      ))}
    </div>
  );
}

function AccordionItem({ index, isActive, onToggle, campaign }) {
  const variants = {
    open: {
      height: "auto",
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    closed: {
      height: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };
  return (
    <>
      <div className={`accordion-item ${isActive ? "active" : ""}`}>
        <div className="plus" onClick={() => onToggle(index)}>
          {isActive ? "" : "+"}
        </div>
        <motion.div
          className="accordion-content"
          initial={false}
          animate={isActive ? "open" : "closed"}
          variants={variants}
        >
          {campaign}
        </motion.div>
      </div>
      <div className={isActive ? "spacer" : ""}></div>
    </>
  );
}

function Bubbles() {
  return (
    <>
      {webservices.map((service, index) => (
        <Link to="/buildaproject" key={index}>
          <button>{service} +</button>{" "}
        </Link>
      ))}
    </>
  );
}

export default HowWeDo;
