const {DataTypes, Model} = require('sequelize');
const db = require('../utils/database')


class Actor extends Model {}
Actor.init({
  name:{
   type:DataTypes.STRING,
    llowNull:false
  },
  dob:{
    type:DataTypes.DATE,
    allowNull:true
  },
  pob:{
    type:DataTypes.STRING,
    allowNull:true
  },

},{sequelize:db, timestamps:false},
)
module.exports= Actor; 