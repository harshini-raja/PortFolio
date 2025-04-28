import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/Contact.css";

export const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cu3g85s",
        "template_0ujzjim",
        form.current,
        "IjaocV8oZXyv_SPpq"
      )
      .then(
        (result) => {
          setStatusMessage("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          setStatusMessage("Oops! Something went wrong. ❌ Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="connect">
      <div className="container">
        <h2>Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="form-control"
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>

            {/* Status Message */}
            {statusMessage && (
              <p
                style={{
                  marginTop: "15px",
                  color: "#28a745",
                  fontWeight: "bold",
                }}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
