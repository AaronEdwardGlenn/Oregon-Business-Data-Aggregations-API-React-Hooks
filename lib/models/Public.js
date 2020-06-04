const mongoose = require('mongoose'); 

const schema = new mongoose.Schema({
  destinations: {
    type: String
  },
  destinationType: {
    type: String
  },
  id: Number
});

module.exports = mongoose.model('PublicComments', schema); 
