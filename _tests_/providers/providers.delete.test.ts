import { agent as request } from 'supertest';
import Setup from '../../src/stup-test/test-setup';
import { fillProviders } from '../../mock/Providers/providers';
//------------------Database--------------//
Setup.inicialize('deleteProvider');
//------------------Database--------------//

//------------------Fill database--------------//
async function fillDatabase() {
  const data = fillProviders(3);
  await request(Setup.app).post('/api/provider').send(data[1]);
  await request(Setup.app).post('/api/provider').send(data[2]);
}
//------------------Fill database--------------//

beforeAll(async () => {
  await fillDatabase();
});

const deleteProvider = (endpoint: string) => {
  it(`DELETE PROVIDERS${endpoint}`, async (done) => {
    const total = await request(Setup.app).delete(endpoint);
    expect(total.status).toBe(200);
    done();
  });
};

//------------------Delete tests--------------//
deleteProvider('/api/provider/nike 1');
