const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(
  `mongodb://mongodb:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: { authSource: "admin" },
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
  },
);


module.exports = mongoose;