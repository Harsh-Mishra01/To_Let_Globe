// src/components/Footer.js
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/download.jpeg'; // Path to your logo image file

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">
              <img src={logo} alt="Logo" height="40" className="mr-2" /><br></br>
              To-Let Globe
            </h5>
            <p>One-stop solution for all your brokerage free rental needs</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">Quick Links</h5>
            <p><Link to="/about" className="text-white">About Us</Link></p>
            <p><Link to="/services" className="text-white">Services</Link></p>
            <p><Link to="/blogs" className="text-white">Blogs</Link></p>
            <p><Link to="/projects" className="text-white">Projects</Link></p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">Services</h5>
            <p>Paying Guest</p>
            <p>Flat and Houses</p>
            <p>Offices</p>
            <p>Shops and Godown</p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">Reach Us</h5>
            <p><FaPhoneAlt className="mr-2" /> +91-8707727347</p>
            <p><FaEnvelope className="mr-2" /> hello@toletglobe.in</p>
            <p><FaMapMarkerAlt className="mr-2" /> D1/122 Vipul Khand, Gomti Nagar, Lucknow, Uttar Pradesh</p>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>© 2023 To-Let Globe -- Lucknow</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
