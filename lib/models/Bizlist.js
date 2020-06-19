/* eslint-disable no-console */
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  bizName: {
    type: String,
    required: true
  },
  entityType: {
    type: String,
    requied: true
  },
  regDate: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    requied: true
  },
  zip: String
});

schema.statics.newBizByState = function(order = 'desc') {
  return this.aggregate([
    {
      '$group': {
        '_id': '$city',
        'count': {
          '$sum': 1
        }
      }
    }, {
      '$sort': {
        'count': order === 'asc' ? 1 : -1
      }
    }
  ]);
};

schema.statics.newBizByLiscenceCatagory = function(order = 'desc') {
  return this.aggregate([
    {
      '$group': {
        '_id': '$entityType',
        'count': {
          '$sum': 1
        }
      }
    }, {
      '$sort': {
        'count': order === 'asc' ? 1 : -1
      }
    }
  ]);
};

schema.statics.newBizOrdered = function(order = 'desc') {
  return this.aggregate(
[
  {
    '$sort': {
      'bizName': 1
    }
  }
]);
};



module.exports = mongoose.model('NewOregonBizFEB2019', schema);
