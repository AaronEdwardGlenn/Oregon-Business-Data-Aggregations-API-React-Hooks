/* eslint-disable no-console */
const csvtojson = require('csvtojson'); 
const PublicComments = require('../models/Stakeholder.js'); 


function seedData() {
  return csvtojson()
    .fromFile(__dirname + '/../csvLib/StanCOGStakeholderComments.csv')
    .then(stakeholder => {
      return stakeholder.map(stakeholder => ({
        jurisdiction: stakeholder.Jurisdiction,
        name: stakeholder.Name,
        language: stakeholder.Language,
        destinations: stakeholder.Destinations, 
        destinationType: stakeholder['What type of destination is this?'], 
        dateTime: stakeholder.Datetime, 
        ipAddress: stakeholder['IP Address'], 
        role: stakeholder.Role, 
        organization: stakeholder.Organization, 
        id: stakeholder.ID
      }));
    })
    .then(stakeholder => PublicComments.create(stakeholder));    
} 

module.exports = {
  seedData
}; 
