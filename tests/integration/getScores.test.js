const request = require('supertest');

describe('/api/getScores', () => {
  let server;
  
  beforeEach(async () => { 
    jest.resetModules();
  });

  afterEach(async () => { 
    await server.close();
  });  

  describe('GET /', () => {
    it('should return 200', async () => {
      server = require('../../index');
      const res = await request(server).get('/api/getScores');
  
      expect(res.status).toBe(200);
    });

    it('should return a list of top 5 scores if there are scores', async () => {
      jest.mock('../../helpers/helpers', () => {
        return {
          getScoresFromFile: jest.fn().mockImplementation(() => {
            return [{ name: "bob", points: "5" }]
          }),
          sortScores: jest.fn().mockImplementation(() => {
            return [{ name: "bob", points: "5" }]
          })
        }
      })

      server = require('../../index');

      const res = await request(server).get('/api/getScores');

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(1);
      expect(res.body.some(s => s.name === 'bob')).toBeTruthy();
    });


    it('should return an empty array if there are no scores', async () => {
      jest.mock('../../helpers/helpers', () => {
        return {
          getScoresFromFile: jest.fn().mockImplementation(() => {
            return []
          }),
          sortScores: jest.fn().mockImplementation(() => {
            return []
          })
        }
      })

      server = require('../../index');
  
      const res = await request(server).get('/api/getScores');

      expect(res.status).toBe(200);
      expect(res.body).toEqual([])
    });
  })
});
