const express = require('express');
const router = express.Router();
const { viewRequests, approveRequest } = require('../controllers/teacherController');

router.get('/view-requests', viewRequests);
router.post('/approve-od/:id', approveRequest);

module.exports = router;
