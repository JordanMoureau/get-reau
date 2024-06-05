import Footer from "../components/Footer";
import stars from "../media/stars.png";
import backgroundImage from "../background-hero.png";
import fromnovphotomain from "../media/fromnovmain.png";
import { MdOutlineCheckBox } from "react-icons/md";
import TopNav from "../components/TopNav";

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
        <img src={fromnovphotomain} alt="a photography website" />
        <div className="project-page-content">
          <h1>From November Photography</h1>
          <p>
            We designed and built a website for From November Photography, a
            portfolio for a totally unique photography service. The focus of the
            projecy was quick delivery of assets and approachable design. We dug
            deep researching the target audience, SEO Optimizing and building
            responsively. Our results? A comforting, realtable brand and website
            for a talented artist in a complex, reactive market.{" "}
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
