// backend/models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  topic: String,
  message: String
});

module.exports = mongoose.model('Contact', contactSchema);
