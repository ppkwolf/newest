const request = require('supertest');
const app = require('./http-server');

describe('GET /', () => {
    let server;

    beforeAll((done) => {
        server = app.listen(4000, () => done()); // Start server on a test-specific port
    });

    afterAll((done) => {
        server.close(() => done()); // Properly close the server
    });

    it('should return Hello World', async () => {
        const res = await request(server).get('/');
        expect(res.text).toBe('Hello World');
        expect(res.statusCode).toBe(200);
    });
});
