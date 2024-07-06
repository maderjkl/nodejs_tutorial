const mongoose = require('mongoose');
const mongourl = 'mongodb://localhost:27017/practice';

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
