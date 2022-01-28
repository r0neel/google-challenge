const request = require('supertest');
const app = require('../server/server.js');

describe('api', () => {
    it('GET / responds with status code 200', (done) => {
        request(app)
        .get('/')
        .expect(200, done);
    });

    it('GET / responds with text/html', (done) => {
        request(app)
        .get('/')
        .expect('Content-Type', "text/html; charset=utf-8", done);
    });

    describe('/topics', () => {
        let testData = [
            "https://www.britannica.com/science/fruit-plant-reproductive-body",
            "https://en.wikipedia.org/wiki/Fruit",
            "https://www.halfyourplate.ca/fruits-and-veggies/fruits-a-z/",
            "https://www.myplate.gov/eat-healthy/fruits",
            "https://www.fruitlogistica.com/en/",
            "https://www.betterhealth.vic.gov.au/health/healthyliving/fruit-and-vegetables"
        ];

        it('GET /topics responds with status code 200', (done) => {
            request(app)
            .get('/topics')
            .expect(200, done); 
        });

        it('GET /topics responds with json', (done) => {
            request(app)
            .get('/topics/')
            .expect('Content-Type', /json/, done);
        });

        it('GET /topics/fruit responds with json', (done) => {
            request(app)
            .get('/topics/fruit')
            .expect('Content-Type', /json/, done);
        });

        it('GET /topics/^&%^& responds with empty object', (done) => {
             request(app)
            .get('/topics/^&%^&')
            .expect({}, done);
        });

        it('GET /topics/fruit responds with correct result', (done) => {
             request(app)
             .get('/topics/fruit')
             .expect(testData, done);
        });
    });
});
