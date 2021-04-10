const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/utils/database');
const Actor = require('../lib/models/Actor');
const Movie = require('../lib/models/Movie');
const faker = require('faker');

const actor = {
  name: faker.name.findName(),
  dob: '1943-08-21T04:00:00.000Z',
  pob: faker.address.city()
}

const actor2 = {
  name: faker.name.findName(),
  dob: '1943-08-21T04:00:00.000Z',
  pob: faker.address.city()
}

const movie = {
  title: faker.random.words(2),
  year: faker.datatype.number({min:1950,max:2021}),
  actor_id: 1,
}

const movie2 = {
  title: faker.random.words(2),
  year: faker.datatype.number({min:1950,max:2021}),
  actor_id: 1,
}

describe('alchemy-app routes', () => {
  beforeEach(() => {
  return db.sync({force: true});
  });
  
  it('create an actor via POST', async()=>{
    
  const data = await request(app)
  .post('/api/v1/actors')
  .send(actor)
  expect(data.body).toEqual({id:expect.any(Number), ...actor});
  }) 
  it('gets an actor by ID', async()=>{

    await Actor.create(actor)
    await Actor.create(actor2)

    const data = await request(app)
    .get('/api/v1/actors/2')

    expect(data.body).toEqual({id:expect.any(Number), ...actor2})
  })
  it('create a movie via POST', async()=>{
    
    const data = await request(app)
    .post('/api/v1/movies')
    .send(movie)
    expect(data.body).toEqual({id:expect.any(Number), ...movie});
  }) 

  it('gets a movie by ID', async()=>{

    await Movie.create(movie)
    await Movie.create(movie2)

    const data = await request(app)
    .get('/api/v1/movies/2')

    expect(data.body).toEqual({id:2, ...movie2})
  })

  it('gets all movies where actor ID = 1', async()=>{

    await Actor.create(actor)
    await Actor.create(actor2)
    await Movie.create(movie)
    await Movie.create(movie2)

    const data = await request(app)
    .get('/api/v1/movies/2')

    expect(data.body).toEqual({id:2, ...movie2})
  })
})
