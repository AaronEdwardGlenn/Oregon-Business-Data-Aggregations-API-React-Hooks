const mongoose = require('mongoose'); 

const schema = new mongoose.Schema({
  jurisdiction: {
    type: String
  },
  name: {
    type: String
  },
  language: {
    type: String
  },
  destinations: {
    type: String
  },
  destinationType: {
    type: String
  },
  dateTime: {
    type: String
  },
  ipAddress: {
    type: Number
  },
  role: {
    type: String
  },
  organization: {
    type: String
  },
  id: Number
});

module.exports = mongoose.model('PublicComments', schema); 
