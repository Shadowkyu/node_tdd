'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, default: '', trim: true, maxlength: 400 },
  context: { type: String, default: '', trim: true, maxlength: 1000 },
  AuthorId : {type: mongoose.Schema.Types.ObjectId, ref:'Authors'}
});


module.exports = mongoose.model('Post', PostSchema, "Posts");

/*module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.Author)
  };
  return Post;
};*/