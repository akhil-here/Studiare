const express = require ('express');
const app = express ();
const mongoose = require ('mongoose');
const PORT = 5000;
var cors = require ('cors');
const {MONGOURI} = require ('./keys');

mongoose.connect (MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on ('connected', () => {
  console.log ('connected to mongo');
});

mongoose.connection.on ('error', err => {
  console.log ('error connecting', err);
});

require ('./models/user');
require ('./models/courses');
require ('./models/events');
require ('./models/blog');

app.use (cors ());
app.use (express.json ());
app.use (express.urlencoded ({extended: false}));
app.use (require ('./routes/auth'));
app.use (require ('./routes/courses'));
app.use (require ('./routes/events'));
app.use (require ('./routes/blog'));

app.listen (PORT, () => {
  console.log ('server is running at', PORT);
});
