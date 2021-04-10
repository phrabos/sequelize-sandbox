const Actor = require('./Actor');
const Movie = require('./Movie');

Movie.hasMany(Actor)
Actor.belongsTo(Movie)