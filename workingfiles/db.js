const mongoose = require('mongoose');
require('dotenv').config()
const mongourl = process.env.Mongourl
mongoose.connect(mongourl
);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB connected');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = db;
