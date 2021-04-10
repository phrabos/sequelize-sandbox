const {Router} = require('express');
const Actor = require('../models/Actor');
const Movie = require('../models/Movie');

module.exports= Router()
.post('/', async(req, res, next)=>{
const actor = await Actor.create(req.body);
try {
res.send(actor)
} catch (error) {
next(error)
}
})
.get('/:id', async(req, res, next)=>{
const id = req.params.id
const actor = await Actor.findByPk(id)
try {
res.send(actor)
} catch (error) {
next(error)
}
}) 
