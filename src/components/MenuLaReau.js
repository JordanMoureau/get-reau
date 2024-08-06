import { Link } from "react-router-dom";
import Heart from "./Heart.js";
import "./menulareau.css";
import themenu from "./MenuLaReauList.js";

export default function MenuLaReau({ isLoaded }) {
  return (
    <div className="menu-la-reau">
      <h1>Menu A La Reau</h1>
      <div className="menu-list-container">
        {themenu.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-list">
              <div className="menu-header">{item.header}</div>
              <p className="menu-detail">+ {item.plusone}</p>
              <p className="menu-detail">++ {item.plustwo}</p>
              <p className="menu-detail">+++ {item.plusthree}</p>
            </div>
            <div className="menu-button-container">
              <Link to="/connect">
                <div className="menu-button">
                  {" "}
                  <Heart isLoaded={isLoaded} />
                  Get Reau
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
