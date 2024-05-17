import stars from "../media/stars.png";

export default function Footer() {
  return (
    <>
      <div
        className="starbreak"
        style={{ backgroundImage: `url(${stars})` }}
      ></div>
      <footer>
        <div className="contact">
          <p>
            A full service creative agency home based in eastern washington.
          </p>
          <h3>copyright 2024 reau </h3>
        </div>
      </footer>
    </>
  );
}
