// app/intouch/page.js
export default function InTouch() {
  return (
    <section className="contact">
      <h2 className="text-center mb-5">Request a Service</h2>
      <form className="contact-form mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Write your request or feedback..."
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Send Request
        </button>
      </form>
    </section>
  );
}