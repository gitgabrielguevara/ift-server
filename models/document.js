const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
    minLength: 5
  },
  answer: {
    type: String,
    required: true,
    minLength: 5
  },
});

module.exports = mongoose.model('Document', documentSchema);