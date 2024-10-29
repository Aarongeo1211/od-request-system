const mongoose = require('mongoose');

const ODRequestSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  name: String,
  rollNumber: String,
  section: String,
  daysRequested: Number,
  reason: String,
  proofDocumentURL: String,
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('ODRequest', ODRequestSchema);
