const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Define routes for job-related actions
router.get('/jobs', jobController.getJobs);
// Add more routes as needed

module.exports = router;