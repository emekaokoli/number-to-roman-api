const express = require('express');
const router = express.Router();

const { postHandler } = require('../controllers/romanNumber.controllers');
const  validateBody  = require('../middleware/validateBody');

router.route('/').post(validateBody, postHandler);

module.exports = router;