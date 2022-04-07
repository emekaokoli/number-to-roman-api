const romanData = require('../data/data');

// effeciency considerations, if i have 5000 records, this is faster
const getRomanNumber = (number) => romanData[number];

module.exports = getRomanNumber;
