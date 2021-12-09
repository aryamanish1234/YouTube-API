'use strict';

const mongoose = require('mongoose');
const config = require('../config.js');

const vault = mongoose.createConnection(config.db_credentials.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
    vault,
    mongoose
}