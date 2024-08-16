// Use dynamic import for chai and chai-http
import { app } from '../server.js';

describe('Auth Tests', () => {
    let chai;
    let expect;

    before(async () => {
        const chaiModule = await import('chai');
        chai = chaiModule.default;
        const chaiHttpModule = await import('chai-http');
        chai.use(chaiHttpModule.default);
        expect = chai.expect;
    });

    it('should register a user', (done) => {
        const user = {
            name: 'Test User',
            email: 'test@example.com',
            password: 'Password123!'
        };

        chai.request(app)
            .post('/api/auth/register')
            .send(user)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('token');
                done();
            });
    });

    it('should log in a user', (done) => {
        const userCredentials = {
            email: 'test@example.com',
            password: 'Password123!'
        };

        chai.request(app)
            .post('/api/auth/login')
            .send(userCredentials)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('token');
                done();
            });
    });
});
