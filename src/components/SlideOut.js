import { IoCloseCircle } from "react-icons/io5";

export default function SlideOut({ isOpen, handleClick }) {
  return (
    <div className="slide-out" style={{ width: isOpen ? "300px" : "0%" }}>
      <div className="slide-container">
        <IoCloseCircle
          size={28}
          onClick={handleClick}
          className="close-button"
        />

        <div className="project-box"></div>
        <div className="project-box"></div>
        <div className="project-box"></div>
        <div className="project-box"></div>

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
