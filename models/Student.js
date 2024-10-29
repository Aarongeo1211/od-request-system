const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
  section: String,
  password: String, // for simplicity, but consider hashing passwords in production
});

module.exports = mongoose.model('Student', StudentSchema);
