const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/utils/database');
// const Actor = require('../lib/models/Actor');

describe('alchemy-app routes', () => {
  beforeEach(() => {
  return db.sync({force: true});
  });
  it('create an actor via POST', async()=>{
    const actor = {
    name: 'Jim',
    dob: '8-21-1943',
    pob: 'San Francisco'
  }
  const data = await request(app)
  .post('/api/v1/actors')
  .send(actor)
  expect(data.body).toEqual({
  id:1,
  name: 'Jim',
  dob: "1943-08-21T04:00:00.000Z",
  pob: 'San Francisco'
  })
}) 
})
