require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const NewOregonBizFEB2019 = require('../lib/models/Bizlist');

describe('biz routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  let biz; 
  beforeEach(async() => {
    let date = new Date(); 
    biz = await NewOregonBizFEB2019.create({
      bizName: 'Calvin Coolidge',
      entityType: 'Hella Cool',
      regDate: date,
      city: 'Portland',
      state: 'Oregon', 
      zip: '97217' 
    });
  });

  afterAll(() => {
    return mongoose.connection.close();
  });
});

it('can create a new biz', () => {
  const date = new Date(); 
  return request(app)
    .post;
});
