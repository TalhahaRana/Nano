import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <div>
      <div className='heroo'>
      <h1 className="text-center pt-4 text-white">Contact Us</h1>
      </div>
      
      <div className="card shadow-sm contact">
        <div className="card-body">
          <h5 className="card-title">Get in Touch</h5>
          <p className="card-text">We'd love to hear from you! Please fill out the form below and we’ll get back to you shortly.</p>
          <div className='container'>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" required />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Subject" />
            </div>
            
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
