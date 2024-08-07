import "../pages/connect.css";
import Star from "./Star";

export default function LetsWork({ isLoaded }) {
  return (
    <div className="worktogether">
      <h1>lets work together</h1>
      <p>
        We're one of those bougie creative agencies that can do everything for
        you.
        <br />
        <br />
        And we're pretty proud to say we're budget friendly. We offer multiple
        types of payment plans and whatever your budget may be: we've got
        options.
      </p>
      <div className="star">
        <Star isLoaded={isLoaded} />
      </div>
    </div>
  );
}
