const supertest = require('supertest');
const app = require('../app');

describe('Roman to number', () => {
  describe('check if number is valid', () => {
    it('should return 400 if number is not a number', () => {
      const response = supertest(app)
        .get('/api/v1/romans?number=a')
        .expect(400);
    });
  });
  describe('GET a roman number', () => {
    it('should return 200 and return a number number', () => {
      const response = supertest(app)
        .get('/api/v1/romans?number=1')
        .expect(200);
    });
  });
});
