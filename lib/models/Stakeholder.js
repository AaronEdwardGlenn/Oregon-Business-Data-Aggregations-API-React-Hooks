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
    type: String
  },
  role: {
    type: String
  },
  organization: {
    type: String
  },
  id: String
});

schema.index({ fields: 'text' });

schema.statics.getCommentsByName = function(order = 'desc') {
  return this.aggregate([
    {
      '$group': {
        '_id': '$name', 
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

schema.statics.getCommentsById = function(order = 'desc') {
  return this.aggregate([
    {
      '$group': {
        '_id': '$_id', 
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


schema.statics.commentsWithParks = function() {
  
  return this.aggregate(
    [
      { '$match': { '$text': { '$search': 'Parks' } } },
      { '$sort': { score: { '$meta': 'textScore' } } },
      { '$project': { title: 1, _id: 0 } }
    ]
  );
};



module.exports = mongoose.model('StakeholderComments', schema); 
