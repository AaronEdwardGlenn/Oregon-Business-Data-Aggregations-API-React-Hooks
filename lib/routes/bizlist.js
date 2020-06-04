const { Router } = require('express'); 
const StakeholderComments = require('../models/Stakeholder');

module.exports = Router()

  .post('/', (req, res, next) => {
    StakeholderComments
      .create(req.body)
      .then(comment => res.send(comment))
      .catch(next); 
  });
  
// .get('/new-bizes-by-state', (req, res, next) => {
//   NewOregonBizFEB2019
//     .newBizByState()
//     .then(numbers => res.send(numbers))
//     .catch(next);
// })

// .get('/new-bizes-by-liscence-type', (req, res, next) => {
//   NewOregonBizFEB2019
//     .newBizByLiscenceCatagory()
//     .then(numbers => res.send(numbers))
//     .catch(next);
// })

// .get('/:id', (req, res, next) => {
//   NewOregonBizFEB2019
//     .findById(req.params.id)
//     .then(biz => res.send(biz)).catch(next);     
// })
    
// .patch('/:id', (req, res, next) => {
//   NewOregonBizFEB2019
//     .findByIdAndUpdate(req.params.id, req.body, {
//       new: true })
//     .then(biz => res.send(biz))
//     .catch(next);
// })

// .delete('/:id', (req, res, next) => {
//   NewOregonBizFEB2019
//     .findByIdAndDelete(req.params.id, req.body, {
//       new: true })
//     .then(biz => res.send(biz))
//     .catch(next);
