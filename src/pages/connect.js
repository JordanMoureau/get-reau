import CloudOne, { CloudTwo } from "../components/Clouds";
import Form from "../components/Form";
import LetsWork from "../components/LetsWork";
import "./connect.css";

function Connect({ isLoaded }) {
  return (
    <div className="connect">
      <div className="cloud-one">
        <CloudOne isLoaded={isLoaded} />
      </div>

      <div className="connect-stuff-container">
        <LetsWork isLoaded={isLoaded} />
        <Form isLoaded={isLoaded} />
      </div>
      <div className="cloud-two">
        <CloudTwo isLoaded={isLoaded} />
      </div>
    </div>
  );
}

export default Connect;
