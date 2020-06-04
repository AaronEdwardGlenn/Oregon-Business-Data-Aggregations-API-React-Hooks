const { Router } = require('express'); 
const StakeholderComments = require('../models/Stakeholder');

module.exports = Router()

  .post('/', (req, res) => {
    StakeholderComments
      .create(req.body)
      .then(comment => res.send(comment));
  });

