const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// defined schema to store orignal text
const Rotations = new Schema({
  data: {
    type: String,
    required: true
  },
},
{
  timestamps: true
});

module.exports = mongoose.model('rotations', Rotations );