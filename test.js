const request = require('supertest');
const app = require('./http-server');

describe('GET /', () => {
    let server;

    beforeAll((done) => {
        server = app.listen(4000, () => done()); // Start the server before tests
    });

    afterAll((done) => {
        server.close(() => done()); // Close the server after tests
    });

    it('should return Hello World', async () => {
        const res = await request(server).get('/');
        expect(res.text).toBe('Hello World');
        expect(res.statusCode).toBe(200);
    }, 10000); // Set a timeout of 10 seconds
});
