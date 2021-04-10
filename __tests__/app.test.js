const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/utils/database');
const Actor = require('../lib/models/Actor');
const Movie = require('../lib/models/Movie');
const faker = require('faker');
require('../lib/models/associations');

// const actor = {
//   name: faker.name.findName(),
//   dob: '1943-08-21T04:00:00.000Z',
//   pob: faker.address.city()
// }

// const actor2 = {
//   name: faker.name.findName(),
//   dob: '1943-08-21T04:00:00.000Z',
//   pob: faker.address.city()
// }

// const movie = {
//   title: faker.random.words(2),
//   year: faker.datatype.number({min:1950,max:2021}),
//   actor_id: 1,
// }

// const movie2 = {
//   title: faker.random.words(2),
//   year: faker.datatype.number({min:1950,max:2021}),
//   actor_id: 1,
// }

// const movie3 = {
//   title: faker.random.words(2),
//   year: faker.datatype.number({min:1950,max:2021}),
//   actor_id: 3,
// }

describe('alchemy-app routes', () => {
  beforeEach(() => {
  return db.sync({force: true});
  });
  
  it.skip('create an actor via POST', async()=>{
    
  const data = await request(app)
  .post('/api/v1/actors')
  .send(actor)
  expect(data.body).toEqual({id:expect.any(Number), ...actor});
  }) 
  it.skip('gets an actor by ID', async()=>{

    await Actor.create(actor)
    await Actor.create(actor2)

    const data = await request(app)
    .get('/api/v1/actors/2')

    expect(data.body).toEqual({id:expect.any(Number), ...actor2})
  })
  it.skip('create a movie via POST', async()=>{
    
    const data = await request(app)
    .post('/api/v1/movies')
    .send(movie)
    expect(data.body).toEqual({id:expect.any(Number), ...movie});
  }) 

  it('gets a movie by ID', async()=>{

      const actor = await Actor.create({
      name: "Some Name",
      dob: '1943-08-21T04:00:00.000Z',
      pob: 'Portland'
    })

    await Movie.create({
      title: 'strategy feed',
      year: 1999,
      ActorId: actor.id
    })

    const data = await request(app)
    .get('/api/v1/movies/1')

    expect(data.body).toEqual('')
  });

  it.skip('gets all movies where actor ID = 3', async()=>{

    await Actor.create(actor)
    await Actor.create(actor2)
    await Movie.create(movie)
    await Movie.create(movie2)
    await Movie.create(movie3)

    const data = await request(app)
    .get('/api/v1/actormovies/3')

    expect(data.body).toEqual(
      {id:expect.any(Number), ...movie3},
      )
  })
})
