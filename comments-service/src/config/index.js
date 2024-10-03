require('dotenv').config();

const config = {
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/comments',
  PORT: process.env.PORT || 3001,
};

module.exports = config;
