const ODRequest = require('../models/ODRequest');

// View all OD requests
exports.viewRequests = async (req, res) => {
  try {
    const requests = await ODRequest.find({ status: 'pending' }).populate('studentId', 'name rollNumber section');
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Approve OD request
exports.approveRequest = async (req, res) => {
  try {
    const { id } = req.params;
    await ODRequest.findByIdAndUpdate(id, { status: 'approved' });
    res.json({ message: 'OD request approved' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
