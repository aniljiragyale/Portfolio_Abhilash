// src/components/ContactMe.jsx
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactMe.css';

const ContactMe = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yil2ugi',         // Your EmailJS service ID
      'template_5xqoia9',        // Your EmailJS template ID
      formRef.current,
      'FkGP4o-Y97efnYJNI'        // Your EmailJS public key
    )
    .then(() => {
      alert("📩 Message sent successfully!");
      formRef.current.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again later.");
    });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-heading">Get in Touch</h2>

      <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactMe;
