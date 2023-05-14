var request = require('supertest');
const assert = require('assert');
var app = require('./src/App.js');

describe('check /', function () {

    test('responds to /', async () => {
      const res = await request(app).get('/');
      expect(res.header['content-type']).toBe('text/html; charset=utf-8');
      expect(res.statusCode).toBe(200);
    });

});


/*
describe('check /forget', function () {

    test('responds to /', async () => {
      const res = await request(app).get('/forget');
      expect(res.header['content-type']).toBe('text/html; charset=utf-8');
      expect(res.statusCode).toBe(404);
    });

});



describe('check /sign_up', function () {

    test('responds to /', async () => {
      const res = await request(app).get('/sign_up');
      expect(res.header['content-type']).toBe('text/html; charset=utf-8');
      expect(res.statusCode).toBe(404);
    });

});



describe('check /login', function () {

    test('responds to /', async () => {
      const res = await request(app).get('/login');
      expect(res.header['content-type']).toBe('text/html; charset=utf-8');
      expect(res.statusCode).toBe(404);
    });

})*/;
