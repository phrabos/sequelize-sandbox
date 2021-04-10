const {DataTypes, Model} = require('sequelize');
const db = require('../utils/database')


class Movie extends Model {}
  Movie.init({
  title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  year:{
    type:DataTypes.INTEGER(),
    allowNull:true
  },
  // actor_id:{
  //   type:DataTypes.INTEGER,
  //   allowNull:false
  // },

},{sequelize:db, timestamps:false, tableName:'movies'},
)
module.exports= Movie; 