/* eslint-disable no-console */
const csvtojson = require('csvtojson'); 
const NewOregonBizFEB2019 = require('../models/Bizlist'); 


function seedData() {
  return csvtojson()
    .fromFile(__dirname + '/../csvLib/biz-list.csv')
    .then(biz => {
      return biz.map(biz => ({
        bizName: biz['Business Name'],
        entityType: biz['Entity Type'],
        regDate: biz['Registry Date'],
        city: biz.City, 
        state: biz.State, 
        zip: biz['Zip Code']
      }));
    })
    .then(biz => NewOregonBizFEB2019.create(biz));    
} 

module.exports = {
  seedData
}; 
