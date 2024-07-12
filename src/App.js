// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ContactUs from './ContactUs';
import Header from './components/Header'; // Import Header component
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

