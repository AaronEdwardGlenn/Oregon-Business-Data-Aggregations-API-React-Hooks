const { Router } = require('express'); 
const StakeholderComments = require('../models/Stakeholder');

module.exports = Router()

  .post('/', (req, res, next) => {
    StakeholderComments
      .create(req.body)
      .then(comment => res.send(comment))
      .catch(next); 
  })
  .get('/get-by-name', (req, res, next) => {
    StakeholderComments
      .getCommentsByName()
      .then(numbers => res.send(numbers))
      .catch(next);
  })
  .get('/get-by-id', (req, res, next) => {
    StakeholderComments
      .getCommentsById()
      .then(numbers => res.send(numbers))
      .catch(next);
  })
  .get('/comments-with-parks', (req, res, next) => {
    StakeholderComments
      .commentsWithParks()
      .then(numbers => res.send(numbers))
      .catch(next);
  });
