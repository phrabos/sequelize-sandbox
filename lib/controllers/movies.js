const {Router} = require('express');
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