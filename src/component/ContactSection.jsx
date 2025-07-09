import '../styles/ContactSection.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <textarea placeholder="Message" className="form-textarea"></textarea>
          <button type="submit" className="form-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
