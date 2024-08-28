import request from 'supertest';
import express from 'express';
import app from '.';

describe('GET /', () => {
  it('should return Hello, TypeScript with Express!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, TypeScript with Express!!!');
  });
  afterAll(done => {
    done();
  });
});
