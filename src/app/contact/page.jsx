// app/contact/page.js
export default function Contact() {
  return (
    <div className="pt-5">
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="title">Contact Me</h2>
        <p className="description">Let’s connect for projects, collaborations, or inquiries.</p>
        <div className="contact-list">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:emkaylinkz@gmail.com">emkaylinkz@gmail.com</a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/2348030751532"
              target="_blank"
              rel="noopener noreferrer"
            >
              +2348030751532
            </a>
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}