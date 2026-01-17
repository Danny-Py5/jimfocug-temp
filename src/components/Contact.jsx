import "./styles/contact.css";
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact padding section-wrapper-padding" id="contact">
      <div className="contact__wrapper section-wrapper">
        <h2 className="contact__title">
          Ready to transform your <span>processes and systems</span>? Let’s talk.
        </h2>
        
        <form className="contact__form flex flex-column gap2">
          <div className="form__group flex flex-column">
            <p>Name</p>
            <input 
              className="form__input"
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form__group flex flex-column">
            <p>Organisation</p>
            <input 
              className="form__input"
              type="text" 
              name="organisation" 
              value={formData.organisation} 
              onChange={handleChange} 
            />
          </div>

          <div className="form__group flex flex-column">
            <p>Email</p>
            <input 
              className="form__input"
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form__group flex flex-column">
            <p>Phone</p>
            <input 
              className="form__input"
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
            />
          </div>

          <div className="form__group flex flex-column">
            <p>Service of Interest</p>
            <select 
              className="form__input"
              name="service" 
              value={formData.service} 
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              <option value="consulting">Consulting</option>
              <option value="development">System Development</option>
            </select>
          </div>

          <div className="form__group flex flex-column">
            <p>Message</p>
            <textarea 
              className="form__input"
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              required
            ></textarea>
          </div>

          <div className="flex flex-justify--start">
            <button type="submit" style={{backgroundColor: 'var(--primary-color)'}}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;