const request = require('supertest');

describe('/api/submitEntry', () => {
  let server;

  jest.mock('../../helpers/helpers', () => {
    return {
      sortScores: jest.fn().mockImplementation(() => {
        return [{}]
      }),
      saveScore: jest.fn().mockImplementation(() => {
        return 5
      }),
      checkScore: jest.fn().mockImplementation(() => {
        return 5
      })
    }
  })
  
  beforeEach(async () => { 
    jest.resetModules();
  });

  afterEach(async () => { 
    await server.close();
  });  

  describe('POST /', () => {
    it('should implement saveScore and return the score', async () => {
      server = require('../../index');

      const res = await request(server).post('/api/submitEntry', { name: 'bob', word: 'word' });
  
      expect(res.status).toBe(200);
      expect(res.body).toBe(5);
    });
  });
});
