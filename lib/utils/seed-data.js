/* eslint-disable no-console */
const csvtojson = require('csvtojson'); 
const StakeholderComments = require('../models/Stakeholder.js'); 
// const PublicComments = require('../models/Public.js'); 


function seedStakeholderData() {
  return csvtojson()
    .fromFile(__dirname + '/../csvLib/StanCOGStakeholderComments.csv')
    .then(stakeholderComment => {
      return stakeholderComment.map(stakeholderComment => ({
        jurisdiction: stakeholderComment.Jurisdiction,
        name: stakeholderComment.Name,
        language: stakeholderComment.Language,
        destinations: stakeholderComment.Destinations, 
        destinationType: stakeholderComment['What type of destination is this?'], 
        dateTime: stakeholderComment.Datetime, 
        ipAddress: stakeholderComment['IP Address'], 
        role: stakeholderComment.Role, 
        organization: stakeholderComment.Organization, 
        id: stakeholderComment.ID
      }));
    })
    .then(stakeholderComment => StakeholderComments.create(stakeholderComment));    
} 


// function seedPublicData() {
//   return csvtojson()
//     .fromFile(__dirname + '/../csvLib/StanCOGPublicComments.csv')
//     .then(publicComment => {
//       return publicComment.map(publicComment => ({
//         jurisdiction: publicComment.Jurisdiction,
//         name: publicComment.Name,
//         language: publicComment.Language,
//         id: publicComment.ID
//       }));
//     })
//     .then(publicComment => PublicComments.create(publicComment));    
// }

module.exports = {
  seedStakeholderData
  // seedPublicData
}; 
