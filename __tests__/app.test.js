const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/utils/database');
const Actor = require('../lib/models/Actor');

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
    });
  }) 
  it('gets an actor by ID', async()=>{

    await Actor.create({
      id:1,
      name: 'Jim',
      dob: "1943-08-21T04:00:00.000Z",
      pob: 'San Francisco'
        })

    const data = await request(app)
    .get('/api/v1/actors/1')

    expect(data.body).toEqual(
      {
        id:1,
        name: 'Jim',
        dob: "1943-08-21T04:00:00.000Z",
        pob: 'San Francisco'
      }
    )
  })
  it('create an actor via POST', async()=>{
    const movie = {
    title: 'Jurassic Park',
    year: 1993,
    actor_id: 1,
  }
    const data = await request(app)
    .post('/api/v1/movies')
    .send(movie)
    expect(data.body).toEqual({
      id:1,
      title: 'Jurassic Park',
      year: 1993,
      actor_id: 1,
    });
  }) 
})
