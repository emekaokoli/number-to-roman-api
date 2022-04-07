const httpError = require('http-errors');
const { uuid } = require('uuidv4');

const romanData = require('../data/data');
const getRomanNumber = require('../services/convert.services');

const postHandler = (req, res, next) => {
  const { number } = req.query;
  const romanNumber = getRomanNumber(parseInt(number, 10));
  if (!romanNumber) {
    return next(httpError(404, 'Number not found'));
  }
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });
  res.write(
    `data: {"id": "${uuid()}", "romanNumber": "${romanNumber}"}`
  );
  res.write('\n\n');
  res.end();
};
module.exports = postHandler;
