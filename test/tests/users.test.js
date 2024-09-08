const request = require('supertest');
const app = require('../app'); // Assurez-vous d'exporter votre application Express à partir de `app.js`

describe('Users API', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({ name: 'Mamadou', email: 'mamadou@gmail.com' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('name', 'Mamadou');
    expect(response.body).toHaveProperty('email', 'mamadou@gmail.com');
  });

  it('should retrieve all users', async () => {
    const response = await request(app).get('/users');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
