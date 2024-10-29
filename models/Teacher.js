const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  name: String,
  password: String,
});

module.exports = mongoose.model('Teacher', TeacherSchema);
