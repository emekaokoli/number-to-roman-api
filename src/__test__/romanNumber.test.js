const supertest = require('supertest')
const app = require('../app');
const { postHandler } = require('../controllers/romanNumber.controllers');
const getRomanNumber = require('../services/convert.services')

describe('Roman to number', () => {
  describe('if the input is empty or bad', () => {
    it('should return a 400', async () => {
     const {statusCode} = await supertest(app).post('/api/v1/romans').type('json')
     expect(statusCode).toBe(400)
    });
  });
   describe('if the input not a integer', () => {
     it('should return a 400', async () => {
       await supertest(app)
         .post('/api/v1/romans')
         .send('number=h')
         .expect((res) => {
           res.body.number;
         })
         .expect(400, { 
           success: false, 
           message: 'input must be a number' 
           });
       
     });
   });

     describe('if the input does not exists', () => {
       it('should return a 404', async () => {
         const { statusCode } = await supertest(app)
           .post('/api/v1/romans')
           .send('number=10001')
           .set('Accept', 'application/json')
           .expect((res) => {
             res.body.number;
           })
           .expect(404, {
             success: false,
             message: 'The number does not exist',
           });
       });
     });
  describe('if the roman number equivalent exists', () => {
    it('should return 200 and a roman number', async () => {
      await supertest(app)
        .post('/api/v1/romans')
        .send('number=10')
        .set('Accept', 'application/json')
        .expect((res) => {
          res.body.number;
        })
        .expect(200, { success: true, data: 'X' })
    });
  });
});