// File: routes/studentRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const { applyOD } = require('../controllers/studentController');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save files to the "uploads" directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});

// File filter to accept only certain file types (e.g., PDFs and images)
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf' || file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDFs and images are allowed.'), false);
  }
};

// Initialize multer with storage, file filter, and size limit
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 } // 2MB limit
});

router.post('/apply-od', upload.single('proofDocument'), applyOD);

module.exports = router;
