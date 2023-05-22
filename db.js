const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1/act8db';

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error MongoDB'))

module.exports = db;