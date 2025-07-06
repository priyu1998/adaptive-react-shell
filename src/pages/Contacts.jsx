import "./css/StaticPages.css";

export default function Contacts() {
  return (
    <div className="static-container contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, feel free to reach out.</p>

      <form className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Your name" required />
        </label>

        <label>
          Email:
          <input type="email" placeholder="Your email" required />
        </label>

        <label>
          Message:
          <textarea placeholder="Your message" rows={5} required />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
