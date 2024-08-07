import Heart from "./components/Heart";
import "./home.css";
import Star from "./components/Star";
import CloudOne, { CloudTwo } from "./components/Clouds";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import Squares from "./components/Squares";
import RetroPlayer from "./components/RetroPlayer";

import ThunderStruck from "./media/Thunderstruck.mp3";

import MenuLaReau from "./components/MenuLaReau";

function Home({ isLoaded }) {
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1,
      repeat: 4,
      repeatType: "loop",
    },
  };
  return (
    <div className="home">
      <div className="home-main">
        <div className="cloud-row">
          <div className="home-cloud-one">
            <CloudOne isLoaded={isLoaded} />
          </div>
        </div>
        <div className="star-row">
          <div className="star">
            <Star isLoaded={isLoaded} />
          </div>
        </div>
        <div className="rainbow-row">
          <Rainbow />
        </div>
        <div className="home-header">
          <div className="home-header-container">
            <div className="topper">
              <Emojis />
              <div className="heart-position">
                <Heart isLoaded={isLoaded} />
              </div>
            </div>
            <div className="home-header-container-header">
              <div className="offset-header-container">
                <div className="main">Reau Agency</div>
                <div className="offset">Reau Agency</div>
              </div>
              <h2>Not your average creative agency</h2>
            </div>
          </div>
        </div>

        <div className="bottom-cloud-row">
          <div className="bottom-cloud">
            <CloudTwo isLoaded={isLoaded} />
          </div>
        </div>

        <div className="bottom-star-row">
          <div className="bottom-star">
            <Star delay={2} isLoaded={isLoaded} />
          </div>
        </div>
      </div>
      <div className="your-vibes">
        <div className="your-vibes-top-bar">
          <div className="https">Https//:yourvibes.com</div>

          <Squares />
        </div>
        <div className="your-vibes-main">
          <div className="vibes-col-one">
            <h2>
              Level up your client’s web experience & level up your business.
            </h2>
            <p>
              Whatever your goals, our specialty is trailblazing strategies that
              leverage the vast opportunities technology affords to get you
              there. <br /> <br /> Think of it as a custom-designed virtual
              catapult, propelling your brand to new heights. We’ll load you up
              and cut the cable, launching you towards success.{" "}
            </p>
          </div>

          <div className="vibes-col-two">
            <Star isLoaded={isLoaded} />
          </div>
        </div>
      </div>
      <div className="we-create-main">
        <div className="we-create-col-one">
          <motion.div className="digital-product" whileHover={pulseAnimation}>
            <div className="digital-main">
              <h2>We Create Digital Products</h2>
              <h3>Your App concept goes here</h3>
            </div>
          </motion.div>
        </div>
        <div className="we-create-col-two">
          <div className="mail">
            <Mail />{" "}
          </div>

          <RetroPlayer
            title={"Thunderstruck"}
            artist={"ACDC"}
            song={ThunderStruck}
            marginTop={"0px"}
          />

          <div className="wizard">
            <h2>Websites & Apps & Social Media Campaigns. Oh My.</h2>
            <p>
              At Reau, we don't believe in limits. We go wherever we need to get
              your brand where it needs to go. If it's learning new technology,
              or coming at problems in a totally new way. We can say with
              complete confidence: We'll find the solution.
            </p>
            <Link to="/howwedo">
              <Enter />
            </Link>
          </div>
        </div>
      </div>
      {/* <Mantra /> */}
      <Campaigns />
      <MenuLaReau isLoaded={isLoaded} />
      <Mantra />
    </div>
  );
}

function Rainbow() {
  return (
    <div className="rainbow">
      <svg
        id="uuid-68eed8ec-6799-4515-bf61-267e9e1d7f61"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 122.8 241.6"
      >
        <path
          d="m78.21,41.22c-4.33-4.5-9.88-6.79-16.49-6.79s-11.91,2.23-16.24,6.63c-10.43,10.6-10.23,30.29-10.21,31.06v169.43h8V72.06c-.08-4.74,1.19-18.54,7.92-25.38,2.81-2.85,6.25-4.24,10.54-4.24s7.91,1.41,10.71,4.32c7.95,8.25,7.42,25.21,7.42,25.43l8,.03c.03-.83.67-20.27-9.64-31Z"
          fill="#7291ca"
          strokeWidth="0"
        />
        <path
          d="m58.42.25c-15.88,0-28.91,5.13-38.73,15.24C-.32,36.1.2,69.99.26,72.17v169.37h8V72.01c-.01-.32-.69-32.58,17.2-50.97,8.25-8.48,19.34-12.76,32.96-12.79,48.31-.1,57.05,32.25,57.05,63.95h7.08C122.55,41.24,115.91.25,58.42.25Z"
          fill="#eb6224"
          strokeWidth="0"
        />
        <path
          d="m58.63,8h-.21c-13.71.03-24.87,4.35-33.14,12.86C7.33,39.31,8,71.69,8.01,72.01v169.5h.5V72.12s0-.12,0-.12c0-.32-.67-32.49,17.13-50.79,8.18-8.41,19.21-12.68,32.78-12.71h.21c18.11,0,31.98,4.69,41.25,13.93,10.47,10.45,15.35,26.26,15.35,49.77h.5c0-23.65-4.92-39.57-15.49-50.12-9.36-9.34-23.35-14.08-41.6-14.08Z"
          fill="#2d1d16"
          strokeWidth="0"
        />
        <path
          d="m58.42,0c-15.95,0-29.04,5.15-38.91,15.31C-.67,36.1-.03,70.72,0,72.17v169.37h.5V72.17c-.04-1.45-.68-35.87,19.37-56.5C29.65,5.6,42.62.5,58.42.5c57.26,0,63.88,40.91,63.88,71.69h.5C122.8,41.2,116.13,0,58.42,0Z"
          fill="#2d1d16"
          strokeWidth="0"
        />
        <path
          d="m109.04,34.8c-9.18-18.5-26-28.27-48.64-28.27-14.13,0-25.8,4.6-34.69,13.67C7.07,39.21,7.5,71.02,7.52,72.29v169.26h8V72.21c0-.3-.41-29.77,15.91-46.42,7.33-7.48,17.07-11.27,28.97-11.27,43.79,0,48.51,40.3,48.51,57.67h7.53c0-9.86-.89-24.28-7.4-37.4Z"
          fill="#f6915e"
          strokeWidth="0"
        />
        <path
          d="m60.4,14.27c-11.97,0-21.78,3.82-29.15,11.34-16.38,16.71-15.98,46.3-15.98,46.59v169.34h.5V72.2c0-.29-.4-29.67,15.83-46.24,7.28-7.42,16.96-11.19,28.8-11.19,43.56,0,48.26,40.16,48.26,57.42h.5c0-17.42-4.75-57.92-48.76-57.92Z"
          fill="#2d1d16"
          strokeWidth="0"
        />
        <path
          d="m109.27,34.69c-9.22-18.59-26.12-28.41-48.86-28.41-14.2,0-25.93,4.62-34.87,13.74C6.8,39.13,7.24,70.95,7.27,72.29v169.26h.5V72.28c-.03-1.34-.47-32.95,18.12-51.92,8.84-9.02,20.45-13.59,34.51-13.59,22.54,0,39.28,9.73,48.41,28.13,4.96,10,7.38,22.2,7.38,37.29h.5c0-15.17-2.43-27.44-7.43-37.51Z"
          fill="#2d1d16"
          strokeWidth="0"
        />
        <path
          d="m60.41,13.75c-18.4,0-32.12,10.28-39.69,29.73-5.48,14.1-5.75,27.99-5.76,28.63v169.43h8s0-169.36,0-169.36c0-.13.28-13.21,5.29-25.98,6.37-16.23,17.19-24.46,32.16-24.46,16.38,0,27.53,5.84,34.1,17.86,4.41,8.07,7.47,19.12,7.47,32.62l6.94-.03c0-48.24-26.27-58.44-48.51-58.44Z"
          fill="#d5b22d"
          strokeWidth="0"
        />
        <path
          d="m60.41,13.5c-18.51,0-32.32,10.34-39.92,29.89-5.5,14.14-5.77,28.13-5.78,28.72v169.43h.5V72.12c0-.58.28-14.49,5.75-28.55,7.52-19.35,21.17-29.57,39.45-29.57,39.89,0,48.26,31.65,48.26,58.19h.5c0-48.51-26.52-58.69-48.76-58.69Z"
          fill="#2d1d16"
          strokeWidth="0"
        />
        <path
          d="m60.41,21.5c-15.09,0-25.99,8.28-32.39,24.61-4.96,12.63-5.3,25.52-5.31,26.07v169.31h.5V72.19c.01-.54.35-13.34,5.27-25.89,6.33-16.12,17.07-24.3,31.93-24.3,16.28,0,27.36,5.8,33.88,17.73,3.39,6.21,7.44,16.89,7.44,32.5h.5c0-15.71-4.08-26.48-7.5-32.74-6.62-12.1-17.84-17.99-34.32-17.99Z"
          fill="#2d1d16"
          strokeWidth="0"
        />
        <path
          d="m88.24,30.32c-7.06-6.79-16.58-9.99-28.33-9.54-29.73,1.16-38.3,33.85-38.68,51.06v169.71h7.98l.02-169.62c0-.42,1.27-42,31-43.16,9.48-.38,17.04,2.09,22.47,7.31,9.32,8.96,11.28,24.6,11.28,36.14h8c0-13.09-2.38-30.99-13.73-41.91Z"
          fill="#f7cb3f"
          strokeWidth="0"
        />
        <path
          d="m72.61,46.58c-2.85-2.96-6.41-4.4-10.89-4.4s-7.86,1.41-10.71,4.32c-6.78,6.9-8.07,20.79-7.99,25.56v169.49h.5V72.05c-.08-4.71,1.18-18.43,7.85-25.2,2.76-2.8,6.15-4.17,10.36-4.17s7.78,1.39,10.53,4.24c7.7,7.99,7.36,24.54,7.34,25.24h0s.5.01.5.01c.01-.47.1-4.78-.76-9.92-1.16-6.98-3.42-12.25-6.73-15.68Z"
          fill="#2d1d16"
          strokeWidth="0"
        />
        <path
          d="m78.39,41.05c-4.38-4.55-9.99-6.86-16.67-6.86s-12.04,2.26-16.42,6.71c-10.5,10.68-10.3,30.4-10.29,31.23v169.43h.5V72.12c-.01-.83-.22-20.35,10.14-30.88,4.28-4.35,9.68-6.56,16.06-6.56s12.03,2.26,16.31,6.71c10.23,10.63,9.6,29.99,9.57,30.81l.5.02c.03-.83.66-20.39-9.71-31.18Z"
          fill="#2d1d16"
          strokeWidth="0"
        />
        <path
          d="m60.22,28.52c-29.91,1.17-31.23,42.98-31.24,43.41v169.67h.5V71.94c0-.42,1.31-41.76,30.76-42.91,9.41-.37,16.9,2.06,22.29,7.24,9.26,8.9,11.2,24.47,11.2,35.96h.5c0-11.59-1.97-27.29-11.36-36.32-5.49-5.28-13.1-7.76-22.65-7.38Z"
          fill="#2d1d16"
          strokeWidth="0"
        />
        <path
          d="m88.42,30.14c-7.1-6.83-16.69-10.06-28.51-9.61-29.92,1.17-38.54,34.07-38.92,51.31v169.71h.5V71.85c.38-17.07,8.9-49.66,38.44-50.82,11.68-.46,21.14,2.74,28.14,9.47,11.29,10.85,13.66,28.68,13.66,41.73h.5c0-13.14-2.4-31.11-13.81-42.09Z"
          fill="#2d1d16"
          strokeWidth="0"
        />
        <path
          d="m83.04,35.97c-5.81-5.78-13.28-8.6-22.22-8.42-26.23.55-33.04,29.33-32.98,44.46v169.54h8V72c0-.09.02-9.54,3.4-18.81,4.19-11.49,11.5-17.43,21.75-17.64,6.76-.15,12.13,1.84,16.39,6.08,10.39,10.32,10.28,30.38,10.27,30.57l6.33.03c.02-.95,1.87-23.52-10.94-36.26Z"
          fill="#85a5d6"
          strokeWidth="0"
        />
        <path
          d="m61.67,35.29c-.23,0-.46,0-.69,0-10.36.22-17.75,6.21-21.98,17.81-3.37,9.26-3.41,18.8-3.41,18.89v169.55h.5V72c0-.09.04-9.54,3.38-18.72,4.15-11.38,11.39-17.26,21.52-17.48,6.7-.14,11.99,1.82,16.21,6,10.28,10.2,10.2,30.19,10.2,30.39h.5c0-.2.08-20.4-10.35-30.75-4.17-4.14-9.37-6.16-15.88-6.16Z"
          fill="#2d1d16"
          strokeWidth="0"
        />
        <path
          d="m83.21,35.79c-5.85-5.82-13.37-8.68-22.4-8.5-26.42.56-33.28,29.49-33.22,44.71v169.54h.5V72.01c-.06-15.05,6.7-43.66,32.73-44.21,8.88-.18,16.29,2.63,22.04,8.35,11.24,11.18,11.17,30.22,10.88,35.78,0,.15-.01.24-.01.29h.5s0-.13.01-.27c.29-5.62.36-24.83-11.03-36.16Z"
          fill="#2d1d16"
          strokeWidth="0"
        />
      </svg>
    </div>
  );
}

function Emojis() {
  return (
    <svg
      id="uuid-3b5da52d-f60a-41aa-af39-c5e6a3530368"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 69.78 18.42"
      className="emojis"
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
      <circle
        cx="34.65"
        cy="9.21"
        r="8.96"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <circle
        cx="60.57"
        cy="9.21"
        r="8.96"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m33.59,8.26c.24-.3.39-.68.39-1.1,0-.97-.78-1.75-1.75-1.75-.69,0-1.29.4-1.57.98-.29-.58-.88-.98-1.57-.98-.97,0-1.75.78-1.75,1.75,0,.39.13.76.35,1.05h0s.02.02.02.02c.05.07.11.13.16.19l1.81,2.04c.49.52,1.32.54,1.84.04l1.93-2.07c.05-.05.1-.11.15-.16h0s0,0,0,0Z"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m41.26,8.26c.24-.3.39-.68.39-1.1,0-.97-.78-1.75-1.75-1.75-.69,0-1.29.4-1.57.98-.29-.58-.88-.98-1.57-.98-.97,0-1.75.78-1.75,1.75,0,.39.13.76.35,1.05h0s.02.02.02.02c.05.07.11.13.16.19l1.81,2.04c.49.52,1.32.54,1.84.04l1.93-2.07c.05-.05.1-.11.15-.16h0s0,0,0,0Z"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m39.08,12.1c-.73,1.72-2.44,2.93-4.43,2.93s-3.68-1.2-4.42-2.91"
        fill="none"
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
      <path
        d="m65.05,11.71c-.73,1.72-2.44,2.93-4.43,2.93s-3.68-1.2-4.42-2.91"
        fill="none"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <ellipse
        cx="57.89"
        cy="6.96"
        rx=".71"
        ry="1.55"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <ellipse
        cx="62.96"
        cy="6.96"
        rx=".71"
        ry="1.55"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
    </svg>
  );
}

function Mail() {
  return (
    <svg
      id="uuid-e5cb27f6-af8e-4edd-8927-1355d05f50c8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 63.67 35.75"
    >
      <rect
        x=".25"
        y=".25"
        width="57.99"
        height="35.25"
        rx="9.37"
        ry="9.37"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m21.58,16.12s-12.87,9.98-17.55,16.99"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m1.48,4.48s19.19,13.39,27.77,13.39,27.39-13.11,27.39-13.11"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m37.86,15.52s12.87,9.98,17.55,16.99"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <rect
        x="34.86"
        y="3.86"
        width="28.56"
        height="14.64"
        rx="6.17"
        ry="6.17"
        fill="#fff"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m43.02,6.18v10.23h-2.25v-8.33h-1.28v-1.9h3.53Z"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m48.98,8.09v6.41c0,.44-.07.79-.2,1.07-.13.27-.31.49-.55.65-.23.16-.51.27-.84.33s-.68.09-1.07.09-.74-.03-1.06-.1c-.32-.07-.59-.18-.81-.34-.22-.16-.4-.38-.52-.65-.12-.27-.18-.62-.18-1.04v-6.41c0-.44.07-.79.2-1.07.13-.27.31-.49.55-.65.23-.16.51-.27.84-.33s.68-.09,1.07-.09.74.03,1.06.1c.32.07.59.18.81.34.22.16.4.38.52.65.12.27.18.62.18,1.04Zm-3.09.17v6.06c0,.35.17.53.53.53.15,0,.25-.05.33-.15.07-.1.11-.23.11-.37v-6.06c0-.35-.17-.53-.53-.53-.16,0-.27.05-.34.15-.07.1-.1.23-.1.37Z"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m54.93,8.09v6.41c0,.44-.07.79-.2,1.07-.13.27-.31.49-.55.65-.23.16-.51.27-.84.33s-.68.09-1.07.09-.74-.03-1.06-.1c-.32-.07-.59-.18-.81-.34-.22-.16-.4-.38-.52-.65-.12-.27-.18-.62-.18-1.04v-6.41c0-.44.07-.79.2-1.07.13-.27.31-.49.55-.65.23-.16.51-.27.84-.33s.68-.09,1.07-.09.74.03,1.06.1c.32.07.59.18.81.34.22.16.4.38.52.65.12.27.18.62.18,1.04Zm-3.09.17v6.06c0,.35.17.53.53.53.15,0,.25-.05.33-.15.07-.1.11-.23.11-.37v-6.06c0-.35-.17-.53-.53-.53-.16,0-.27.05-.34.15-.07.1-.1.23-.1.37Z"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m59.24,8.7l-.04,1.68,1.69-.04v1.91l-1.69-.04.04,1.68h-1.93l.04-1.68-1.69.04v-1.91l1.69.04-.04-1.68h1.93Z"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
    </svg>
  );
}

function Enter() {
  return (
    <div className="enter">
      <motion.svg
        id="uuid-8876b261-8d56-4ad0-b08d-1f6e06bb2722"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 75.7 30.61"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.5,
        }}
        whileHover={{ scale: 1.1 }}
      >
        <defs>
          <pattern
            id="uuid-da1423ea-e95e-454c-99f5-cf4fdea0244f"
            x="0"
            y="0"
            width="72"
            height="72"
            patternTransform="translate(-2179.25 -967.41)"
            patternUnits="userSpaceOnUse"
            viewBox="0 0 72 72"
          >
            <rect width="72" height="72" fill="none" strokeWidth="0" />
            <line
              x1="6"
              y1="71.75"
              x2="6"
              y2="144.25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="30"
              y1="71.75"
              x2="30"
              y2="144.25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="54"
              y1="71.75"
              x2="54"
              y2="144.25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="18"
              y1="71.75"
              x2="18"
              y2="144.25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="42"
              y1="71.75"
              x2="42"
              y2="144.25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="66"
              y1="71.75"
              x2="66"
              y2="144.25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="71.75"
              y1="66"
              x2="144.25"
              y2="66"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="71.75"
              y1="42"
              x2="144.25"
              y2="42"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="71.75"
              y1="18"
              x2="144.25"
              y2="18"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="71.75"
              y1="54"
              x2="144.25"
              y2="54"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="71.75"
              y1="30"
              x2="144.25"
              y2="30"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="71.75"
              y1="6"
              x2="144.25"
              y2="6"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="6"
              y1="-.25"
              x2="6"
              y2="72.25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="30"
              y1="-.25"
              x2="30"
              y2="72.25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="54"
              y1="-.25"
              x2="54"
              y2="72.25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="-.25"
              y1="66"
              x2="72.25"
              y2="66"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="-.25"
              y1="42"
              x2="72.25"
              y2="42"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="-.25"
              y1="18"
              x2="72.25"
              y2="18"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="-.25"
              y1="54"
              x2="72.25"
              y2="54"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="-.25"
              y1="30"
              x2="72.25"
              y2="30"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="-.25"
              y1="6"
              x2="72.25"
              y2="6"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="18"
              y1="-.25"
              x2="18"
              y2="72.25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="42"
              y1="-.25"
              x2="42"
              y2="72.25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="66"
              y1="-.25"
              x2="66"
              y2="72.25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="-72.25"
              y1="66"
              x2=".25"
              y2="66"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="-72.25"
              y1="42"
              x2=".25"
              y2="42"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="-72.25"
              y1="18"
              x2=".25"
              y2="18"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="-72.25"
              y1="54"
              x2=".25"
              y2="54"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="-72.25"
              y1="30"
              x2=".25"
              y2="30"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="-72.25"
              y1="6"
              x2=".25"
              y2="6"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="6"
              y1="-72.25"
              x2="6"
              y2=".25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="30"
              y1="-72.25"
              x2="30"
              y2=".25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="54"
              y1="-72.25"
              x2="54"
              y2=".25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="18"
              y1="-72.25"
              x2="18"
              y2=".25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="42"
              y1="-72.25"
              x2="42"
              y2=".25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
            <line
              x1="66"
              y1="-72.25"
              x2="66"
              y2=".25"
              fill="none"
              stroke="#231f20"
              strokeWidth=".3"
            />
          </pattern>
        </defs>
        <path
          d="m2.5,23.98l3.29,3.8c1.13,1.17,2.71,1.9,4.45,1.9l59,.69c3.41,0,6.21-2.79,6.21-6.21l-.27-13.86c0-1.79-.77-3.41-2-4.54l-4.57-3.68"
          fill="#f6915e"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <rect
          x=".25"
          y=".25"
          width="71.87"
          height="26.58"
          rx="8.55"
          ry="8.55"
          fill="#f1e6d8"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <line
          x1="72.12"
          y1="19.97"
          x2="75.42"
          y2="24.81"
          fill="#eb6224"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <path
          d="m12.95,11.36h4.59v3.25h-4.59v4.67h4.91v3.58h-9.15V3.72h9.15v3.55h-4.91v4.09Z"
          fill="#f6915e"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <path
          d="m26.71,16.22v-.05c-.02-.07-.03-.19-.03-.36V3.75h3.41v19.11h-5.3l-1.97-12.5-.22.03v.03c.02.05.03.11.03.16v12.29h-3.41V3.75h5.3l1.97,12.48h.22Z"
          fill="#f6915e"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <path
          d="m31.46,7.27v-3.55h10.4v3.55h-3.14v15.59h-4.15V7.27h-3.11Z"
          fill="#f6915e"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <path
          d="m47.49,11.36h4.59v3.25h-4.59v4.67h4.91v3.58h-9.15V3.72h9.15v3.55h-4.91v4.09Z"
          fill="#f6915e"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <path
          d="m60.54,3.72c1.37,0,2.42.31,3.17.93.75.62,1.12,1.61,1.12,2.98v3.93c0,.31-.03.64-.1,1-.06.36-.16.71-.3,1.05-.14.35-.32.66-.55.93-.23.27-.51.48-.83.63.33.11.6.26.82.46.22.2.4.44.55.71.15.27.25.57.31.89s.1.63.1.94v3.3c0,.18.02.39.05.63.04.24.1.42.19.55l.16.22h-4.12l-.03-.05c-.07-.05-.13-.14-.18-.26s-.08-.25-.11-.38c-.03-.14-.05-.27-.05-.4,0-.13-.01-.23-.01-.3v-2.84c0-.49-.08-.93-.23-1.32-.15-.39-.5-.59-1.05-.59h-1.53v6.14h-4.15V3.72h6.77Zm-2.62,3.55v6.22h1.69c.44,0,.73-.19.89-.57.15-.38.23-.78.23-1.2v-2.98c0-.47-.06-.84-.19-1.09-.13-.25-.44-.38-.93-.38h-1.69Z"
          fill="#f6915e"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <line
          x1="63.57"
          y1="26.83"
          x2="67.11"
          y2="30.34"
          fill="url(#uuid-da1423ea-e95e-454c-99f5-cf4fdea0244f)"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <path
          d="m11.35,11.44h4.47v3.16h-4.47v4.55h4.79v3.48H7.23V4h8.91v3.46h-4.79v3.99Z"
          fill="#f7cb3f"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <path
          d="m24.75,16.17v-.05c-.02-.07-.03-.19-.03-.35V4.02h3.32v18.61h-5.16l-1.91-12.17-.21.03v.03c.02.05.03.11.03.16v11.96h-3.32V4.02h5.16l1.91,12.15h.21Z"
          fill="#f7cb3f"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <path
          d="m29.38,7.45v-3.46h10.13v3.46h-3.06v15.18h-4.04V7.45h-3.03Z"
          fill="#f7cb3f"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <path
          d="m44.98,11.44h4.47v3.16h-4.47v4.55h4.79v3.48h-8.91V4h8.91v3.46h-4.79v3.99Z"
          fill="#f7cb3f"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
        <path
          d="m57.69,4c1.33,0,2.36.3,3.08.9.73.6,1.09,1.57,1.09,2.9v3.83c0,.3-.03.62-.09.97-.06.35-.16.69-.29,1.02-.13.34-.31.64-.53.9-.22.27-.49.47-.81.61.32.11.58.26.8.45.21.2.39.43.53.69.14.27.24.55.31.86s.09.62.09.92v3.22c0,.18.02.38.05.61.04.23.1.41.19.53l.16.21h-4.01l-.03-.05c-.07-.05-.13-.14-.17-.25s-.08-.24-.11-.37c-.03-.13-.04-.26-.05-.39,0-.12-.01-.22-.01-.29v-2.76c0-.48-.08-.91-.23-1.29-.15-.38-.49-.57-1.02-.57h-1.49v5.98h-4.04V4h6.59Zm-2.55,3.46v6.06h1.65c.43,0,.71-.19.86-.56.15-.37.23-.76.23-1.17v-2.9c0-.46-.06-.81-.19-1.06-.12-.25-.43-.37-.9-.37h-1.65Z"
          fill="#f7cb3f"
          stroke="#2d1d16"
          strokeMiterlimit="10"
          strokeWidth=".5"
        />
      </motion.svg>
    </div>
  );
}

function Campaigns() {
  const CampaignStages = [
    {
      header: "Stage One - The Research",
      content:
        "Deliver the market. Deploy our many resources to understand what makes your brand unique, identifying key market trends and customer behaviors. Our thorough research ensures we target the right audience with precision and insight.",
    },
    {
      header: "Stage Two - The Strategy",
      content:
        "With a clear understanding of your market, we craft a tailored strategy designed to achieve your business goals. Our approach focuses on both innovative tactics and proven methods to drive success.",
    },
    {
      header: "Stage Three - The Execution",
      content:
        "From creative development to ad deployment, we execute your campaign with meticulous attention to detail. Highlights include engaging content, precise targeting, and continuous optimization to maximize results.",
    },
  ];

  return (
    <div className="home-campaigns">
      <div className="header">
        <h1>The Killer Campaign</h1>
      </div>
      <div className="stages-container">
        {CampaignStages.map((stage, index) => (
          <motion.div
            key={index}
            className="campaign-stages"
            whileHover={{ scale: 1.1 }}
          >
            <div className="number">{index + 1}</div>
            <div className="content">
              <h1>{stage.header}</h1>
              <p>{stage.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Mantra() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="mantra"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={childVariants}>Our mantra:</motion.h2>
      <motion.div className="main" variants={childVariants}>
        Do good work.
      </motion.div>
      <motion.div className="offset" variants={childVariants}>
        Do good work.
      </motion.div>
    </motion.div>
  );
}

export default Home;
