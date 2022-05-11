import * as request from 'supertest';
import { app, server } from '../src/index';

describe('Testing get meeting endpoint', () => {

    test("Should have success and data", async () => {
        const response = await request(app).get('/api/meetings/1/bret').send();

        expect(response.body).toHaveProperty('success');
        expect(response.body).toHaveProperty('data');

    })

    afterAll(() => {
        server.close();
    })

})