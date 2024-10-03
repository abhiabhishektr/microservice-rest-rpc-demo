const request = require('supertest');
const app = require('../src/index');

describe('POST /posts', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/posts')
      .send({ title: 'Test Post' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Test Post');
  });
});
