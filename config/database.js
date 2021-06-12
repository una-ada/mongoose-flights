/**
 * Server configuration
 * @author Una
 * @version 2021.06.12
 */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', function () {
  console.log(`Connected to MongoDB at ${this.host}:${this.port}`);
});
