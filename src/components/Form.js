import { useState } from "react";
import emailjs from "emailjs-com";
import Heart from "./Heart";
import "../pages/connect.css";

import { motion } from "framer-motion";

export default function Form({ isLoaded }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.log("Spam detected. Form not submitted.");
      return;
    }

    emailjs
      .send(
        "service_m48jv7r",
        "template_w7kkuia",
        formData,
        "p7oN8NqSYov4ZfxyP"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setSubmitted(true);
        },
        (error) => {
          console.error("Error:", error.text);
        }
      );
  };

  const bounceVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      {submitted && (
        <motion.div
          className="submission-message"
          initial="hidden"
          animate="visible"
          variants={bounceVariants}
        >
          Thanks for submitting. We will be in touch soon.
        </motion.div>
      )}
      <div className="heart-position">
        <Heart isLoaded={isLoaded} />
      </div>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Name..."
      />
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Email address..."
      />
      <input
        type="phone"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        placeholder="Phone number..."
      />
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="How can we help..."
        required
      ></textarea>
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: "none" }} // Hide the honeypot field
      />
      <div className="submit-button-container">
        <button type="submit">Level Up ++</button>
      </div>
    </form>
  );
}
