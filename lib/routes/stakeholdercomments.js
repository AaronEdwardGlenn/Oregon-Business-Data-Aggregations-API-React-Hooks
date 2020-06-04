const { Router } = require('express'); 
const StakeholderComments = require('../models/Stakeholder');

module.exports = Router()

  .post('/', (req, res, next) => {
    StakeholderComments;
    console.log(req.body);
      
  });

