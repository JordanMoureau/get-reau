import Computers from "../components/Computers";
import "./thebasics.css";
import profilepic from "../media/profilepic.jpg";
import Heart from "../components/Heart";
import Star from "../components/Star";
import RetroPlayer from "../components/RetroPlayer";
import { motion } from "framer-motion";
import CloudOne, { CloudTwo } from "../components/Clouds";

import Here from "../media/HereinYourArms.mp3";

function TheBasics({ isLoaded }) {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Job Inquiry - Your name please");
    const body = encodeURIComponent(
      `What is your specialty?\nHighlight the top three things about you.\nWhat's your interest in working at Reau?`
    );
    window.location.href = `mailto:hello@getreau.com?subject=${subject}&body=${body}`;
  };
  return (
    <div className="the-basics">
      <div className="stage-one">
        <div className="header">
          <div className="basics-offset">The basics</div>
          <div className="basics">The basics</div>
        </div>

        <div className="body">
          <h2>We’re REau - a creative agency Based in spokane wasington. </h2>
          <p>
            Basically? We build websites that are as unique as you and get them
            in front of the right people in creative ways.
          </p>
        </div>

        <div className="computers">
          <Computers />
        </div>
      </div>

      <div className="stage-two">
        <div className="about-me">
          <img
            alt="portrait of a web designer/web developer"
            src={profilepic}
          />
          <div className="heart-position">
            <Heart isLoaded={isLoaded} />
          </div>

          <div className="about-me-info-container">
            <h2>Jordan Moureau</h2>
            <h3>founder - designer - programmer</h3>

            <div className="widgets-row">
              <button>Level 31 ++</button>
              <div className="stars">
                <Star delay={1} isLoaded={isLoaded} />{" "}
                <Star delay={2} isLoaded={isLoaded} />{" "}
                <Star delay={3} isLoaded={isLoaded} />
              </div>
            </div>
          </div>

          <div className="bio">
            <p>
              Hi, I’m Jordan, owner and founder of Reau. <br />
              <br />
              My vision for this creative agency is to provide full-service,
              high-quality web experiences that naturally transition to digital
              marketing campaigns, forging a path forward for every kind of
              business, big and small, toward online recognition. We're tidying
              up the internet, one www at a time. <br />
              <br />
              My background is in graphic design, web development, and writing.
              I have this wild passion for working with the most insanely brave
              people—in my opinion—business owners, founders, and creators.{" "}
              <br />
              <br />
              I grew up in rural Northern Georgia and always had a penchant for
              technology. My favorite Christmas gift was my first MacBook. Two
              inches thick and bright orange, I loved it. I spent hours learning
              how to use the Adobe Creative Suite and coding HTML, CSS, and
              JavaScript. I published my very first website at 13. It was a
              blog, and it was purple. <br />
              <br />
              It's the interactivity that excites me. Websites and digital
              marketing breathe; they react to the world in a way print media
              can't. To me, that kind of thing is thrilling. I'm not the sort of
              person who ever really stops. I never settle on a strategy that
              "just works"—I'm always flexing against new challenges too. <br />
              <br />
              Working as a part of a team for new business owners is where I
              thrive. Solving complicated technological problems is my happy
              place. I'm a junkie for checking boxes and hitting goals. <br />
              <br />
              Let me know if there's anything I can help you with. <br />
              <br />
              Best, <br />
              Jordan
            </p>
          </div>
          <RetroPlayer
            title={"Here in Your Arms"}
            artist={"HelloGoodbye"}
            song={Here}
            marginTop={"10px"}
          />

          <div className="social">
            <Instagram href="https://www.instagram.com/partydragon" />
            <Facebook href="https://www.facebook.com/profile.php?id=61560619867987" />
            <LinkedIn href="https://www.linkedin.com/in/jordan-moureau-28b862255/" />
            <Face href="https://jordanmoureau.com/" />
          </div>
        </div>
        <div className="cloud-one-basic">
          {" "}
          <CloudOne isLoaded={isLoaded} />
        </div>

        <div className="cloud-two-basic">
          {" "}
          <CloudTwo isLoaded={isLoaded} />
        </div>
      </div>

      <div className="stage-three">
        <div className="question">?</div>
        <div className="maybe-you">
          <h1>Maybe you</h1>
          <p>
            Are you a totally brilliant copywriter? Front-end web engineer with
            experience using React.js, wordpress, and liquid? A designer with a
            penchant for pushing boudaries and thinking about space in a way
            nobody else does?
            <br />
            <br />
            Reach out. Maybe it’ll be your picture over there.
          </p>
          <div className="button-position">
            <button onClick={handleEmailClick}>Apply at Reau</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

function Instagram({ href }) {
  function handleClick() {
    window.open(href, "_blank");
  }
  return (
    <motion.svg
      id="uuid-f5c0e349-d1b6-4b5a-bbbe-02c29b5db520"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.5 18.5"
      whileHover={{ scale: 1.2 }}
      onClick={handleClick}
    >
      <circle cx="8.92" cy="8.75" r="7.25" fill="#f1e6d8" strokeWidth="0" />
      <path
        d="m8.92,1.75c3.87,0,7,3.13,7,7s-3.13,7-7,7S1.92,12.62,1.92,8.75,5.05,1.75,8.92,1.75m0-.5C4.78,1.25,1.42,4.61,1.42,8.75s3.36,7.5,7.5,7.5,7.5-3.36,7.5-7.5S13.05,1.25,8.92,1.25h0Z"
        fill="#2d1d16"
        strokeWidth="0"
      />
      <path
        d="m9.25,10.8c-.86,0-1.55-.7-1.55-1.55,0-.33.1-.64.29-.9.29-.41.76-.65,1.26-.65s.96.24,1.26.65c.19.27.29.58.29.9,0,.86-.7,1.55-1.55,1.55Z"
        fill="#f7cb3f"
        strokeWidth="0"
      />
      <path
        d="m9.25,7.95c.42,0,.81.2,1.06.54.16.22.25.49.25.76,0,.72-.58,1.3-1.3,1.3-.35,0-.67-.14-.92-.38-.25-.25-.38-.57-.38-.92,0-.27.09-.53.25-.76.25-.34.64-.54,1.06-.54m0-.5c-.6,0-1.13.3-1.46.75-.21.3-.34.66-.34,1.05,0,.99.81,1.8,1.8,1.8s1.8-.81,1.8-1.8c0-.39-.13-.75-.34-1.05-.33-.45-.86-.75-1.46-.75h0Z"
        fill="#2d1d16"
        strokeWidth="0"
      />
      <rect
        x="11.7"
        y="5.56"
        width="1.23"
        height="1.24"
        transform="translate(-.02 .04) rotate(-.18)"
        fill="#f7cb3f"
        strokeWidth="0"
      />
      <path
        d="m12.68,5.81v.74h-.73s0-.73,0-.73h.73m.5-.5h-.23s-1.51,0-1.51,0v1.74s1.74,0,1.74,0v-1.74h0Z"
        fill="#2d1d16"
        strokeWidth="0"
      />
      <path
        d="m9.25,18C4.43,18,.5,14.08.5,9.25S4.43.5,9.25.5s8.75,3.92,8.75,8.75-3.92,8.75-8.75,8.75ZM6.11,3.88c-1.23,0-2.23,1-2.23,2.23v6.28c0,1.23,1,2.23,2.23,2.23h6.28c1.23,0,2.23-1,2.23-2.23v-6.28c0-1.23-1-2.23-2.23-2.23h-6.28Z"
        fill="#f7cb3f"
        strokeWidth="0"
      />
      <path
        d="m9.25.75c4.69,0,8.5,3.81,8.5,8.5s-3.81,8.5-8.5,8.5S.75,13.94.75,9.25,4.56.75,9.25.75m-3.14,14.12h6.28c1.37,0,2.48-1.11,2.48-2.48v-6.28c0-1.37-1.11-2.48-2.48-2.48h-6.28c-1.37,0-2.48,1.11-2.48,2.48v6.28c0,1.37,1.11,2.48,2.48,2.48M9.25.25C4.29.25.25,4.29.25,9.25s4.04,9,9,9,9-4.04,9-9S14.21.25,9.25.25h0Zm-3.14,14.12c-1.09,0-1.98-.89-1.98-1.98v-6.28c0-1.09.89-1.98,1.98-1.98h6.28c1.09,0,1.98.89,1.98,1.98v6.28c0,1.09-.89,1.98-1.98,1.98h-6.28Z"
        fill="#2d1d16"
        strokeWidth="0"
      />
      <path
        d="m6.11,13.12c-.4,0-.73-.33-.73-.73v-3.94h.93c-.07.26-.11.53-.11.8,0,1.68,1.37,3.05,3.05,3.05s3.05-1.37,3.05-3.05c0-.27-.04-.54-.11-.8h.93v3.94c0,.4-.33.73-.73.73h-6.28Z"
        fill="#f7cb3f"
        strokeWidth="0"
      />
      <path
        d="m12.87,8.7v3.69c0,.26-.22.48-.48.48h-6.28c-.27,0-.48-.22-.48-.48v-3.69h.37c-.03.18-.05.36-.05.55,0,1.82,1.48,3.3,3.3,3.3s3.3-1.48,3.3-3.3c0-.19-.02-.37-.05-.55h.37m.5-.5h-1.53c.13.32.21.68.21,1.05,0,1.54-1.26,2.8-2.8,2.8s-2.8-1.26-2.8-2.8c0-.37.07-.73.21-1.05h-1.53v4.19c0,.54.44.98.98.98h6.28c.54,0,.98-.44.98-.98v-4.19h0Z"
        fill="#2d1d16"
        strokeWidth="0"
      />
    </motion.svg>
  );
}

function Facebook({ href }) {
  function handleClick() {
    window.open(href, "_blank");
  }
  return (
    <motion.svg
      id="uuid-b4318566-f2ab-4ce2-be21-1c67a61cf962"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.5 18.5"
      whileHover={{ scale: 1.2 }}
      onClick={handleClick}
    >
      <path
        d="m9.25,16.7c-4.11,0-7.45-3.34-7.45-7.46S5.14,1.79,9.25,1.79s7.45,3.34,7.45,7.45-3.34,7.46-7.45,7.46Z"
        fill="#f1e6d8"
        strokeWidth="0"
      />
      <path
        d="m9.25,2.04c3.98,0,7.2,3.23,7.2,7.2s-3.23,7.2-7.2,7.2-7.2-3.23-7.2-7.2,3.23-7.2,7.2-7.2m0-.5C5,1.54,1.54,5,1.54,9.24s3.46,7.7,7.7,7.7,7.7-3.46,7.7-7.7S13.5,1.54,9.25,1.54h0Z"
        fill="#2d1d16"
        strokeWidth="0"
      />
      <path
        d="m9.25.25C4.29.25.25,4.29.25,9.25s4.04,9,9,9,9-4.04,9-9S14.21.25,9.25.25Zm2.24,9.32h-1.46v5.22h-2.17v-5.22h-1.03v-1.84h1.03v-1.19c0-.85.41-2.19,2.19-2.19h1.61v1.8h-1.17c-.19,0-.46.09-.46.5v1.08h1.65l-.19,1.84Z"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
    </motion.svg>
  );
}

function LinkedIn({ href }) {
  function handleClick() {
    window.open(href, "_blank");
  }

  return (
    <motion.svg
      id="uuid-42d2c049-0d15-4ae6-a1c1-78e610e7dda9"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.42 18.42"
      whileHover={{ scale: 1.2 }}
      onClick={handleClick}
    >
      <g id="uuid-ccdf87c2-d8f0-46a7-9b37-744ab33efc2e">
        <path
          d="m9.21.25C4.26.25.25,4.26.25,9.21s4.01,8.96,8.96,8.96,8.96-4.01,8.96-8.96S14.16.25,9.21.25Z"
          fill="#f7cb3f"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <path
          d="m11.61,9.89c0-1.11-.57-1.11-.76-1.11-.5,0-.72.4-.79.57-.03.08-.05.21-.05.39v3.6h-2.49v-.25c0-.05.03-5.43,0-5.98v-.26s2.49,0,2.49,0v.41c.33-.3.82-.55,1.54-.55,1.59,0,2.54,1.1,2.54,2.95v3.69h-2.49s0-3.46,0-3.46Zm-7.19,3.46v-6.5h2.49v6.5h-2.49Zm1.23-6.81c-.78,0-1.35-.54-1.35-1.29s.58-1.29,1.38-1.29,1.35.53,1.36,1.28c0,.75-.58,1.29-1.38,1.29h-.01Z"
          fill="#f1e6d8"
          strokeWidth="0"
        />
        <path
          d="m5.69,4.21c.68,0,1.1.45,1.11,1.04,0,.58-.43,1.04-1.13,1.04h-.01c-.67,0-1.1-.46-1.1-1.04s.45-1.04,1.13-1.04m5.88,2.75c1.31,0,2.29.86,2.29,2.7v3.44h-1.99s0-3.21,0-3.21c0-.81-.29-1.36-1.01-1.36-.55,0-.88.37-1.02.73-.05.13-.07.31-.07.49v3.35h-1.99s.03-5.43,0-6h1.99v.85c.26-.41.74-.99,1.8-.99m-4.89.14v6h-1.99v-6h1.99m-.98-3.39c-.94,0-1.63.65-1.63,1.54,0,.6.32,1.1.82,1.35h-.7v7h2.99v-7h-.7c.51-.25.83-.75.83-1.35-.02-.89-.7-1.54-1.61-1.54h0Zm5.88,2.75c-.55,0-.97.13-1.3.32v-.18h-3.02l.02.52c.02.44,0,4.1,0,5.97v.5s.5,0,.5,0h2.49v-3.85c0-.22.02-.28.03-.29.06-.16.22-.42.56-.42.17,0,.51,0,.51.86v3.71h.5s1.99,0,1.99,0h.5v-3.94c0-2.36-1.44-3.2-2.79-3.2h0Z"
          fill="#2d1d16"
          strokeWidth="0"
        />
      </g>
    </motion.svg>
  );
}

function Face({ href }) {
  function handleClick() {
    window.open(href, "_blank");
  }

  return (
    <motion.svg
      id="uuid-adafbdf4-5575-46ae-bd7a-03de58badb02"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.42 18.42"
      whileHover={{ scale: 1.2 }}
      onClick={handleClick}
    >
      <circle
        cx="9.21"
        cy="9.21"
        r="8.96"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <rect
        x="4.52"
        y="11.32"
        width="9.38"
        height="3"
        rx="1.5"
        ry="1.5"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <line
        x1="7.28"
        y1="11.55"
        x2="7.28"
        y2="14.08"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".3"
      />
      <line
        x1="11.11"
        y1="11.55"
        x2="11.11"
        y2="14.09"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".3"
      />
      <ellipse
        cx="6.35"
        cy="7.35"
        rx=".71"
        ry="1.55"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <ellipse
        cx="11.43"
        cy="7.35"
        rx=".71"
        ry="1.55"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <line
        x1="4.52"
        y1="12.82"
        x2="13.9"
        y2="12.82"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".3"
      />
    </motion.svg>
  );
}

export default TheBasics;
