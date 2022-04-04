const romanData = require('../data/data');

const getRomanNumber = async (number) => {
  // effeciency considerations, if i have 5000 records, this is faster
  return romanData[number];
};
module.exports = getRomanNumber;

