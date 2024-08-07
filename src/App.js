import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home.js";
import TheBasics from "./pages/thebasics.js";
import HowWeDo from "./pages/howwedo.js";
import Connect from "./pages/connect.js";
import Build from "./pages/build.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import BuildButton from "./components/BuildAProjButton.js";

import ScrollToTop from "./components/ScrollToTop";

import Loader from "./components/Loader";
import { useEffect, useState } from "react";

// import Popup from "./components/PopUp";

function App() {
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Simulate a loading period
    setTimeout(() => {
      setLoading(false);
      setIsLoaded(true);
    }, 4000); // Change the timeout duration as needed
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsPopupVisible(true);
  //   }, 5000); // 5000ms delay (5 seconds)

  //   return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  // }, []);

  // const closePopup = () => {
  //   setIsPopupVisible(false);
  // };

  return (
    <Router>
      {loading && <Loader />}
      {/* <Popup isVisible={isPopupVisible} onClose={closePopup} /> */}
      <ScrollToTop />
      <Navigation />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home isLoaded={isLoaded} />} />
          <Route path="/howwedo" element={<HowWeDo isLoaded={isLoaded} />} />
          <Route
            path="/thebasics"
            element={<TheBasics isLoaded={isLoaded} />}
          />
          <Route path="/connect" element={<Connect isLoaded={isLoaded} />} />
          <Route
            path="/buildaproject"
            element={<Build isLoaded={isLoaded} />}
          />
        </Routes>
      </div>
      <Footer />
      <BuildButton />
    </Router>
  );
}

export default App;
