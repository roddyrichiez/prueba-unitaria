const request = require('supertest');
const app = require('../index');

describe('Prueba de la aplicación web', () => {
  it('Debería devolver un mensaje de "¡Hola, mundo!" en la ruta raíz', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('¡Hola, mundo!');
  });
});
