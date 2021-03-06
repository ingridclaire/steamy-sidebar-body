const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/steamy',
  { useNewUrlParser: true },
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to MongoDB on ${db.host}:${db.port}`));
