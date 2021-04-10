const {Router} = require('express');
const Movie = require('../models/associations');
const Actor = require('../models/associations');

module.exports= Router()
.get('/:id', async(req, res, next)=>{
  const id = req.params.id
  const movie2 = await Movie.findOne({
    where:{
      actor_id: id
    },
    include: Actor
  })
  // const movie = await Movie.findAll({
  //   where:{
  //     actor_id: id
  //   }
  // })
  try {
  res.send(movie2)
  } catch (error) {
  next(error)
  }
})