import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css'; // Custom CSS if needed

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      if (response.status === 200) {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Your message has been sent!'
        });
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          topic: '',
          message: ''
        });
      } else {
        throw new Error('Unexpected response code');
      }
    } catch (error) {
      console.error('Error submitting the form', error);
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Error submitting the form. Please try again later.'
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <iframe
            title="To-Let Globe Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.211579567656!2d80.98675541504644!3d26.860117983152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398dd61a8d2825e1%3A0xa6b0706c3047d8b0!2sTo-Let%20Globe%20-%20Headquarter%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1626110490226!5m2!1sen!2sin"
            width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          ></iframe>
          <h5 className="mt-3">
            To-Let Globe - Headquarter in Lucknow,<br />
            D1/122, Vipul Khand 3, Vipul Khand,<br />
            Gomti Nagar, Lucknow, Uttar Pradesh 226010
          </h5>
        </div>
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Contact Us</h2>
              {formStatus.submitted && !formStatus.error && (
                <div className="alert alert-success" role="alert">
                  {formStatus.message}
                </div>
              )}
              {formStatus.error && (
                <div className="alert alert-danger" role="alert">
                  {formStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone:</label>
                  <input type="text" id="phone" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="topic" className="form-label">Topic:</label>
                  <select id="topic" name="topic" className="form-select" value={formData.topic} onChange={handleChange} required>
                    <option value="">Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message:</label>
                  <textarea id="message" name="message" className="form-control" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
