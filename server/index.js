const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./routes'));

// Errors handling
app.use((req, res, next) => {
  let err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Unexpected Error');
});

app.listen(config.port, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`server running on port ${config.port}.`);
});
