import { IoCloseCircle } from "react-icons/io5";
import fromnovphoto from "../media/fromnov.png";
import coppa from "../media/coppa.png";
import bookish from "../media/bookish.png";
import devprof from "../media/dev.png";
import newlove from "../media/newlove.png";

export default function SlideOut({ isOpen, handleClick }) {
  return (
    <div className="slide-out" style={{ width: isOpen ? "300px" : "0%" }}>
      <div className="slide-container">
        <IoCloseCircle
          size={28}
          onClick={handleClick}
          className="close-button"
        />

        <div
          className="project-box"
          style={{ backgroundImage: `url(${fromnovphoto})` }}
        ></div>
        <div
          className="project-box"
          style={{ backgroundImage: `url(${bookish})` }}
        ></div>
        <div
          className="project-box"
          style={{ backgroundImage: `url(${devprof})` }}
        ></div>

        <div
          className="project-box"
          style={{ backgroundImage: `url(${coppa})` }}
        ></div>
        <div
          className="project-box"
          style={{ backgroundImage: `url(${newlove})` }}
        ></div>

        {/* <div
          className="build-button"
          //   style={{
          //     width: isOpen ? "260px" : "0px",
          //   }}
        >
          Build a project
        </div> */}
      </div>
    </div>
  );
}
