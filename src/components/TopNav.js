import { TiHome } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SlideOut from "./SlideOut";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleHover() {
    setIsHover(true);
  }

  function handleOut() {
    setIsHover(false);
  }

  return (
    <>
      <div className="topper">
        <div className="left-nav">
          <NavLink to="/">
            <div className="home">
              <TiHome size={38} />
            </div>
          </NavLink>
          {/* <div
            className="build-button"
          >
            Build Yours
          </div>
          <div className="social">
            <TiSocialInstagram size={38} />
          </div> */}
        </div>
        <div className="right-nav">
          <div className="mail-button mail-pushable">
            <span className="mail-front">
              <MdOutlineMailOutline
                size={28}
                onClick={(e) => {
                  window.location.href = "mailto:hello@getreau.com";
                }}
              />
            </span>
          </div>
          <div className="recent-button pushable">
            <span className="front" onClick={handleClick}>
              Recent Projects
            </span>
          </div>
        </div>
      </div>
      <SlideOut isOpen={isOpen} handleClick={handleClick} />

      {/* <div
        className="question"
        onMouseEnter={handleHover}
        onMouseLeave={handleOut}
      >
        {!isHover ? "?" : "About Us"}
      </div> */}
    </>
  );
}
