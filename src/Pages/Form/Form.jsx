import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactSection.css";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ THIS IS WHERE YOU PUT EMAILJS
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qbra83o",   // 👈 paste here
        "template_rjv39bf",  // 👈 paste here
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          project: form.project,
          message: form.message,
        },
        "AVp_rxbWIsQYpLB_j"    // 👈 paste here
      )
      .then(() => {
        alert("Message sent successfully ✅");

        // clear form
        setForm({
          name: "",
          email: "",
          project: "",
          phone: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Failed ❌");
      });
  };
  return (
    <section className="contact" id="contact">

      <div className="contact-text">
        <span className="badge">Get in touch</span>

        <h2>
          Let’s start your <br />
          next project
        </h2>

        <p>
          Share your project idea, goals, and requirements. We’ll review everything and guide you with the best next steps forward.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Your mobile number"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <select
            name="project"
            value={form.project}
            onChange={handleChange}
            required
          >
            <option value="">Select project type</option>
            <option>Website Design</option>
            <option>Landing Page</option>
            <option>E-commerce Website</option>
            <option>Portfolio Website</option>
            <option>UI/UX Design</option>
            <option>Website Redesign</option>
          </select>
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows="4"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send message
        </button>

      </form>

    </section>
  );
}

export default ContactSection;