const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

// w REACT FE first ok
// BE 1st has advantages w/ vanilla code
// MVP: being able to run program before building off
// server and db(schema) first, models directly after 
// after models, routes
// from there, FE html
// FE js
// once things are functioning, then do styling 

//show sourcing schema/seeds in terminal
//running server
//THEN open insomnia
//optional: show WB
