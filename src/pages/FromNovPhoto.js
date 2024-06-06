import Footer from "../components/Footer";
import stars from "../media/stars.png";
import backgroundImage from "../background-hero.png";

import { MdOutlineCheckBox } from "react-icons/md";
import TopNav from "../components/TopNav";

import main from "../media/fromnov/main.png";
import foot from "../media/fromnov/foot.png";
import dance from "../media/fromnov/dance.png";
import recents from "../media/fromnov/recents.png";
import about from "../media/fromnov/about.png";

import { motion } from "framer-motion";

export default function FromNovPhoto() {
  return (
    <header
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <TopNav />
      <div
        className="starbreak"
        style={{ backgroundImage: `url(${stars})` }}
      ></div>

      <div className="project-page">
        <div className="project-images">
          <motion.img
            whileHover={{ scale: 1.4 }}
            src={main}
            alt="a photography website"
            style={{ width: "100%" }}
          />
          <motion.img
            whileHover={{ scale: 1.4 }}
            src={about}
            alt="a photography website"
            style={{ width: "48%" }}
          />
          <motion.img
            whileHover={{ scale: 1.4 }}
            src={recents}
            alt="a photography website"
            style={{ width: "48%" }}
          />
          <motion.img
            whileHover={{ scale: 1.4 }}
            src={foot}
            alt="a photography website"
            style={{ width: "100%" }}
          />

          <motion.img
            whileHover={{ scale: 1.4 }}
            src={dance}
            alt="a photography website"
            style={{ width: "48%" }}
          />
        </div>

        <div className="project-page-content">
          <h1>From November Photography</h1>
          <p>
            We designed and built a website for From November Photography, a
            portfolio for a unique photography service. The focus of the project
            was quick delivery of assets and approachable design. We dug deep
            researching the target audience, SEO Optimizing and building
            responsively.{" "}
          </p>

          <div className="list">
            <div className="list-item">
              <MdOutlineCheckBox size={24} />
              <h3>LOGO WORK</h3>
            </div>
            <div className="list-item">
              <MdOutlineCheckBox size={24} />
              <h3>Four page site design</h3>
            </div>
            <div className="list-item">
              <MdOutlineCheckBox size={24} />
              <h3>Four page site build</h3>
            </div>
            <div className="list-item">
              <MdOutlineCheckBox size={24} />
              <h3>SEO Optimization</h3>
            </div>
            <div className="list-item">
              <MdOutlineCheckBox size={24} />
              <h3>on going digital ad campaign</h3>
            </div>
          </div>

          <p>
            {" "}
            Our results? A comforting, relatable brand and website for a
            talented artist in a complex, reactive market.
          </p>

          <a
            href="https://www.fromnovemberphotography.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit The Site
          </a>
        </div>
      </div>

      <div
        className="starbreak"
        style={{ backgroundImage: `url(${stars})` }}
      ></div>
      <Footer />
    </header>
  );
}
