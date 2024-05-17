export default function ContactForm() {
  return (
    <div className="contact-me">
      <form name="contact" method="POST" data-netlify="true">
        <input
          placeholder="Your Full name"
          type="text"
          id="name"
          name="name"
          required
        />
        <input
          type="text"
          id="emailphone"
          name="emailphone"
          placeholder="Your email & phone number"
          required
        />
        <input
          type="text"
          id="project"
          name="project"
          placeholder="type of project"
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your goals. How can I help?"
          required
        />
        <button type="submit">GET REAU</button>
      </form>
    </div>
  );
}
