const joi = require('joi');

const romanSchema = joi.object().keys({
  number: joi.number().integer().required().messages({
    'number.base': 'input must be a number',
    'number.integer': 'number must be an integer',
    'any.required': 'input is required',
    }),

});

module.exports = romanSchema