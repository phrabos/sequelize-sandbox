const Actor = require('./Actor');
const Movie = require('./Movie');

Actor.hasMany(Movie)
Movie.belongsTo(Actor)