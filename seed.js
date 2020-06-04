/* eslint-disable no-console */
require('dotenv').config(); 
require('./lib/utils/connect')(); 

const mongoose = require('mongoose'); 
const { seedStakeholderData } = require('./lib/utils/seed-data'); 

seedStakeholderData()
  .then(() => console.log('duuuuooonnneeeeeee'))
  .finally(() => mongoose.connection.close());
