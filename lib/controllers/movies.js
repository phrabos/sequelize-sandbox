const {Router} = require('express');
const Actor = require('../models/Actor');
const Movie = require('../models/Movie');

module.exports = Router()
  .post('/', async(req, res, next)=>{
    const movie = await Movie.create(req.body)
    try {
      res.send(movie)
    } catch (err) {
      next(err)
    }
  })
  .get('/:id', async(req, res, next)=>{
    const id = req.params.id
    const movie = await Movie.findByPk(id, {
      include: Actor,
    })
    try {
    res.send(movie)
    } catch (error) {
    next(error)
    }
  })