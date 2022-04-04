const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const romans = require('./routes/roman.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/romans', romans);
app.use(
  '/api/v1/documentation',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);
app.use(function (req, res, next) {
  const err = new Error('Number not found');
  err.status = 404;
  return next(err);
});

app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).send({
      success: false,
      message: err.message
    });
}
);

module.exports = app;
