import { IoCloseCircle } from "react-icons/io5";
import fromnovphoto from "../media/fromnovphoto.png";
import fromnov from "../media/fromnov.png";
import coppa from "../media/coppa.png";
import bookish from "../media/bookish.png";
import newlove from "../media/newlove.png";
import newloveshop from "../media/newloveshop.png";
import coppatwo from "../media/coppatwo.png";
import bookishtwo from "../media/bookishtwo.png";

import { useState } from "react";

import { NavLink } from "react-router-dom";

export default function SlideOut({ isOpen, handleClick }) {
  const [isHoverFromNov, setIsHoverFromNov] = useState(false);
  const [isHoverCoppa, setIsHoverCoppa] = useState(false);
  const [isHoverNewLove, setIsHoverNewLove] = useState(false);
  const [isHoverBookish, setIsHoverBookish] = useState(false);

  function handleMouseEnter() {
    setIsHoverFromNov(true);
  }

  function handleMouseExit() {
    setIsHoverFromNov(false);
  }

  function handleMouseEnterNewLove() {
    setIsHoverNewLove(true);
  }

  function handleMouseExitNewLove() {
    setIsHoverNewLove(false);
  }

  function handleMouseEnterCoppa() {
    setIsHoverCoppa(true);
  }

  function handleMouseExitCoppa() {
    setIsHoverCoppa(false);
  }

  function handleMouseEnterBookish() {
    setIsHoverBookish(true);
  }

  function handleMouseExitBookish() {
    setIsHoverBookish(false);
  }

  return (
    <div className="slide-out" style={{ width: isOpen ? "300px" : "0%" }}>
      <div className="slide-container">
        <IoCloseCircle
          size={28}
          onClick={handleClick}
          className="close-button"
        />

        <NavLink
          to="/fromnov"
          className="project-box"
          style={{
            backgroundImage: `url(${!isHoverFromNov ? fromnovphoto : fromnov})`,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseExit}
        >
          <div></div>
        </NavLink>

        <div
          onMouseEnter={handleMouseEnterBookish}
          onMouseLeave={handleMouseExitBookish}
          className="project-box"
          style={{
            backgroundImage: `url(${!isHoverBookish ? bookish : bookishtwo})`,
          }}
        ></div>

        <div
          className="project-box"
          onMouseEnter={handleMouseEnterCoppa}
          onMouseLeave={handleMouseExitCoppa}
          style={{
            backgroundImage: `url(${!isHoverCoppa ? coppa : coppatwo})`,
          }}
        ></div>
        <div
          onMouseEnter={handleMouseEnterNewLove}
          onMouseLeave={handleMouseExitNewLove}
          className="project-box"
          style={{
            backgroundImage: `url(${!isHoverNewLove ? newlove : newloveshop})`,
          }}
        ></div>
      </div>
    </div>
  );
}
