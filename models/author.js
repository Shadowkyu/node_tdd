'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  firstName: { type: String, default: '', trim: true, maxlength: 400 },
  lastName: { type: String, default: '', trim: true, maxlength: 400 },
},{
  versionKey: false
});

module.exports = mongoose.model('Author', AuthorSchema, 'Authors');
/*module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  Author.associate = (models) => {
    Author.hasMany(models.Post)
  }
  return Author;
};*/