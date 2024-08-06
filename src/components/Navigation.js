import { Link, useLocation } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { LiaTimesSolid, LiaBarsSolid } from "react-icons/lia";
import "../components/nav.css";
import { useState } from "react";
import { motion } from "framer-motion";

function Navigation() {
  let location = useLocation();
  const isHome = location.pathname === "/";
  const [isMobile, setIsMobile] = useState(false);

  function toggleMenu() {
    setIsMobile(!isMobile);
  }

  //   console.log(isMobile);

  return (
    <div className="nav-bar">
      <MobileMenu isMobile={isMobile} toggleMenu={toggleMenu} />
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/howwedo">How We Do</Link>
          </li>
          <li>
            <Link to="/thebasics">The Basics</Link>
          </li>
          <li>
            <Link to="/connect">Send Us a Message</Link>
          </li>
        </ul>
      </div>

      {isHome ? "" : <Logo />}

      <div className="social-plus">
        <a
          href="https://www.facebook.com/profile.php?id=61560853709737"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <FaSquareFacebook className="icon" size={24} />
        </a>
        <a
          href="https://www.instagram.com/get.reau/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <AiFillInstagram className="icon" size={28} />
        </a>
        <Link to="/connect">
          {" "}
          <button className="letsconnect">Lets Connect</button>
        </Link>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo-container">
      <div className="logo">REAU AGENCY</div>
      <div className="logo-offset">REAU AGENCY</div>
    </div>
  );
}

function MobileMenu({ isMobile, toggleMenu }) {
  const variants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <>
      <div className="hamburger" onClick={toggleMenu}>
        {!isMobile ? <LiaBarsSolid size={52} /> : <LiaTimesSolid size={52} />}
      </div>

      <motion.div
        className="mobile-menu"
        initial="closed"
        animate={isMobile ? "open" : "closed"}
        variants={variants}
      >
        <div className="mobile-links">
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/howwedo" onClick={toggleMenu}>
                How We Do
              </Link>
            </li>
            <li>
              <Link to="/thebasics" onClick={toggleMenu}>
                The Basics
              </Link>
            </li>
            <li>
              <Link to="/connect" onClick={toggleMenu}>
                Send Us a Message
              </Link>
            </li>
          </ul>
        </div>

        <div className="social-plus-mobile">
          <a
            href="https://www.facebook.com/profile.php?id=61560853709737"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <FaSquareFacebook className="icon" size={24} />
          </a>
          <a
            href="https://www.instagram.com/get.reau/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <AiFillInstagram className="icon" size={28} />
          </a>
          <Link to="/connect">
            {" "}
            <button className="letsconnect">Lets Connect</button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}

export default Navigation;

{
  /* <LiaTimesSolid />  */
}
