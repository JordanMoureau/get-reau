import { useRef, useState } from "react";
import { FaRegHandPeace } from "react-icons/fa";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");

  const [messageSent, setMessageSent] = useState(false);

  function clearForm() {
    setName("");
    setContactInfo("");
    setProject("");
    setMessage("");
  }

  function submitForm(e) {
    e.preventDefault();
    setMessageSent(true);

    clearForm();
  }

  const form = useRef();

  return (
    <div className="contact-me">
      <form
        name="contact"
        onSubmit={submitForm}
        method="POST"
        ref={form}
        netlify
      >
        <input
          value={name}
          placeholder="Your Full name"
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className={!name ? "" : "red-bg"}
          required
        />
        <input
          value={contactInfo}
          type="text"
          id="emailphone"
          name="emailphone"
          placeholder="Your email & phone number"
          onChange={(e) => setContactInfo(e.target.value)}
          className={!contactInfo ? "" : "red-bg"}
          required
        />
        <input
          value={project}
          type="text"
          id="project"
          name="project"
          placeholder="type of project"
          onChange={(e) => setProject(e.target.value)}
          className={!project ? "" : "red-bg"}
          required
        />
        <textarea
          value={message}
          id="message"
          name="message"
          placeholder="Tell me about your goals. How can I help?"
          onChange={(e) => setMessage(e.target.value)}
          className={!message ? "" : "red-bg"}
          required
        />

        <button
          type="submit"
          className="recent-button pushable"
          {...(messageSent ? { disabled: true } : {})}
        >
          <span className="front">
            {!messageSent ? (
              "GET REAU"
            ) : (
              <FaRegHandPeace size={32} style={{ paddingTop: "5px" }} />
            )}
          </span>
        </button>
      </form>
    </div>
  );
}
