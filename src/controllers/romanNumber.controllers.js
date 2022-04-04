const httpError = require('http-errors');

const romanData = require('../data/data');

const getRomanNumber = require('../services/convert.services');

exports.postHandler = async (req, res, next) => {
  const { number } = req.body;
  const result = await getRomanNumber(number);
  if (!result) return next(httpError(404, 'The number does not exist'));

  return res.status(200).send({
    success: true,
    data: result,
  });
};
