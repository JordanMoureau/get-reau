import { useRef, useState } from "react";
import { FaRegHandPeace } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");

  const [messageSent, setMessageSent] = useState(false);

  const form = useRef();

  function clearForm() {
    setName("");
    setContactInfo("");
    setProject("");
    setMessage("");
  }

  // function submitForm(e) {

  // }

  function sendEmail(e) {
    e.preventDefault();

    setMessageSent(true);

    emailjs
      .sendForm("service_m48jv7r", "template_w7kkuia", form.current, {
        publicKey: "p7oN8NqSYov4ZfxyP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    clearForm();
  }

  return (
    <div className="contact-me">
      <form name="contact" onSubmit={sendEmail} method="POST" ref={form}>
        <input
          aria-label="Your first and last name"
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
          style={{ width: "40%" }}
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
