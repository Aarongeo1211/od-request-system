// File: controllers/studentController.js

const ODRequest = require('../models/ODRequest'); // Assuming ODRequest model is defined

// Controller to handle OD applications
exports.applyOD = async (req, res) => {
  try {
    const { studentId, name, rollNumber, section, daysRequested, reason } = req.body;
    const proofDocumentURL = req.file ? req.file.path : null; // Set to null if no file uploaded

    // Create a new OD request
    const odRequest = new ODRequest({
      studentId,
      name,
      rollNumber,
      section,
      daysRequested,
      reason,
      proofDocumentURL,
    });

    await odRequest.save();
    res.status(201).json({ message: 'OD request submitted successfully', odRequest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
