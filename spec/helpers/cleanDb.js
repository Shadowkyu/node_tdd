const mongoose = require('mongoose');
const Author = require('../../models/author');
const Post = require('../../models/post');

const cleanDb = async (db) => {
    await Author.deleteMany();
    await Post.deleteMany();
    //await db.Author.truncate({ cascade: true });
    //await db.Post.truncate({ cascade: true });
  }
  module.exports = cleanDb
  