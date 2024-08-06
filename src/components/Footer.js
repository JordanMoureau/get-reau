import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import "../components/footer.css";

function Footer() {
  return (
    <footer>
      <h3>REAU AGENCY</h3>
      <h4>Make your digital dreams come true</h4>
      <div className="footer-nav">
        <ul>
          <li>
            <Link to="/">Home </Link> |
          </li>
          <li>
            <Link to="/howwedo">How We Do </Link> |
          </li>
          <li>
            <Link to="/thebasics">The Basics</Link> |
          </li>
          <li>
            <Link to="/connect">Send Us a Message</Link>
          </li>
        </ul>

        <div className="social-foot">
          <Link to="/connect">
            {" "}
            <button className="letsconnect">Lets Connect</button>
          </Link>

          <div className="social">
            <a
              href="https://www.facebook.com/profile.php?id=61560853709737"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FaSquareFacebook className="icon" size={28} />
            </a>
            <a
              href="https://www.instagram.com/get.reau/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <AiFillInstagram className="icon" size={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
