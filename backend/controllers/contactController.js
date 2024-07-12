// backend/controllers/contactController.js
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Function to send confirmation email
const sendConfirmationEmail = async (name, email) => {
  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS // Your Gmail password
    }
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Contact Form Submission Confirmation',
    text: `Dear ${name},\n\nThank you for contacting us! We have received your message and will get back to you shortly.\n\nBest regards,\nThe Contact Us Team`
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent');
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
};

// Controller function to handle form submission
exports.submitContactForm = async (req, res) => {
  const { name, email, phone, topic, message } = req.body;
  const contact = new Contact({ name, email, phone, topic, message });

  try {
    // Save contact form data to MongoDB
    await contact.save();

    // Send confirmation email
    await sendConfirmationEmail(name, email);

    // Respond to the client
    res.status(200).json({ message: 'Contact form submitted and confirmation email sent' });
  } catch (error) {
    console.error('Error submitting the form:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
};
