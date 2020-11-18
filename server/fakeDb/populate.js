const config = require('../config/dev');
const fakeDb = require('./FakeDb');
const mongoose = require('mongoose');

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, async () => {
  console.log('Starting populating DB...');
  await fakeDb.populate();
  await mongoose.connection.close();
  console.log('DB has been populated...');
})
