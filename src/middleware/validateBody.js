const query = require('express/lib/middleware/query');
const sendError = require('http-errors');
const romanSchema = require('../schema/validateResource');

const validateBody = (req, res, next) => {
  const { error } = romanSchema.validate(req.query);
  if (error) return next(sendError(400, error.details[0].message));
  return next();
};

module.exports = validateBody;
