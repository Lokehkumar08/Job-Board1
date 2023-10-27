const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  // Add more job-related fields
});

module.exports = mongoose.model('Job', jobSchema);