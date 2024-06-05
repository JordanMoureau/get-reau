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
            This project had to have a feel like nothing else out there to match
            the unique style of the artist. We built a website to showcase her
            work. Fam gastropub twee, pickled yr ugh poutine master cleanse
            yuccie pok pok.{" "}
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
            This project had to have a feel like nothing else out there to match
            the unique style of the artist. We built a website to showcase her
            work. Fam gastropub twee, pickled yr ugh poutine master cleanse
            yuccie pok pok.{" "}
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
